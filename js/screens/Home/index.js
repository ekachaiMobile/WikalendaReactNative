import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Right,
  Button,
  Icon,
  TouchableHighlight,
  Dimensions,
  Platform,
  Alert
} from 'react-native';
import {
  Container,
  ScrollableTab,
  Tabs,
  Tab
} from "native-base";
import { StackNavigator } from 'react-navigation';

import ListScreen from "./../ListScreen";
import ExhibitionListScreen from "./../ExhibitionListScreen";
import FairsListScreen from "./../FairsListScreen";
import FestivalsListScreen from "./../FestivalsListScreen";
import ConventionsListScreen from "./../ConventionsListScreen";
import ShowListScreen from "./../ShowListScreen";
import ConcertsListScreen from "./../ConcertsListScreen";
import ArtgallriesListScreen from "./../ArtgallriesListScreen";
import SportsListScreen from "./../SportsListScreen";

import AttractionsListScreen from "./../AttractionsListScreen";
import HotelListScreen from "./../HotelListScreen";
import EatdrinkListScreen from "./../EatdrinkListScreen";
import MedicalListScreen from "./../MedicalListScreen";
import TravelListScreen from "./../TravelListScreen";

import Detail from "./../Detail";
import MapScreen from "./../Map";

var width_screen = Dimensions.get('window').width;

export default class Home extends Component {
  static navigationOptions = {
    headerTitle: (
      <Image style ={ {width: 150, height: 30 , marginLeft: 10} }  source={require("./../../../img/logo_header.png")}/>
    ),
    headerRight:(
      <TouchableHighlight style={ {marginRight: 10}}
          onPress={() => { Alert.alert('React javascript cross platform');
  
                          // GLOBAL = require('WikalendaNativeBase/js/global');
                          // GLOBAL.LANGUAGE  = 'en'
          }} >
          <Image source={require("./../../../img/search_language_bt_language_thai.png")}/> 
      </TouchableHighlight>
    ),

  }
  constructor(props) {
    super(props);
    this.state = {
      eventButton: require("./../../../img/menu_bt_event_active.png"),
      travelButton:require("./../../../img/menu_bt_travel.png"),
      mapButton:require("./../../../img/menu_bt_map.png"),
      currentTab: 'event'
    }
    this.onRowPress = this.onRowPress.bind(this);
  }

  onRowPress(infoData) {
    console.log('info  :',infoData)
    this.props.navigation.navigate('Detail', { info: infoData } );
  }

  render() {
    const resizeMode = 'cover';
    
    return (
      <Container> 
        <ImageBackground
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

     </ImageBackground>

    </Container>
    );
  }

