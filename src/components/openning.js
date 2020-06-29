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
import SignUp from './signUp';

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
        <StatusBar barStyle = "dark-content"/>
        <SafeAreaView style = {styles.container}>
          <View>
            <Image source = {require("./../images/unigatherLogo.png")} style = {styles.logo}/>
            <Text style = {styles.header}>UniGather</Text>
          </View>
          <View style = {styles.authButtons}>
            <TouchableOpacity style = {styles.signButton} onPress = {()=> this.props.navigation.navigate("Kayit")}>
              <Text style = {styles.signText}>Kayit Ol</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.loginButton} onPress = {() => this.props.navigation.navigate("Giris")}>
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
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  logo : {
    width : 112,
    height: 80,
    top: 29*screenHeight/100,
    
  },
  header: {
    top: screenHeight*30/100,
    color : '#FF9357',
    fontSize: 23,
    fontWeight: '600',
    textAlign: 'center'
  },
  authButtons : {
    width: '75%',
    top: screenHeight*40/100,
  
  },
  signButton: {
    backgroundColor: '#FF9357',
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
    borderColor: '#FF9357',
    paddingVertical: 14,
    borderRadius: 20,
    borderWidth: 1.5
  },
  loginText: {
    color: '#FF9357',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '500'
  }
});

export default Opennning;
