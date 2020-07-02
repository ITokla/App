import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Constants from 'expo-constants';
//Drawer navigation
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
//Drawer navigation

//HomeScreen
function HomeScreen({ navigation }) {
  return (
    <View style={ styles.container }>

    </View>
  );
}
//HomeScreen

//Personal_Data
function Personal_Data_Screen({ navigation }) {
  return (
    <View style={ styles.container }>

    </View>
  );
}
//Personal_Data

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
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Personal_Data" component={Personal_Data_Screen} />
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
