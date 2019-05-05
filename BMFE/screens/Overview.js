import React from 'react';
import { Text, View, StyleSheet,ScrollView } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import PieChart from 'react-native-pie-chart';
import { Constants } from 'expo';

export default class OverviewScreen extends React.Component {
  render() {

    const chart_wh = 200;
    const series = [123, 321, 123, 789, 537];
    const sliceColor = ['#F44336', '#2196F3', '#FFEB3B', '#4CAF50', '#FF9800'];


    return (
      <View style={styles.pagecontainer}>
      
      <View>
        <Text style={styles.paragraph}>Cash Flow</Text>
      </View>

        <View>
          <Text style={styles.paragraph}>Spending Breakdown</Text>
        </View>
        <PieChart
          chart_wh={chart_wh}
          series={series}
          sliceColor={sliceColor}
          doughnut={true}
          coverRadius={0.33}
          coverFill={'#ecf0f1'}
        />

      <View>
        <Text style={styles.paragraph}>Recent Transactions</Text>
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
});
