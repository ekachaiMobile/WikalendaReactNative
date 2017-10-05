import React, { Component } from 'react';
import { ActivityIndicator, ListView, View } from 'react-native';
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

const sankhadeep = require("./../../../img/contacts/sankhadeep.png");
const supriya = require("./../../..//img/contacts/supriya.png");
const himanshu = require("./../../..//img/contacts/himanshu.png");
const shweta = require("./../../../img/contacts/shweta.png");
const shruti = require("./../../../img/contacts/shruti.png");
const shivraj = require("./../../../img/contacts/shivraj.jpg");

const datas = [
  {
    img: sankhadeep,
    text: "Sankhadeep",
    note: "Its time to build a difference . ."
  },
  {
    img: supriya,
    text: "Supriya",
    note: "One needs courage to be happy and smiling all time . . "
  },
  {
    img: himanshu,
    text: "Himanshu",
    note: "Live a life style that matchs your vision"
  },
  {
    img: shweta,
    text: "Shweta",
    note: "Failure is temporary, giving up makes it permanent"
  },
  {
    img: shruti,
    text: "Shruti",
    note: "The biggest risk is a missed opportunity !!"
  },
  {
    img: shivraj,
    text: "Shivraj",
    note: "Time changes everything . ."
  }
];

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
      parseString(xml, function (err, result) {
         if (result != null){
            let temp = JSON.stringify(result);

            jsonObject = JSON.parse(temp);
            console.log(jsonObject.items.item[0].name[0]);
         }
      });

      if(jsonObject != null){
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({
          isLoading: false,
          dataSource: ds.cloneWithRows(jsonObject.items.item),
        }, function() {
          // do something with new state
          console.log('componentDidMount')
        });
      }

    };
    
    request.open('GET', 'http://www.wikalenda.com/feed/main/th/1/2/1/');
    request.send();
    return request

    // return fetch('https://facebook.github.io/react-native/movies.json')
    // return fetch('http://www.wikalenda.com/feed/main/th/1/2/1/')
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

    return (
      <Container> 
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

        <Content>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={data =>
              <ListItem thumbnail>
                <Left>
                  <Thumbnail square size={55} source={data.name[0]} />
                </Left>
                <Body>
                  <Text>{data.title}</Text>
                  <Text numberOfLines={2} note>{data.name[0]}</Text>
                </Body>
                <Right>
                  <Button transparent>
                    <Text>View</Text>
                  </Button>
                </Right>
              </ListItem>}
          />
        </Content>
      </Container>
    );
  }
  
}