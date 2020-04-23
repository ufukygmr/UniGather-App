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


class SignUp extends React.Component{
  constructor(props){
    super(props)
    this.state = {

    }
  }


  render (){

    return (
      <>
        <StatusBar barStyle = "light-content"/>
        <SafeAreaView style = {styles.container}>
          <View>
            <Image source = {require("./../images/unigatherLogo.png")} style = {styles.logo}/>
            <Text style = {styles.header}>UniGather</Text>
          </View>
          <View style = {styles.authButtons}>
            <TextInput  placeholder = 'Isim Soyisim' style = {styles.loginInputs}/>
            <TextInput  placeholder = 'E-posta' style = {styles.loginInputs}/>
            <TextInput  placeholder = 'Şifre' secureTextEntry = {true} style = {styles.loginInputs}/>
            <TextInput  placeholder = 'Şifre Tekrar' secureTextEntry = {true} style = {styles.loginInputs}/>
            <TouchableOpacity style = {styles.signButton}>
              <Text style = {styles.signText}>Giris Yap</Text>
            </TouchableOpacity>
            <View style = {{flexDirection: 'row', marginTop: 60, left: '20%'}}>
              <Text style = {styles.footerText}>Hesabın var mi? </Text>
              <TouchableOpacity >
                <Text style = {styles.footerTextLast}>   Giris Yap</Text>
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
    alignItems: 'center'
  },
  logo : {
    width : 112,
    height: 80,
    top: 10*screenHeight/100,
    
  },
  header: {
    top: screenHeight*11/100,
    color : '#5572b5',
    fontSize: 23,
    fontWeight: '600',
    textAlign: 'center'
  },
  authButtons : {
    width: '75%',
    top: screenHeight*20/100,
  
  },
  signButton: {
    backgroundColor: '#5572b5',
    paddingVertical: 16,
    borderRadius: 16,
    marginBottom: 15,
    marginTop: 20
  },
  signText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '400'
  },
  loginInputs :{ 
    borderWidth: 1,
    borderColor: '#D8D8D8',
    borderRadius: 16,
    paddingHorizontal: 10,
    fontSize: 16,
    marginBottom: 15,
    height: screenHeight*5/100
  },
  unuttum : {
    fontSize: 10,
    color: '#5572b5',
    textDecorationLine: "underline",
    textAlign: "right"
  },
  footerText: {
    color: '#2a3d70',
    textAlign: 'center'
  },
  footerTextLast:{
    color: '#5572b5',
    
  }
});

export default SignUp;
