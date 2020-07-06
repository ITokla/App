import { StatusBar } from 'expo-status-bar';
import React, { Component }  from 'react';
import * as RN from 'react-native';
import { StyleSheet, Text, View, Button } from 'react-native';
import Constants from 'expo-constants';
//Drawer navigation
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
//Drawer navigation
//
import CalendarStrip from './node_modules/react-native-calendar-strip/src/CalendarStrip';
import moment from 'moment';
//


const styles = StyleSheet.create({
  container: {
	flex: 1, 
	alignItems: 'center', 
	justifyContent: 'center'
  },
});

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

//HomeScreen
function HomeScreen({ navigation }) {
	return (
      <View>
		<CalendarStrip
          scrollable
          calendarAnimation={{type: 'sequence', duration: 30}}
          daySelectionAnimation={{type: 'background', duration: 300, highlightColor: '#9265DC'}}
          style={{height:200, paddingTop: 20, paddingBottom: 10}}
          calendarHeaderStyle={{color: 'white'}}
          calendarColor={'#3343CE'}
          dateNumberStyle={{color: 'white'}}
          dateNameStyle={{color: 'white'}}
          iconContainer={{flex: 0.1}}
		  /*
          customDatesStyles={this.state.customDatesStyles}
          markedDates={this.state.markedDates}
          datesBlacklist={this.datesBlacklistFunc}
          onDateSelected={this.onDateSelected}
          */
		  useIsoWeekday={false}
        />
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

class weekday extends Component{
	constructor(props) {
		super(props);
		let startDate = moment(); // today

		// Create a week's worth of custom date styles and marked dates.
		let customDatesStyles = [];
		let markedDates = [];
		for (let i=0; i<7; i++) {
		  let date = startDate.clone().add(i, 'days');
		  customDatesStyles.push({
			startDate: date, // Single date since no endDate provided
			dateNameStyle: {color: 'blue'},
			dateNumberStyle: {color: 'purple'},
			// Random color...
			dateContainerStyle: { backgroundColor: `#${(`#00000${(Math.random() * (1 << 24) | 0).toString(16)}`).slice(-6)}` },
		  });

		  let dots = [];
		  let lines = [];

		  if (i % 2) {
			lines.push({
			  color: 'cyan',
			  selectedColor: 'orange',
			});
		  }
		  else {
			dots.push({
			  color: 'red',
			  selectedColor: 'yellow',
			});
		  }
		  markedDates.push({
			date,
			dots,
			lines
		  });
	}

    this.state = {
      selectedDate: '',
      customDatesStyles,
      markedDates,
      startDate,
    };
  }

  datesBlacklistFunc = date => {
    return date.isoWeekday() === 6; // disable Saturdays
  }

  onDateSelected = date => {
    this.setState({ formattedDate: date.format('YYYY-MM-DD')});
  }

  render() {
    return (
      <View>
        <CalendarStrip
          scrollable
          calendarAnimation={{type: 'sequence', duration: 30}}
          daySelectionAnimation={{type: 'background', duration: 300, highlightColor: '#9265DC'}}
          style={{height:200, paddingTop: 20, paddingBottom: 10}}
          calendarHeaderStyle={{color: 'white'}}
          calendarColor={'#3343CE'}
          dateNumberStyle={{color: 'white'}}
          dateNameStyle={{color: 'white'}}
          iconContainer={{flex: 0.1}}
          customDatesStyles={this.state.customDatesStyles}
          markedDates={this.state.markedDates}
          datesBlacklist={this.datesBlacklistFunc}
          onDateSelected={this.onDateSelected}
          useIsoWeekday={false}
        />
      </View>
    );
  }	
}

