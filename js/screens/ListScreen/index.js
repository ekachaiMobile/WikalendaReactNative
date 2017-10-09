import React, { Component } from 'react';
import { ActivityIndicator, ListView, View,StyleSheet,TouchableHighlight,Image,Alert } from 'react-native';
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


export default class ListScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: null
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
    let url = GLOBAL.BASE_URL +  'main/' + GLOBAL.LANGUAGE + "/" + GLOBAL.CATEID + "/" + GLOBAL.TYPEID + "/" + GLOBAL.PAGE
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
        <View style={{flex: 1, paddingTop: 0}}>
        </View>
      );
    }else{
      return (
        <Container style= {{ backgroundColor :'transparent'}} > 
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
                <ListItem thumbnail style= {{ backgroundColor :'transparent'}} >
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
                </ListItem>}
            /> 
          </Content>
          <View style={stylesee.bottomee}>
            <TouchableHighlight style={stylesee.buttonStyle}
                                      onPress={() => { 
                                            {
                                              GLOBAL = require('WikalendaNativeBase/js/global');
                                              GLOBAL.TYPEID  = '0'
                                              this.componentDidMount()
                                            }
                                      }} >
                <Image 
                style={{width: 100, height: 30}}
                resizeMode={Image.resizeMode.cover}
                source={require("./../../../img/current.png")}/> 
            </TouchableHighlight>
            <TouchableHighlight style={stylesee.buttonStyle}
                                      onPress={() => { 
                                          GLOBAL = require('WikalendaNativeBase/js/global');
                                          GLOBAL.TYPEID  = '1'
                                          this.componentDidMount()
                                      }} >
                <Image 
                style={{width: 100, height: 30}}
                resizeMode={Image.resizeMode.cover}
                source={require("./../../../img/upcoming.png")}/> 
            </TouchableHighlight>
          </View>
        </Container>
      );
    }
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

