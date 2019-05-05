import React from 'react';
import { Text, View, StyleSheet,ScrollView } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import PieChart from 'react-native-pie-chart';
import { Constants } from 'expo';
import OverviewScreen from './Overview'
import TransactionScreen from './Transactions'
import ProfileScreen from './Profile'


const TabNavigator = createBottomTabNavigator({
    Overview: { screen: OverviewScreen },
    Transaction: { screen: TransactionScreen },
    Profile: {screen: ProfileScreen}
  },
  {
    initialRouteName: 'Overview'
  });

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
});

export default createAppContainer(TabNavigator);