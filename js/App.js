import React, { Component } from 'react';
import {
  View,
  Button,
  Image,
  Left,
  Alert,
  Text,
  TouchableHighlight,
  StyleSheet
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

const styles = StyleSheet.create({
  buttonStyle: {
      padding: 10,
      backgroundColor: '#00000000',
      opacity: 1.0
  }
});


const AppNavigator = StackNavigator(
  {
    Home: { screen: Home }
  }, 

  // { headerMode: 'none' },
  {
    initialRouteName: "Home",
    contentOptions: {
      activeTintColor: "#e91e63"
    },
    navigationOptions: {
      title: <Image source={require("./../img/logo_header.png")}/>  ,
      headerTitleStyle: { color: '#aaa' },
      headerRight: <TouchableHighlight style={styles.buttonStyle}
                                      onPress={() => { Alert.alert('Change Lan!');
                                                      console.log("on Press!");
                                      }} >
                     <Image source={require("./../img/search_language_bt_language_thai.png")}/> 
                    </TouchableHighlight>,
                  // <Button title="Info"
                  //         onPress={() => { Alert.alert('Change Lan!');
                  //                         console.log("on Press!");
                  //         }} >
                  //  </Button>,
    },

  } 
  
);

export default () =>
  <Root>
    <AppNavigator />
  </Root>;