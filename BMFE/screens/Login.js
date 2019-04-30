import * as React from 'react';
import { Text, View, StyleSheet, Image, TextInput, Button} from 'react-native';
import {Constants} from 'expo';
import Config from 'react-native-config';

export default class Login extends React.Component
{
    constructor(){
        super();
        this.handlePress = this.handlePress.bind(this);

        this.state = {
            username: "",
            password: ""
        }
    }

    handlePress = async () => {
        var json = {
            username: this.state.username,
            password: this.state.password
        }
        var uri = 'https://budget-manager-server.herokuapp.com/signin';
        fetch(uri, {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json",
                "cache-control": "no-cache",
            },
            "body": JSON.stringify(json),
        })
            .then(function(res) {
                console.log(res);
                return res;
            })
    };


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
                    <Text style={styles.text}> Don't have an account? Sign Up
                    </Text>
                    <Button
                        title="Sign Up"
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
