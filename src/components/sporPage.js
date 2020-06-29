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
  TextInput
} from 'react-native';

import firestore from '@react-native-firebase/firestore';
import MainStore from './store';


const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);


class SporPage extends React.Component{
  constructor(props){
    super(props)
    this.state = {

    }
  }

  takeEvents = () => {
    firestore().collection("Spor/days/0")
      // .doc("ad")
      .get()
      .then( querySnapshot => {
          querySnapshot.forEach(documentSnapshot => {
            MainStore.events = [
              ...MainStore.events, 
              [documentSnapshot.data()]
            ]
        })
        
      })
  }


  render (){

    return (
      <>
        <StatusBar barStyle = "dark-content"/>
        <SafeAreaView style = {styles.container}>
          {/* <Text style = {styles.header}>Kategoriler</Text> */}
          <View style = {{backgroundColor: '#fff', height: screenHeight, borderRadius: 50}}>
            <View style = {styles.meduimContainer}>
                <TouchableOpacity style = {styles.smallContainer} onPress = {() => {this.props.navigation.navigate("Events")}}>
                  <Image source = {require('./../images/yuruyus_icon.png')} />
                  <Text style = {styles.subHeader}>Yürüyüş - Koşu</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.smallContainer} onPress = {() => {this.props.navigation.navigate("Events")}}>
                  <Image source = {require('./../images/fitness_icon.png')} />
                  <Text style = {styles.subHeader}>Fitness</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.smallContainer} onPress = {() => {this.props.navigation.navigate("Events")}}>
                  <Image source = {require('./../images/basketbol_icon.png')} />
                  <Text style = {styles.subHeader}>Basketbol</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.smallContainer} onPress = {() => {this.props.navigation.navigate("Events")}}>
                  <Image source = {require('./../images/voleybol_icon.png')} />
                  <Text style = {styles.subHeader}>Voleybol</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.smallContainer} onPress = {() => {this.props.navigation.navigate("Events")}}>
                  <Image source = {require('./../images/tenis_icon.png')} />
                  <Text style = {styles.subHeader}>Tenis</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.ideaContainer} onPress = {() => {this.props.navigation.navigate("Öneri")}}>
                  <Image style = {styles.idea} source = {require('./../images/idea.png')} />
                </TouchableOpacity>
            </View>

          </View>
          
        </SafeAreaView>
      </>
    )
  }
}

const styles = StyleSheet.create({
  container : {
    height : screenHeight,
    width: screenWidth,
    // alignItems: 'center',
    backgroundColor: '#fff9cd'
  },
  header: {
    color: "#5572b5",
    fontSize: 24, 
    top: 6*screenHeight/100,
    textAlign: 'center'
  },
  meduimContainer: {
    top: 13*screenHeight/100
  },
  rows :{
    flexDirection: 'row',
    width : 80*screenWidth/100,
    marginLeft: 6*screenWidth/100,
    marginTop: 10

  },
  smallContainer: { 
    height: 64,
    width: 90*screenWidth/100,
    borderRadius: 10,
    marginLeft: '5%',
    flexDirection: 'row',
    alignItems:  'center',
    borderColor: '#9b9b9b', 
    borderWidth: 0.25,
    marginTop: 15,
    paddingHorizontal: 15,

    shadowColor: '#9b9b9b',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity:  0.4,
    shadowRadius: 3,
    elevation: 5,
    // overflow: 'hidden'
    
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
    borderColor: '#81a0e7'
  }

});

export default SporPage;
