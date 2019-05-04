import React from 'react';
import { Text, View, StyleSheet,ScrollView } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import PieChart from 'react-native-pie-chart';
import { Constants } from 'expo';

export default class ProfileScreen extends React.Component {
  render() {
    return (
      <View style={styles.pagecontainer}>
        <Text>Profile</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pagecontainer: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center' 
  }
});
