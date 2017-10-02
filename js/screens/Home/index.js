import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Right,
  Button,
  Icon
} from 'react-native';
import {
  Container,
  ScrollableTab,
  Tabs,
  Tab
} from "native-base";

import Detail from "./../Detail";

export default class Home extends Component {
  render() {
    return (
      <Container>
      <Tabs renderTabBar={() => <ScrollableTab />}>
        <Tab heading="Tab1">
          <Detail />
        </Tab>
        <Tab heading="Tab2">
          <Detail />
        </Tab>
        <Tab heading="Tab3">
          <Detail />
        </Tab>
        <Tab heading="Tab4">
          <Detail />
        </Tab>
        <Tab heading="Tab5">
          <Detail />
        </Tab>
      </Tabs>
    </Container>

      // <View style={styles.container}>
      //   <Text style={styles.welcome}>
      //     Welcome to React Native! This is home
      //   </Text>
      //   <Text style={styles.instructions}>
      //     To get started, edit index.ios.js
      //   </Text>
      //   <Text style={styles.instructions}>
      //     Press Cmd+R to reload,{'\n'}
      //     Cmd+D or shake for dev menu
      //   </Text>
      // </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});