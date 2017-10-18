import React, { Component } from 'react';
import { ActivityIndicator, ListView, View,StyleSheet,TouchableHighlight,Image,ImageBackground,Alert } from 'react-native';
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  List,
  ListItem,
  Text,
  Thumbnail,
  Left,
  Body,
  Right
} from "native-base";
import Detail from "./../Detail";

export default class ListScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: null,
      cateID:'0',
      monthButton: require("./../../../img/current.png"),
      upcomingButton:require("./../../../img/upcoming.png")
    }
  }

  componentDidMount() {
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
              console.log(jsonObject);
              // console.log(jsonObject.items.item[0].name[0]);
            }
            else{
              alert('Server Unreachable Please try again later.')
            }
         }
      });
      
      if(jsonObject != null && jsonObject.items != null && jsonObject.items.item != null){
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({
          isLoading: false,
          dataSource: ds.cloneWithRows(jsonObject.items.item),
        }, function() {
          // do something with new state
          console.log('bind data not working')
        });
      }
      else{
        this.setState({
          isLoading: false,
          dataSource: null,
        }, function() {
        });
      }

    };
    
    GLOBAL = require('WikalendaNativeBase/js/global');
    let url = GLOBAL.BASE_URL +  'main/' + GLOBAL.LANGUAGE + "/" + this.state.cateID + "/" + GLOBAL.TYPEID + "/" + GLOBAL.PAGE
    console.log('url', url)
    request.open('GET', url);
    request.send();
    return request

    // return fetch('https://facebook.github.io/react-native/movies.json')
    //   .then((response) => response.json())
    //   .then((responseJson) => {

    //     let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    //     this.setState({
    //       isLoading: false,
    //       dataSource: ds.cloneWithRows(responseJson.movies),
    //     }, function() {
    //       // do something with new state
    //       console.log('componentDidMount')
    //     });

    //     // console.log(responseJson)
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }

    // return (
    //   <View style={{flex: 1, paddingTop: 20}}>
    //     <ListView
    //       dataSource={this.state.dataSource}
    //       renderRow={(rowData) => <Text>{rowData.title}, {rowData.releaseYear}</Text>}
    //     />
    //   </View>
    //   );
    // };

    if (!this.state.dataSource) {
      return(
        <View style={{flex: 1.0, paddingTop: 0}}>
          <View style={{flex: 0.92, paddingTop: 0 , alignItems:'center',justifyContent:'center'}}><Text>ไม่พบข้อมูล</Text></View>
          <View style={stylesee.bottomee}>
            <TouchableHighlight style = {stylesee.buttonStyle}
                                onPress = {() => { { this.currentMonthOnPress()} }} >
                <Image 
                style={{width: 100, height: 30}}
                resizeMode={Image.resizeMode.cover}
                source={this.state.monthButton}/> 
            </TouchableHighlight>
            <TouchableHighlight style={stylesee.buttonStyle}
                                      onPress={() => { this.upcomingOnPress() }} >
                <Image 
                style={{width: 100, height: 30}}
                resizeMode={Image.resizeMode.cover}
                source={this.state.upcomingButton}/> 
            </TouchableHighlight>
          </View>
      
        </View>
      );
    }else{
      return (
        <Container style= {{ backgroundColor :'transparent',}} > 
          {/* <Header>
            <Left>
              <Button transparent onPress={() => this.props.navigation.goBack()}>
                <Icon name="arrow-back" />
              </Button>
            </Left>

            <Body>
              <Title>List Thumbnail</Title>
            </Body>
            <Right />
          </Header> */}

          <Content style= {{ backgroundColor :'transparent'}}>
          
            <ListView
              style= {{ backgroundColor :'transparent'}}
              dataSource={this.state.dataSource}
              renderRow={data =>
              
                  <ListItem thumbnail style= {{ backgroundColor :'transparent'}} onPress={() => {this._onPressRow(data.$)}} >
                    <Left>
                      <Thumbnail square size={55} source={{uri: (data == null)? '': data.image[0]}} />
                    </Left>
                    <Body>
                      <Text numberOfLines={1} note>{(data == null)? '':data.name[0]}</Text>
                      <Text numberOfLines={2} note>{(data == null)? '':data.info[0] + data.info2[0]}</Text>
                    </Body>
                    {/* <Right>
                      <Button transparent>
                        <Text>View</Text>
                      </Button>
                    </Right> */}
                  </ListItem>
                
                }
            /> 
          
          </Content>
          <View style={stylesee.bottomee}>
            <TouchableHighlight style = {stylesee.buttonStyle}
                                onPress = {() => { { this.currentMonthOnPress()} }} >
                <Image 
                style={{width: 100, height: 30}}
                resizeMode={Image.resizeMode.cover}
                source={this.state.monthButton}/> 
            </TouchableHighlight>
            <TouchableHighlight style={stylesee.buttonStyle}
                                      onPress={() => { this.upcomingOnPress() }} >
                <Image 
                style={{width: 100, height: 30}}
                resizeMode={Image.resizeMode.cover}
                source={this.state.upcomingButton}/> 
            </TouchableHighlight>
          </View>
        </Container>
      );
    }
  }

  _onPressRow(contentFeed) {
    
    //let item = JSON.parse(contentFeed);
    console.log(contentFeed.cat[0]);
    //Alert.alert('555');

    // var LoginView = new Detail()
    // // this.props.navigation('Detail')

    // // this.props.navigator.replace({
    // //   component: LoginView,
    // //   title: 'Detail',
    // // })

    // this.props.navigator.push({
    //   component: LoginView,
    //   passProps: {
    //     name: LoginView
    //   }
    // })

    // this.props.navigation.navigate('NestedNavigator');
    // this.props.navigation.navigate('Detail');
    this.props.onRowPress(contentFeed);
  }

  currentMonthOnPress() {
    GLOBAL = require('WikalendaNativeBase/js/global');
    GLOBAL.TYPEID  = '0'
    this.setState({
        monthButton: require("./../../../img/current.png"),
        upcomingButton: require("./../../../img/upcoming.png"),
    })
    this.componentDidMount()
  }
  upcomingOnPress(){
    GLOBAL = require('WikalendaNativeBase/js/global');
    GLOBAL.TYPEID  = '1'
    this.setState({
      monthButton: require("./../../../img/current_active.png"),
      upcomingButton: require("./../../../img/upcoming_active.png"),
  })
    this.componentDidMount()
  }
}

const stylesee = StyleSheet.create({
  bottomee: {
    flex: 0.08,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'transparent',
    flexDirection:'row',
  },
  buttonStyle: {
    marginBottom: 5,
    backgroundColor: 'transparent',
    opacity: 1.0
  },
});

