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

import firestore from '@react-native-firebase/firestore';
import MainStore from './store';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);


class Login extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      email : "",
      password: ""
    }
  }

  checkUser = () => {
    firestore().collection("Users")
      // .doc("ad")
      .where("password", "==", this.state.password)
      .where("email", "==", this.state.email)
      .get()
      .then( querySnapshot => {
        if(querySnapshot.size == 1){
          querySnapshot.forEach(documentSnapshot => {
            MainStore.user = documentSnapshot.data()
            Alert.alert("Giris Basarili")
            this.props.navigation.navigate("App")
        })}
        else{
          Alert.alert("Giris Basarisiz")
        }
        
      })
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
            <TextInput  placeholder = 'E-posta' style = {styles.loginInputs} onChangeText = {text => this.setState({email: text})}/>
            <TextInput  placeholder = 'Şifre' secureTextEntry = {true} style = {styles.loginInputs} onChangeText = {text => this.setState({password: text})}/>
            <TouchableOpacity>
              <Text style = {styles.unuttum}>Şifreni mi unuttun?</Text>
            </TouchableOpacity>
           
            <TouchableOpacity style = {styles.signButton} onPress = {() => {this.checkUser()}}>
              <Text style = {styles.signText}>Giris Yap</Text>
            </TouchableOpacity>
            <View style = {{flexDirection: 'row', marginTop: 60, left: '20%'}}>
              <Text style = {styles.footerText}>Hesabın yok mu? </Text>
              <TouchableOpacity onPress = {() => {this.props.navigation.navigate("Kayit")}}>
                <Text style = {styles.footerTextLast}>    Kayit Ol</Text>
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
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  logo : {
    width : 112,
    height: 80,
    top: 15*screenHeight/100,
    
  },
  header: {
    top: screenHeight*17/100,
    color : '#FF9357',
    fontSize: 23,
    fontWeight: '600',
    textAlign: 'center'
  },
  authButtons : {
    width: '75%',
    top: screenHeight*25/100,
  
  },
  signButton: {
    backgroundColor: '#FF9357',
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
    color: '#FF9357',
    textDecorationLine: "underline",
    textAlign: "right"
  },
  footerText: {
    color: '#FF9357',
    textAlign: 'center'
  },
  footerTextLast:{
    color: '#FF9357',
    
  }
});

export default Login;
