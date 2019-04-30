import * as React from 'react';
import { Text, View, StyleSheet, Image, TextInput, Button, TouchableOpacity} from 'react-native';
import {Constants} from 'expo';
import {AsyncStorage} from 'react-native';
import constants from '../constants/states';

export default class Login extends React.Component
{
    constructor(){
        super();
        this.handlePress = this.handlePress.bind(this);
        this.changeToSignUp = this.changeToSignUp.bind(this);

        this.state = {
            username: "",
            password: ""
        }
    }

    handlePress = async () => {
        var json = {
            username: this.state.username,
            password: this.state.password
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
                constants.LOGGED_IN = true;

                var _storeData = async () => {
                    try {
                        await AsyncStorage.setItem('token', responseJson.token);
                    } catch (error) {
                        // Error saving data
                    }
                };

                var _retrieveData = async () => {
                    try {
                        const value = await AsyncStorage.getItem('token');
                        if (value !== null) {
                            // We have data!!
                            console.log(value);
                        }
                    } catch (error) {
                        // Error retrieving data
                    }
                };

                return responseJson.token;
            })
    };

    changeToSignUp(){
        console.log("Hi");
        constants.SIGNUP = true;
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
                        onChangeText={(username) => this.setState({username})}
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder="password"
                        onChangeText={(password) => this.setState({password})}
                    />
                </View>
                <View style={styles.container}>
                    <Text style={styles.text}>
                        Don't have an account? Sign Up
                    </Text>

                    <Button
                        title="Sign In"
                        color="#8FD5CB"
                        onPress={this.handlePress}
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
    text:{
        paddingTop: 10,
        paddingBottom: 5,
        fontSize: 13,
        textAlign: "center"
    }
});
