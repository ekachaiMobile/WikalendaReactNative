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
  Platform,
  ActivityIndicator,
  ScrollView,
  ImageBackground
} from 'react-native';
import { StackNavigator } from 'react-navigation'

export default class Detail extends Component {
  static navigationOptions = {
    headerTitle: (
      <Image style ={ {width: 150, height: 30 , marginLeft: 10} }  source={require("./../../../img/logo_header.png")}/>
    ),
  }
  constructor(props) {
    super(props);
    this.state = {
      detailObject:null,
    }
  }

  componentDidMount() {
    const {state} = this.props.navigation;
    console.log("PROPS " + state.params.info.id);
    let detail_id = state.params.info.id
    let cate_id = state.params.info.cat

    var request = new XMLHttpRequest();
    request.onreadystatechange = (e) => {
      let jsonObject = null
      var parseString = require('react-native-xml2js').parseString;
      var xml = request.responseText
      if(xml == null || xml.length == 0 ) {
        return
      }
      parseString(xml, function (err, result) {
         if (result != null){
            let temp = JSON.stringify(result);
            if(temp != null){
              jsonObject = JSON.parse(temp);
              console.log(jsonObject.detail);
            }
            else{
              alert('Server Unreachable Please try again later.')
            }
         }
      });

      if(jsonObject != null){
         console.log("hasOwnProperty",jsonObject.detail.contact);

        this.setState({
          detailObject: jsonObject.detail,
        }, function() {
          // do something with new state
          console.log('data detail not working')
        });
      }
    };
    
    GLOBAL = require('WikalendaNativeBase/js/global');

    let url = GLOBAL.BASE_URL +  'detail/'+ GLOBAL.LANGUAGE  + "/" + cate_id + "/" + detail_id + "/1/"
    console.log('url', url)
    request.open('GET', url);
    request.send();
    return request
  }

  render() {
    if (this.state.detailObject == null) {
      return (
        <View style={{flex: 1}}>
            <ImageBackground
            style={{
              flex: 1,
              width: null,
              height: null,
            }}
            source={require("./../../../img/intro_bg_intro.png")}
            >
            <ActivityIndicator />
          </ImageBackground>
        </View>
      );
    }
    else{

      return (
          <ImageBackground
          style={{
            flex: 1,
            width: null,
            height: null,
          }}
          source={require("./../../../img/intro_bg_intro.png")}
          >
            <ScrollView style={{backgroundColor: 'transparent'}}>
              <View style={styles.container}>

              <View style={{flex:1 ,justifyContent: 'flex-start' , flexDirection: 'row',alignSelf: 'stretch',}}>
                  <Text style={styles.welcome}>
                    {'\n'}
                    {(this.state.detailObject.hasOwnProperty('name') == false) ? '': this.state.detailObject.name[0]}{'\n'}
                  </Text>
                </View> 
                
                <Image style = {{width: 300, height: 300}}  source={{uri: (this.state.detailObject.hasOwnProperty('logo') == false) ? '': this.state.detailObject.logo[0] }}/>

                <Text style={styles.instructions}>
                {'\n'}
                {(this.state.detailObject.hasOwnProperty('what') == false) ? '': this.state.detailObject.what[0]} {'\n'}
                {(this.state.detailObject.hasOwnProperty('where') == false) ? '': this.state.detailObject.where[0]}
                </Text>

              </View> 
            </ScrollView>
          </ImageBackground>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  welcome: {
    fontSize: 18,
    textAlign: 'left',
    alignItems: 'flex-start',
    marginLeft: 10,
    color: '#36399E',
  },
  instructions: {
    fontSize: 16,
    textAlign: 'left',
    color: '#36399E',
    margin: 10,
  },
});