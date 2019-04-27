import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.SignInBox}>

          <View style={styles.ProjectTitleBox}>
            <Text style={styles.ProjectTitleText}>
              [Project Name]
            </Text>
          </View>

          <View style={styles.usernameBox}>
            <TextInput
                style={styles.usernameInput}
                placeholder="Username..."
            />
          </View>

          <View style={styles.passwordBox}>
            <TextInput
                style={styles.passwordInput}
                placeholder="Password..."
            />
          </View>


        </View>

        <View style={styles.SignUpBox}>

        </View>



      </View>
    );
  }}

const styles = StyleSheet.create({
  SignInBox: {
    alignItems: 'center',
    backgroundColor: '#a9a9a9',
    flex: 0.65
  },
  ProjectTitleBox:{
    flex: 0.6,
//    backgroundColor: '#a9a229',
    alignItems: 'center',
    width: "100%"
  },
  ProjectTitleText:{
    fontSize: 40,
    textAlignVertical: 'center',
    textAlign: 'center',
    flex: 1
  },
  usernameBox:{
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'center',
//    backgroundColor: '#04a900',
    width: '100%'
  },
  usernameInput:{
    height: 40,
    width: '70%',
    borderColor: 'grey',
    borderWidth: 1,
    paddingLeft: 6,
    fontSize: 20
  },
  passwordBox:{
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'center',
//    backgroundColor: '#a90700',
    width: '100%'
  },
  passwordInput:{
    height: 40,
    width: '70%',
    borderColor: 'grey',
    borderWidth: 1,
    paddingLeft: 6,
    fontSize: 20
  },
  SignUpBox: {
    flex: 0.35,
    backgroundColor: '#4aa99e',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
