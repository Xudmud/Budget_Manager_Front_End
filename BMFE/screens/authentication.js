import * as React from 'react';
import { Text, View, StyleSheet, Image, TextInput, Button} from 'react-native';
import {Constants} from 'expo';
import {AsyncStorage} from 'react-native';
import Login from './Login';
import SignUp from './SignUp';
import constants from '../constants/states';

export default class Authentication extends React.Component
{
    constructor(){
        super();
        this.logoutUser = this.logoutUser.bind(this);

        this.state = {
            username: "",
            password: "",
        }
    }

    logoutUser() {
        return dispatch => {
            var _removeData = async () => {
                try {
                    await AsyncStorage.removeItem('token');
                } catch (error) {
                    console.log(error);
                }
            };
        }
    }

    render()
    {
        const userNotLoggedIn = (
            <View style = {styles.container}>
                { constants.SIGNUP ? <SignUp/> : <Login/> }
            </View>
        );

        return(
            <View style = {styles.container}>
                {constants.LOGGED_IN ? <View><Text>sdlfkjeoifowseijfosei</Text></View> : userNotLoggedIn}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flex: 1,
    },
});