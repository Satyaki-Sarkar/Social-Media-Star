import React,{Component} from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import facebook from "./screens/facebook";
import instagram from "./screens/instagram";

export default class App extends Component{
  render(){
    return(
      <AppContainer/>
    )
  }
}

const TabNavigator=createBottomTabNavigator({
  Facebook : {screen:facebook},
  Instagram : {screen:instagram}
});

const AppContainer=createAppContainer(TabNavigator);