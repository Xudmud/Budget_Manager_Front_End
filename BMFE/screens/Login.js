import * as React from 'react';
import { Text, View, StyleSheet, Image, TextInput, Button} from 'react-native';
import {Constants} from 'expo';
import {AsyncStorage} from 'react-native';
import constants from '../constants/states';

export default class Login extends React.Component
{
    constructor(props){
        super(props);

        this.state = {
            username: "",
            password: ""
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
                  <TextInput
                      style={styles.textInput}
                      placeholder="username"
                      onChange={(event) => 
                      this.setState({
                        username: event.nativeEvent.text
                      }, () => {
                        this.props.onChangeTextHandler("username", this.state.username);
                      })
                      }
                  />
                  <TextInput
                      secureTextEntry={true} 
                      style={styles.textInput}
                      placeholder="password"
                      onChange={(event) => 
                      this.setState({
                        password: event.nativeEvent.text
                      }, () => {
                        this.props.onChangeTextHandler("password", this.state.password);
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
        height: 40,
        fontSize: 20,
        backgroundColor: '#FFF'
    },
});
