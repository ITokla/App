import { StatusBar } from 'expo-status-bar';
import React from 'react';
import * as RN from 'react-native';
import { StyleSheet, Text, View, Button } from 'react-native';
import Constants from 'expo-constants';
//Drawer navigation
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
//Drawer navigation
//Calendar 2020/7/3
const Days = []

class WeeklyPlan extends React.Component {
  render() {
	var month = [];
	for(let i = 1; i<13;i++){
		month.push(i)
	}
	var weekly = ["一","二","三","四","五","六","日"]
	var nDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];//default the number of month
    state = {
		activeDate: new Date()
	}	
	var matrix = this.generateMatrix();
	return (
	//css
      <RN.View>
      
      </RN.View>
    );
  }
}
//Calendar
//Matrix 2020/7/5
function generateMatrix() {
	var matrix = [];
	// Create header
	matrix[0] = this.weekDays;
	var year = this.state.activeDate.getFullYear();//this year
	var month = this.state.activeDate.getMonth();// this month
	var firstDay = new Date(year, month, 1).getDay();//the first day of the
	//maxDays
	var maxDays = this.nDays[month];
		if (month == 1) { // February
		  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
			maxDays += 1;
		}
	}
	//maxDays
	// fill in the rest of the matrix
	var counter = 1;
	for(var col=0;col<maxDays;col++){
		matrix[col] = -1;
		if (col >= firstDay) {
		  matrix[col] = counter++;
		} else if (counter <= maxDays) {
		  matrix[col] = counter++;
		}		
	}
	// fill in the rest of the matrix
	return matrix;
}
//Matrix

//HomeScreen
function HomeScreen({ navigation }) {
  return (
    <View style={ styles.container }>

    </View>
  );
}
//HomeScreen

//AI
function AI_Screen({ navigation }) {
  return (
    <View style={ styles.container }>

    </View>
  );
}
//AI

//Suggest_Page

function Suggest({ navigation }) {
  return (
    <View style={ styles.container }>

    </View>
  );
}

//Suggest_Page

//Cookbook

function Cookbook({ navigation }) {
  return (
    <View style={ styles.container }>

    </View>
  );
}

//Cookbook

//Share

function Share({ navigation }) {
  return (
    <View style={ styles.container }>

    </View>
  );
}


//Share
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Personal Data" component={HomeScreen} />
        <Drawer.Screen name="AI" component={AI_Screen} />
		<Drawer.Screen name="Suggest" component={Suggest} />
		<Drawer.Screen name="Cookbook" component={Cookbook} />
		<Drawer.Screen name="Share" component={Share} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
	flex: 1, 
	alignItems: 'center', 
	justifyContent: 'center'
  },
});
