import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import constants from './constants/states';
import Authentication from './screens/authentication';
import {AsyncStorage} from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import OverviewScreen from './screens/Overview'
import TransactionScreen from './screens/Transactions'
import ProfileScreen from './screens/Profile'

const TabNavigator = createBottomTabNavigator({
  Overview: { screen: OverviewScreen },
  Transaction: { screen: TransactionScreen },
  Profile: {screen: ProfileScreen}
},
{
  initialRouteName: 'Overview'
});

const AppContainer = createAppContainer(TabNavigator);

export default class App extends React.Component {
  constructor(){
    super()

    this.setAuth = this.setAuth.bind(this);

    this.state = {
      isAuth: false,
    }
  }

  setAuth(){
    this.setState({isAuth: true});

    var _retrieveData = async () => {
      try {
        const value = await AsyncStorage.getItem('token');
        if (value != null) {
          console.log(value);
        }else{
          console.log("Fuck me");
        }
      } catch (error) {
        // Error retrieving data
      }
    };
  }

  render() {
      return (
            this.state.isAuth ? <AppContainer/> : <Authentication setAuth = {this.setAuth}/>
        );
  }
}
