import * as React from 'react';
import { Text, View, StyleSheet, Image, TextInput, Button} from 'react-native';
import {Constants} from 'expo';
import {AsyncStorage} from 'react-native';
import Login from './Login';
import SignUp from './SignUp';
import constants from '../constants/states';

export default class Authentication extends React.Component
{
    constructor(props){
        super(props);
        this.switchToLogin = this.switchToLogin.bind(this);
        this.switchToSignUp = this.switchToSignUp.bind(this);
        this.signUpButton = this.signUpButton.bind(this);
        this.loginButton = this.loginButton.bind(this);

        this.state = {
          details: {
            username: "",
            password: "",
            firstName: "",
            lastName: "",
            email: "",
          },
          toggleReg: false,
        }
    }

    onChangeTextHandler = (id, value) => {
        let updateDetails = Object.assign({}, this.state.details);

        updateDetails[id] = value;
        this.setState({
            details: updateDetails
        });
    }

    signUpButton = async () => {
      var json = {
          username: this.state.username,
          password: this.state.password,
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          email: this.state.email
      }
      var uri = 'https://budget-manager-server.herokuapp.com/signup';
      fetch(uri, {
          "method": "POST",
          "headers": {
              "Content-Type": "application/json",
              "cache-control": "no-cache",
          },
          "body": JSON.stringify(json),
      })
          .then((response) => response.json())
          .then((responseJson) => {            
            if(responseJson.success != false){
                var _storeData = async () => {
                    try {
                        await AsyncStorage.setItem('token', responseJson.token);
                    } catch (error) {
                        console.log(error);
                    }
                };
                this.props.setAuth();
                return responseJson.token;
            }else{
                console.log("nothing available");
                return responseJson;
            }

          })
    }

    loginButton = async () => {
        var json = {
            username: this.state.details.username,
            password: this.state.details.password
        };
        
        var uri = 'https://budget-manager-server.herokuapp.com/signin';
        fetch(uri, {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json",
                "cache-control": "no-cache",
            },
            "body": JSON.stringify(json),
        })
            .then((response) => response.json())
            .then((responseJson) => {
              if(responseJson != null){
                var _storeData = async () => {
                    try {
                        await AsyncStorage.setItem('token', responseJson.token);
                    } catch (error) {
                        console.log(error);
                    }
                };
                this.props.setAuth();
                return responseJson.token;
              }else{
                console.log("nothing available");
                return responseJson;
              }
            })
    }
    
    switchToLogin(){
      this.setState({toggleReg: false});
    }
    switchToSignUp(){
      this.setState({toggleReg: true});
    }
    

    
    render()
    {
        const CurrentlySignUp = () => {
            return (
            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                  <Button
                      title="Sign Up"
                      color="#8FD5CB"
                      onPress={this.signUpButton}
                      style = {styles.button}
                  />
                </View>
                <View style={styles.button}>
                  <Button
                      title="Sign In"
                      color="#8FD5CB"
                      onPress={this.switchToLogin}
                  />
                </View>
              </View>
            );
        };

        const CurrentlyLogin = () => {
            return (
            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                  <Button
                      title="Sign Up"
                      color="#8FD5CB"
                      onPress={this.switchToSignUp}
                      style = {styles.button}
                  />
                </View>
                <View style={styles.button}>
                  <Button
                      title="Sign In"
                      color="#8FD5CB"
                      onPress={this.loginButton}
                  />
                </View>
              </View>
            );
        };



        return( 
          <View style = {styles.mainContainer}>
            <View style = {styles.container}>
                { this.state.toggleReg ? <SignUp onChangeTextHandler= {this.onChangeTextHandler}/> : <Login onChangeTextHandler= {this.onChangeTextHandler}/> }
            </View>
                { this.state.toggleReg ? <CurrentlySignUp/> : <CurrentlyLogin/> }
          </View>
       );
    }
}  
   
const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 0.8,
    alignItem: "bottom",
  },
  button: {
    padding: 5,
    bottom: 5,
  },
  buttonContainer:{
    alignItem: "bottom",
    flex:0.2,
  },
  mainContainer: {
    flex: 1,
    width: "100%",
  }
});