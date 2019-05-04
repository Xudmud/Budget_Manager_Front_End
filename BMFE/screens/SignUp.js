import * as React from 'react';
import { Text, View, StyleSheet, Image, TextInput, Button} from 'react-native';
import {Constants} from 'expo';
import {AsyncStorage} from 'react-native';
import constants from '../constants/states';

export default class SignUp extends React.Component 
{
    constructor(props){
      super(props);

      this.state = {
          username: "",
          password: "",
          firstName: "",
          lastName: "",
          email: "",
      }
    }

  render()
  {
    return(
      <View style={styles.pagecontainer}>
        <View > 
          <Text style={styles.paragraph}>
            HELLO WORLD
          </Text>
        </View>

        <View style={styles.container}>
        <Text style={styles.text}> Username </Text>
          <TextInput 
            style={styles.textInput}
            placeholder="Username"
            onChange={(event) => 
            this.setState({
              username: event.nativeEvent.text
            }, () => {
              this.props.onChangeTextHandler("username", this.state.username);
            })
            }
          />

        <Text style={styles.text}>Password</Text>
         <TextInput 
            style={styles.textInput}
            secureTextEntry={true} 
            placeholder="Password"
            onChange={(event) => 
            this.setState({
              password: event.nativeEvent.text
            }, () => {
              this.props.onChangeTextHandler("password", this.state.password);
            })
            }
          />

          <Text style={styles.text}> Email </Text>
          <TextInput 
            style={styles.textInput}
            placeholder="E-mail"
            onChange={(event) => 
            this.setState({
              email: event.nativeEvent.text
            }, () => {
              this.props.onChangeTextHandler("email", this.state.email);
            })
            }
          />

          <Text style={styles.text}> First Name </Text>
          <TextInput 
            style={styles.textInput}
            placeholder="First Name"
            onChange={(event) => 
            this.setState({
              firstName: event.nativeEvent.text
            }, () => {
              this.props.onChangeTextHandler("firstName", this.state.firstName);
            })
            }
          />

          <Text style={styles.text}> Last Name </Text>
          <TextInput 
            style={styles.textInput}
            placeholder="Last Name"
            onChange={(event) => 
            this.setState({
              lastName: event.nativeEvent.text
            }, () => {
              this.props.onChangeTextHandler("lastName", this.state.lastName);
            })
            }            
          />
        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  pagecontainer: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textInput:{
    margin: 5,
    height: 35,
    fontSize: 15,
    backgroundColor: '#FFF'
  },
  text:{
    paddingTop: 10,
    paddingBottom: 5,
    fontSize: 15,
    textAlign: "left"
  }, 
});
