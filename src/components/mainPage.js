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


class MainPage extends React.Component{
  constructor(props){
    super(props)
    this.state = {

    }
  }

  static navigationOptions = {
    headerMode: 'none'
  }


  render (){

    return (
      <>
        <StatusBar barStyle = "dark-content"/>
        <SafeAreaView style = {styles.container}>
          <Text style = {styles.header}>Kategoriler</Text>
          <View style = {styles.meduimContainer}>
            <View style = {styles.rows}>
                <TouchableOpacity style = {styles.smallContainer} onPress = {()=> {this.props.navigation.navigate("Spor")}}>
                  <Image source = {require('./../images/spor_icon.png')} />
                  <Text style = {styles.subHeader}>Spor</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.smallContainer1} onPress = {()=> {this.props.navigation.navigate("Yabancı Dil")}}>
                  <Image source = {require('./../images/yabancidil_icon.png')} />
                  <Text style = {styles.subHeader}>Yabancı Dil</Text>
                </TouchableOpacity>
              </View>
              <View style = {styles.rows}>
                <TouchableOpacity style = {styles.smallContainer2}>
                  <Image source = {require('./../images/muzik_icon.png')} />
                  <Text style = {styles.subHeader}>Müzik</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.smallContainer3}>
                  <Image source = {require('./../images/bilgisayar_icon.png')} />
                  <Text style = {styles.subHeader}>Bilgisayar Oyunu </Text>
                </TouchableOpacity>
              </View>
              <View style = {styles.rows}>
                <TouchableOpacity style = {styles.smallContainer4}>
                  <Image source = {require('./../images/ders_icon.png')} />
                  <Text style = {styles.subHeader}>Ders</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.smallContainer5}>
                  <Image source = {require('./../images/interaktif_icon.png')} />
                  <Text style = {styles.subHeader}>İnteraktif</Text>
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
    backgroundColor: '#fff'
    // alignItems: 'center'
  },
  header: {
    color: "#5572b5",
    fontSize: 24, 
    top: 6*screenHeight/100,
    textAlign: 'center',
    fontFamily: 'Quicksand',
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
    height: screenHeight*20/100,
    width:  screenWidth*40/100,
    borderRadius: 10,
    backgroundColor: '#fdef8f',
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  smallContainer1 : { 
    height: screenHeight*20/100,
    width:  screenWidth*40/100,
    borderRadius: 10,
    backgroundColor: '#9ed3fb',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8*screenWidth/100

  },
  smallContainer2: { 
    height: screenHeight*20/100,
    width:  screenWidth*40/100,
    borderRadius: 10,
    backgroundColor: '#f7b0a8',
    justifyContent: 'center',
    alignItems: 'center'
  },
  smallContainer3 : { 
    height: screenHeight*20/100,
    width:  screenWidth*40/100,
    borderRadius: 10,
    backgroundColor: '#c8a3fd',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8*screenWidth/100
  },
  smallContainer4 : { 
    height: screenHeight*20/100,
    width:  screenWidth*40/100,
    borderRadius: 10,
    backgroundColor: '#fdef8f',
    justifyContent: 'center',
    alignItems: 'center'
  },
  smallContainer5 : { 
    height: screenHeight*20/100,
    width:  screenWidth*40/100,
    borderRadius: 10,
    backgroundColor: '#5df1c5',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8*screenWidth/100,
  },
  subHeader : {
    color : '#5572b5',
    marginTop: 15,
    fontSize: 16,
    fontFamily: 'Quicksand',
  }

});

export default MainPage;
