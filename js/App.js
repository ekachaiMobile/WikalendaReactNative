import React, { Component } from 'react';
import {
  View,
  Button,
  Image
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

    },
  
  }

);

export default () =>
  <Root>
    <AppNavigator />
  </Root>;