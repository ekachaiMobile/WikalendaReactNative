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
import MapView from 'react-native-maps';

let id = 0;
export default class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      region: {
          latitude: 13.773733,
          longitude: 100.571251,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
      },
      markers: [],
    }
  }
  
  onRegionChange(region) {
    this.setState({ region });
  }

  onMapPress(e) {
    console.log('coordinate:',e.nativeEvent.coordinate)
  }

  render() {
    const { infoMap } = this.props;
    console.log('infoMap',infoMap);

    if(this.state.region == null){
      return (
        <View>
        </View>
      );
    }else{
      return (
        <View style={styles.container}>
          <MapView
            style={styles.map}
            initialRegion={this.state.region}
            onPress={(e) => this.onMapPress(e)}
          >
            {infoMap.map(marker => (
              <MapView.Marker
                key={id++}
                coordinate= {{longitude: Number(marker.lng[0]), latitude:  Number(marker.lat[0]) }} 
                pinColor='#36399E'
              >
                <MapView.Callout style={styles.plainView}>
                  <View>
                    <Text>{marker.name[0]}</Text>
                  </View>
                </MapView.Callout>
              { console.log("TEST :" , Number(marker.lat[0]) + ',' + Number(marker.lng[0])) }
              </MapView.Marker>
            ))} 
          </MapView>
        </View>
      );
    }
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
  map: {
    left : 0,
    right : 0,
    top : 0,
    bottom : 0,
    position: 'absolute'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  plainView: {
    
  },
});