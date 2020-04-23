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
  TouchableOpacity
} from 'react-native';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);


class Opennning extends React.Component{
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
            <TouchableOpacity style = {styles.signButton}>
              <Text style = {styles.signText}>Kayit Ol</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.loginButton}>
              <Text style = {styles.loginText}>Giris Yap</Text>
            </TouchableOpacity>
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
    top: 29*screenHeight/100,
    
  },
  header: {
    top: screenHeight*30/100,
    color : '#5572b5',
    fontSize: 23,
    fontWeight: '600',
    textAlign: 'center'
  },
  authButtons : {
    width: '75%',
    top: screenHeight*40/100,
  
  },
  signButton: {
    backgroundColor: '#5572b5',
    paddingVertical: 16,
    borderRadius: 16,
    marginBottom: 15
  },
  signText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '500'
  },
  loginButton: {
    borderColor: '#5572b5',
    paddingVertical: 14,
    borderRadius: 20,
    borderWidth: 1.5
  },
  loginText: {
    color: '#5572b5',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '500'
  }
});

export default Opennning;
