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
  TouchableHighlight,
  Dimensions
} from 'react-native';
import {
  Container,
  ScrollableTab,
  Tabs,
  Tab
} from "native-base";

import ListScreen from "./../ListScreen";
import ListScreen2 from "./../ListScreen";

import HotelListScreen from "./../HotelListScreen";
import Detail from "./../Detail";

var width_screen = Dimensions.get('window').width;

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventButton: require("./../../../img/menu_bt_event_active.png"),
      travelButton:require("./../../../img/menu_bt_travel.png"),
      mapButton:require("./../../../img/menu_bt_map.png"),
      currentTab: 'event'
    }
  }
  render() {
    const resizeMode = 'cover';
    return (
      
      <Container> 
        <Image
        style={{
          flex: 1,
          width: null,
          height: null,
        }}
        source={require("./../../../img/intro_bg_intro.png")}
        >

        {this.state.currentTab == 'nearby' ? this.renderMap() : this.renderList()}

        <View style={styles.bottomee}>
            <TouchableHighlight style={styles.buttonStyle}
                                      onPress={() => { { this.eventOnPress()} }} >
                <Image 
                style={{width: width_screen*0.34, height: 50}}
                resizeMode={Image.resizeMode.cover}
                source={this.state.eventButton}/> 
            </TouchableHighlight>
            <TouchableHighlight style={styles.buttonStyle}
                                      onPress={() => { this.travelOnPress()}} >
                <Image 
                style={{width: width_screen*0.34, height: 50}}
                resizeMode={Image.resizeMode.cover}
                source={this.state.travelButton}/> 
            </TouchableHighlight>
            <TouchableHighlight style={styles.buttonStyle}
                                      onPress={() => { this.nearbyOnPress() }} >
                <Image 
                style={{width: width_screen*0.34, height: 50}}
                resizeMode={Image.resizeMode.cover}
                source={this.state.mapButton}/> 
            </TouchableHighlight>
          </View>

     </Image>

    </Container>
    );
  }

  renderMap(){
    return <Text  style= {{ marginTop : 55 ,}}> Map Render </Text>
  } 
  renderList(){
    return  <Tabs style= {{ marginTop : 45 ,}}
    renderTabBar={() => <ScrollableTab />}>
      <Tab 
      style= {{ backgroundColor :'transparent'}}
      heading="EXHIBITION">
        <ListScreen />
      </Tab>
      <Tab 
      style= {{ backgroundColor :'transparent'}}
      heading="FAIRS">

        <ListScreen />
      </Tab>
      <Tab 
      style= {{ backgroundColor :'transparent'}}
      heading="FESTIVALS">
      {this.selectCate('9')}
        <ListScreen2 />
      </Tab>
      <Tab 
      style= {{ backgroundColor :'transparent'}}
      heading="CONVENTIONS">
        <HotelListScreen />
      </Tab>
      <Tab 
      style= {{ backgroundColor :'transparent'}}
      heading="SHOW">
        <Detail />
      </Tab>
      <Tab 
      style= {{ backgroundColor :'transparent'}}
      heading="CONCERTS">
        <Detail />
      </Tab>
      <Tab 
      style= {{ backgroundColor :'transparent'}}
      heading="ART GALLRIES">
        <Detail />
      </Tab>
      <Tab 
      style= {{ backgroundColor :'transparent'}}
      heading="SPOTS">
        <Detail />
      </Tab>
    </Tabs>
  } 

  selectCate(cateID){
    GLOBAL = require('WikalendaNativeBase/js/global');
    GLOBAL.CATEID  = cateID
  }

  eventOnPress() {
    this.setState({
      eventButton: require("./../../../img/menu_bt_event_active.png"),
      travelButton:require("./../../../img/menu_bt_travel.png"),
      mapButton:require("./../../../img/menu_bt_map.png"),
      currentTab:'event'
    })
  }
  travelOnPress() {
    this.setState({
      eventButton: require("./../../../img/menu_bt_event.png"),
      travelButton:require("./../../../img/menu_bt_travel_active.png"),
      mapButton:require("./../../../img/menu_bt_map.png"),
      currentTab:'travel'
    })
  }
  nearbyOnPress() {
    this.setState({
      eventButton: require("./../../../img/menu_bt_event.png"),
      travelButton:require("./../../../img/menu_bt_travel.png"),
      mapButton:require("./../../../img/menu_bt_map_active.png"),
      currentTab:'nearby'
    })
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
  buttonStyle: {
    backgroundColor: 'transparent',
    opacity: 1.0,
  },
  bottomee: {
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'transparent',
    flexDirection:'row',
    position: 'absolute',
  },
});