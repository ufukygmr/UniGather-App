import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  Dimensions,
  TouchableOpacity,
  TextInput,
  Alert
} from 'react-native';

import { Rating, AirbnbRating } from 'react-native-ratings';
import {observer} from 'mobx-react';
import firestore from '@react-native-firebase/firestore';
import MainStore from './store';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

@observer
class Events extends React.Component{
  constructor(props){
    super(props)
    this.state = {
    }
  }

  takeEvents = () => {
    MainStore.events = []
    firestore().collection("Spor/days/"+MainStore.chosenDay)
      // .doc("ad")
      .get()
      .then( querySnapshot => {
      
          querySnapshot.forEach(documentSnapshot => {
            MainStore.events = [
              ...MainStore.events, 
              documentSnapshot.data()
            ]
        })
        
      })
  }



  render (){
    const EventList = MainStore.events.map(event => {
        return ((
          <TouchableOpacity style = {styles.meduimContainer}>
            <Image style = {styles.pp} />
              <View style = {styles.smallContainer}>
                <Text style = {styles.subHeader}>{event.name}</Text>
                <Text style = {{marginLeft: 17, fontWeight: 'bold', color: '#5572b5', marginTop: 5 }}>{event.time}</Text>
              </View>
              <Rating
                type='star'
                ratingCount={5}
                startingValue={event.level}
                readonly = {true}
                imageSize={14}
                // showRating
                isDisabled = {true}
                style = {{marginLeft: 80}}
              />
          </TouchableOpacity>
        ))
      })
    return (
      <>
        <StatusBar barStyle = "light-content"/>
        <SafeAreaView style = {styles.container}>
          {/* <Text style = {styles.header}>Kategoriler</Text> */}
          <View style = {{flexDirection: 'row', marginTop: 30, marginLeft: screenWidth*6/100}}>
              <TouchableOpacity style = {{ marginLeft: 18, justifyContent: 'center'}} onPress = {()=> {
                MainStore.chosenDay= 0
                this.takeEvents()
              }}>
                <Text style = {{fontSize: 24, fontWeight: '400', color: '#5572b5'}}>23</Text>
                <Text style = {{color:'#5572b5', fontSize: 12, fontWeight: '300', textAlign: 'center', marginTop: 6 }}>Pzt</Text>
              </TouchableOpacity>
              <TouchableOpacity style = {{ marginLeft: 18, justifyContent: 'center'}} onPress = {()=> {
                MainStore.chosenDay= 1
                this.takeEvents()
                }}>
                <Text style = {{fontSize: 24, fontWeight: '400', color: '#5572b5'}}>24</Text>
                <Text style = {{color:'#5572b5', fontSize: 12, fontWeight: '300', textAlign: 'center', marginTop: 6 }}>Sal</Text>
              </TouchableOpacity>
              <TouchableOpacity style = {{ marginLeft: 18, justifyContent: 'center'}}  onPress = {()=> {
                MainStore.chosenDay=  2
                this.takeEvents()
              }}>
                <Text style = {{fontSize: 24, fontWeight: '400', color: '#5572b5'}}>25</Text>
                <Text style = {{color:'#5572b5', fontSize: 12, fontWeight: '300', textAlign: 'center', marginTop: 6 }}>Car</Text>
              </TouchableOpacity>
              <TouchableOpacity style = {{ marginLeft: 18, justifyContent: 'center'}}  onPress = {()=> {
                MainStore.chosenDay = 3
                this.takeEvents()
                }}>
                <Text style = {{fontSize: 24, fontWeight: '400', color: '#5572b5'}}>26</Text>
                <Text style = {{color:'#5572b5', fontSize: 12, fontWeight: '300', textAlign: 'center', marginTop: 6 }}>Per</Text>
              </TouchableOpacity>
              <TouchableOpacity style = {{ marginLeft: 18, justifyContent: 'center'}}  onPress = {()=> {
                MainStore.chosenDay = 4
                this.takeEvents()
                }}>
                <Text style = {{fontSize: 24, fontWeight: '400', color: '#5572b5'}}>27</Text>
                <Text style = {{color:'#5572b5', fontSize: 12, fontWeight: '300', textAlign: 'center', marginTop: 6 }}>Cum</Text>
              </TouchableOpacity>
              <TouchableOpacity style = {{ marginLeft: 18, justifyContent: 'center'}}  onPress = {()=> {
                MainStore.chosenDay = 5
                this.takeEvents()}}>
                <Text style = {{fontSize: 24, fontWeight: '400', color: '#5572b5'}}>28</Text>
                <Text style = {{color:'#5572b5', fontSize: 12, fontWeight: '300', textAlign: 'center', marginTop: 6 }}>Cmts</Text>
              </TouchableOpacity>
              <TouchableOpacity style = {{ marginLeft: 18, justifyContent: 'center'}}  onPress = {()=> {
                MainStore.chosenDay = 6
                this.takeEvents()
              }}>
                <Text style = {{fontSize: 24, fontWeight: '400', color: '#5572b5'}}>29</Text>
                <Text style = {{color:'#5572b5', fontSize: 12, fontWeight: '300', textAlign: 'center', marginTop: 6 }}>Pzr</Text>
              </TouchableOpacity>

          </View>
          
          
          {EventList}

          <TouchableOpacity style = {styles.ideaContainer} onPress = {() => {this.props.navigation.navigate("NewEvent")}}>
              <Image style = {styles.idea} source = {require('./../images/plus_icon.png')} />
          </TouchableOpacity>
         
        </SafeAreaView>
      </>
    )
  }
}

const styles = StyleSheet.create({
  container : {
    height : screenHeight,
    width: screenWidth,
    // alignItems: 'center'
    backgroundColor: '#fff'
  },
  meduimContainer: {
    height: screenHeight*12/100,
    width: 90*screenWidth/100,
    // justifyContent: 'center',
    borderColor: '#9b9b9b', 
    borderWidth: 0.25,
    marginTop: 15,
    // paddingHorizontal: 15,
    marginLeft: '5%',
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  pp: {
    width : 72,
    height: 72,
    resizeMode: 'contain',
    marginLeft: 16,
    borderRadius: 500,
    backgroundColor: '#f1f1f1',
    marginLeft: 16
  },
  smallContainer: { 
    marginLeft: 16
  },
  subHeader : {
    color : '#5572b5',
    fontSize: 16,
    marginLeft: 17,
  },
  ideaContainer: {
    padding: 15,
    borderWidth: 1,
    borderRadius: 50,
    width: 63,
    height: 63,
    position: 'absolute',
    right: 15,
    top: 60*screenHeight/100,
    borderColor: '#81a0e7',
    backgroundColor: '#FF9357'
  }

});

export default Events;
