import * as React from 'react';
import { Text, View, StyleSheet, Image, TextInput, Button} from 'react-native';
import {Constants} from 'expo';

export default class Login extends React.Component 
{
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
          />

        <Text style={styles.text}>Password</Text>
         <TextInput 
            style={styles.textInput}
            placeholder="Password"
          />

          <Text style={styles.text}> Email </Text>
          <TextInput 
            style={styles.textInput}
            placeholder="E-mail"
          />

          <Text style={styles.text}> First Name </Text>
          <TextInput 
            style={styles.textInput}
            placeholder="First Name"
          />

          <Text style={styles.text}> Last Name </Text>
          <TextInput 
            style={styles.textInput}
            placeholder="Last Name"
          />
        </View>
        

        <View style={styles.container}>
          <Button
            title="Sign Up"
            color="#8FD5CB"
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
  }
});
