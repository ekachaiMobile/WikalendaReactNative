import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Right,
  Button,
  Icon,
  Platform
} from 'react-native';
import { StackNavigator } from 'react-navigation'

export default class Detail extends Component {
  static navigationOptions = {
    headerTitle: (
      <Image style ={ {width: 150, height: 30 , marginLeft: 10} }  source={require("./../../../img/logo_header.png")}/>
    ),
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!{'\n'}{'\n'}
        </Text>
        <Text style={styles.instructions}>
          Learn once, write anywhere: Build mobile apps with React{'\n'}
        </Text>
         <Image style ={ {justifyContent: 'center'} }  source={require("./../../../img/react_logo.png")}/> 
        <Text style={styles.instructions}>
        {'\n'} React Native lets you build mobile apps using only JavaScript. {'\n'} It uses the same design as React, letting you compose a rich mobile UI from declarative components.

        </Text>
      </View>
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
    fontSize: 24,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});