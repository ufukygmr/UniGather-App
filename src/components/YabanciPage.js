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

import SvgUri from 'react-native-svg-uri';
// import testSvg from './../images/unigatherLogo.svg';


const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);


class YabanciPage extends React.Component{
  constructor(props){
    super(props)
    this.state = {

    }
  }
  render (){
    return (
      <>
        <StatusBar barStyle = "dark-content"/>
        <SafeAreaView style = {styles.container}>
          {/* <Text style = {styles.header}>Kategoriler</Text> */}
          <View style = {{backgroundColor: '#fff', borderRadius: 50,height: screenHeight}}>
            <View style = {styles.meduimContainer}>
                <TouchableOpacity style = {styles.smallContainer} onPress = {() => {this.props.navigation.navigate("Events")}}>
                  <Image source = {require('./../images/ingilizce_icon.png')} />
                  <Text style = {styles.subHeader}>İngilizce</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.smallContainer} onPress = {() => {this.props.navigation.navigate("Events")}}>
                  <Image source = {require('./../images/fransizca_icon.png')} />
                  <Text style = {styles.subHeader}>Fransızca</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.smallContainer} onPress = {() => {this.props.navigation.navigate("Events")}}>
                  <Image source = {require('./../images/ispanyolca_icon.png')} />
                  <Text style = {styles.subHeader}>İspanyolca</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.smallContainer} onPress = {() => {this.props.navigation.navigate("Events")}}>
                  <Image source = {require('./../images/italyanca_icon.png')} />
                  <Text style = {styles.subHeader}>İtalyanca</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.smallContainer} onPress = {() => {this.props.navigation.navigate("Events")}}>
                  <Image source = {require('./../images/almanca_icon.png')} />
                  <Text style = {styles.subHeader}>Almanca</Text>
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
    backgroundColor: '#cae7fd',
  },
  header: {
    color: "#5572b5",
    fontSize: 24, 
    top: 6*screenHeight/100,
    textAlign: 'center'
  },
  meduimContainer: {
    top: 3*screenHeight/100
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

export default YabanciPage;
