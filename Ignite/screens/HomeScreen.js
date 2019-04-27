import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.ProjectTitle}>
          <Text style={styles.ProjectTitleText}>
            [Project Name]
          </Text>
        </View>

        <View style={styles.SignInBox}>
          <Text style={styles.ProjectTitleText}>
            gerdgsdrg
          </Text>

        </View>
      </View>
    );
  }}

const styles = StyleSheet.create({
  ProjectTitleText:{
    fontSize: 20,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  ProjectTitle: {
    paddingTop: 40,
    marginBottom: 10,
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    backgroundColor: '#a9a9a9',
    paddingVertical: 15,
  },
  SignInBox: {
    alignItems: 'center',
    marginTop: 50,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#ffffff'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
