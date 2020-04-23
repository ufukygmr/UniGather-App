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
// import testSvg from './src/images/unigatherLogo.svg';


const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);


class Messeages extends React.Component{
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
          <TouchableOpacity style = {styles.messeageContainer}>
              <Image  style = {styles.leftMC}/>
              <View style = {styles.middleMC}>
                <Text style = {styles.sender}>Mert Uzun</Text>
                <Text style = {styles.mContent}>Görüşürüz hocam</Text>
              </View>
              <View style = {styles.rightMC}>
                <Text style = {styles.mTime}>11.00</Text>
                <Text style = {styles.notificate}>1</Text>
              </View>
          </TouchableOpacity>
          <TouchableOpacity style = {styles.messeageContainer}>
              <Image  style = {styles.leftMC}/>
              <View style = {styles.middleMC}>
                <Text style = {styles.sender}>Mert Uzun</Text>
                <Text style = {styles.mContent}>Görüşürüz hocam</Text>
              </View>
              <View style = {styles.rightMC}>
                <Text style = {styles.mTime}>11.00</Text>
                <Text style = {styles.notificate}>1</Text>
              </View>
          </TouchableOpacity>
          <TouchableOpacity style = {styles.messeageContainer}>
              <Image  style = {styles.leftMC}/>
              <View style = {styles.middleMC}>
                <Text style = {styles.sender}>Mert Uzun</Text>
                <Text style = {styles.mContent}>Görüşürüz hocam</Text>
              </View>
              <View style = {styles.rightMC}>
                <Text style = {styles.mTime}>11.00</Text>
                <Text style = {styles.notificate}>1</Text>
              </View>
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
    backgroundColor: '#f6f6f8'
    // alignItems: 'center'
  },
  messeageContainer: {
    width : screenWidth* 80 /100,
    height: 11 * screenHeight / 100,
    flexDirection: 'row',
    borderWidth: 0.25,
    borderRadius: 16,
    // justifyContent: 'center',
    alignItems: 'center',
    left: 10*screenWidth/100,
    marginTop: 12
  },
  leftMC: { 
    width : 72,
    height: 72,
    resizeMode: 'contain',
    marginLeft: 16,
    borderRadius: 500,
    backgroundColor: '#f1f1f1'
  },
  middleMC : {
    marginLeft: 24,
  },
  sender: {
    color: '#2a3d70',
    fontWeight: "600",
    fontSize: 16
  },
  mContent: {
    marginTop: 10,
    color: '#2a3d70',
    fontSize : 14,
    fontWeight: "300"
  },
  rightMC: {
    width: 80
     
  },
  mTime : {
    textAlign: "right"
  },
  notificate: {
    color: '#fff',
    textAlign: 'center',
    marginTop: 5,
    backgroundColor: '#81a0e7',
    width: 21,
    height: 21,
    alignSelf: 'flex-end',
    fontSize: 14,
    borderRadius: 50, 
  }

});

export default Messeages;
