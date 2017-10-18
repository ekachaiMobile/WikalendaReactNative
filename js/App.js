import React, { Component } from 'react';
import {
  View,
  Button,
  Image,
  Left,
  Alert,
  Text,
  TouchableHighlight,
  StyleSheet,
  Platform
} from 'react-native';

import { StackNavigator } from "react-navigation";
import { Root } from "native-base";
// import {
//   Container,
//   Header,
//   Title,
//   Content,
//   Button,
//   Icon,
//   Thumbnail,
//   Text,
//   Body,
//   Left,
//   Right,
//   View
// } from "native-base";

import Home from "./screens/Home";
import Detail from "./screens/Detail";
import ListScreen from "./screens/ListScreen";
import AttractionsListScreen from "./screens/AttractionsListScreen";
const styles = StyleSheet.create({
  buttonStyle: {
      padding: 10,
      backgroundColor: 'transparent',
      opacity: 1.0
  }
});

const AppNavigator = StackNavigator(
  {
    Home: { screen: Home },
    AttractionsListScreen: { screen: AttractionsListScreen },
    
    ListScreen: { screen: ListScreen },
    Detail: { screen: Detail },
    
  }, 

  { headerMode: 'screen'},
  {
    initialRouteName: "Home",
    contentOptions: {
      activeTintColor: "#e91e63"
    },
    // navigationOptions: {
    //   title: <Image style ={(Platform.OS === 'ios') ? {width: 150, height: 30} : {width: 320, height: 69}}  source={require("./../img/logo_header.png")}/>  ,
    //   headerTitleStyle: { color: '#aaa' },
    //   headerRight: <TouchableHighlight style={styles.buttonStyle}
    //                                   onPress={() => { Alert.alert('Change Lan!');
    //                                                   console.log("on Press!");
    //                                                   // GLOBAL = require('WikalendaNativeBase/js/global');
    //                                                   // GLOBAL.LANGUAGE  = 'en'
    //                                   }} >
    //                  <Image source={require("./../img/search_language_bt_language_thai.png")}/> 
    //                 </TouchableHighlight>,
    //               // <Button title="Info"
    //               //         onPress={() => { Alert.alert('Change Lan!');
    //               //                         console.log("on Press!");
    //               //         }} >
    //               //  </Button>,
    // },

  } 
  
);

export default () =>
  <Root>
    <AppNavigator />
  </Root>;