  renderMap(){
    GLOBAL = require('WikalendaNativeBase/js/global'); 
    return <MapScreen infoMap={GLOBAL.DATALISTMAP}></MapScreen>
  } 
  renderList(){
    if (this.state.currentTab == 'event'){
        return  <Tabs style= {{ marginTop : 45 ,backgroundColor :'#ffffff' ,}}
        renderTabBar={() => <ScrollableTab />}>
          <Tab 
          tabStyle= {{backgroundColor: '#0E6D90'}}
          textStyle={{color: '#fff'}}
          activeTabStyle={{backgroundColor: '#0E6D90'}}
          activeTextStyle={{color: '#fff', fontWeight: 'normal'}}
          style= {{ backgroundColor :'transparent'}}
          heading="EXHIBITION">
            <ExhibitionListScreen onRowPress={this.onRowPress}></ExhibitionListScreen>
          </Tab>
          <Tab 
          tabStyle= {{backgroundColor: '#0E6D90'}}
          textStyle={{color: '#fff'}}
          activeTabStyle={{backgroundColor: '#0E6D90'}}
          activeTextStyle={{color: '#fff', fontWeight: 'normal'}}
          style= {{ backgroundColor :'transparent'}}
          heading="FAIRS">
            <FairsListScreen onRowPress={this.onRowPress}></FairsListScreen>
          </Tab>
          <Tab 
          tabStyle= {{backgroundColor: '#0E6D90'}}
          textStyle={{color: '#fff'}}
          activeTabStyle={{backgroundColor: '#0E6D90'}}
          activeTextStyle={{color: '#fff', fontWeight: 'normal'}}
          style= {{ backgroundColor :'transparent'}}
          heading="FESTIVALS">
          <FestivalsListScreen onRowPress={this.onRowPress}></FestivalsListScreen>
          </Tab>
          <Tab 
          tabStyle= {{backgroundColor: '#0E6D90'}}
          textStyle={{color: '#fff'}}
          activeTabStyle={{backgroundColor: '#0E6D90'}}
          activeTextStyle={{color: '#fff', fontWeight: 'normal'}}
          style= {{ backgroundColor :'transparent'}}
          heading="CONVENTIONS">
          <ConventionsListScreen onRowPress={this.onRowPress}></ConventionsListScreen>
          </Tab>
          <Tab 
          tabStyle= {{backgroundColor: '#0E6D90'}}
          textStyle={{color: '#fff'}}
          activeTabStyle={{backgroundColor: '#0E6D90'}}
          activeTextStyle={{color: '#fff', fontWeight: 'normal'}}
          style= {{ backgroundColor :'transparent'}}
          heading="SHOW">
          <ShowListScreen onRowPress={this.onRowPress}></ShowListScreen>
          </Tab>
          <Tab 
          tabStyle= {{backgroundColor: '#0E6D90'}}
          textStyle={{color: '#fff'}}
          activeTabStyle={{backgroundColor: '#0E6D90'}}
          activeTextStyle={{color: '#fff', fontWeight: 'normal'}}
          style= {{ backgroundColor :'transparent'}}
          heading="CONCERTS">
          <ConcertsListScreen onRowPress={this.onRowPress}></ConcertsListScreen>
          </Tab>
          <Tab 
          tabStyle= {{backgroundColor: '#0E6D90'}}
          textStyle={{color: '#fff'}}
          activeTabStyle={{backgroundColor: '#0E6D90'}}
          activeTextStyle={{color: '#fff', fontWeight: 'normal'}}
          style= {{ backgroundColor :'transparent'}}
          heading="ART GALLRIES">
          <ArtgallriesListScreen onRowPress={this.onRowPress}></ArtgallriesListScreen>
          </Tab>
          <Tab 
          tabStyle= {{backgroundColor: '#0E6D90'}}
          textStyle={{color: '#fff'}}
          activeTabStyle={{backgroundColor: '#0E6D90'}}
          activeTextStyle={{color: '#fff', fontWeight: 'normal'}}
          style= {{ backgroundColor :'transparent'}}
          heading="SPOTS">
          <SportsListScreen onRowPress={this.onRowPress}></SportsListScreen>
          </Tab>
        </Tabs>
    }else{
      return <Tabs style= {{ marginTop : 45 ,}}
      renderTabBar={() => <ScrollableTab />}>
        <Tab 
        tabStyle= {{backgroundColor: '#0E6D90'}}
        textStyle={{color: '#fff'}}
        activeTabStyle={{backgroundColor: '#0E6D90'}}
        activeTextStyle={{color: '#fff', fontWeight: 'normal'}}
        style= {{ backgroundColor :'transparent'}}
        heading="ATTRACTIONS">
          <AttractionsListScreen onRowPress={this.onRowPress}></AttractionsListScreen>
        </Tab>
        <Tab 
        tabStyle= {{backgroundColor: '#0E6D90'}}
        textStyle={{color: '#fff'}}
        activeTabStyle={{backgroundColor: '#0E6D90'}}
        activeTextStyle={{color: '#fff', fontWeight: 'normal'}}
        style= {{ backgroundColor :'transparent'}}
        heading="HOTELS">
        <HotelListScreen onRowPress={this.onRowPress}></HotelListScreen>
        </Tab>
        <Tab 
        tabStyle= {{backgroundColor: '#0E6D90'}}
        textStyle={{color: '#fff'}}
        activeTabStyle={{backgroundColor: '#0E6D90'}}
        activeTextStyle={{color: '#fff', fontWeight: 'normal'}}
        style= {{ backgroundColor :'transparent'}}
        heading="EAT&DRINK">
        <EatdrinkListScreen onRowPress={this.onRowPress}></EatdrinkListScreen>
        </Tab>
        <Tab 
        tabStyle= {{backgroundColor: '#0E6D90'}}
        textStyle={{color: '#fff'}}
        activeTabStyle={{backgroundColor: '#0E6D90'}}
        activeTextStyle={{color: '#fff', fontWeight: 'normal'}}
        style= {{ backgroundColor :'transparent'}}
        heading="MEDICAL&SPA">
        <MedicalListScreen onRowPress={this.onRowPress}></MedicalListScreen>
        </Tab>
        <Tab 
        tabStyle= {{backgroundColor: '#0E6D90'}}
        textStyle={{color: '#fff'}}
        activeTabStyle={{backgroundColor: '#0E6D90'}}
        activeTextStyle={{color: '#fff', fontWeight: 'normal'}}
        style= {{ backgroundColor :'transparent'}}
        heading="TRAVEL&ROUTE">
        <TravelListScreen onRowPress={this.onRowPress}></TravelListScreen>
        </Tab>
      </Tabs>
      
    }
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
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
});