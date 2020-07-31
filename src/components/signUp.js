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

import MainStore from './store';

import firestore from '@react-native-firebase/firestore';
import CheckBox from '@react-native-community/checkbox';


const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);


class SignUp extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      email: "",
      password: "",
      name: ""
    }
  }

  addUser = () => {
    if(this.state.name == "" || this.state.email == "" || this.state.password == ""){
      Alert.alert("Lutfen Tum Alanlari Doldurunuz")
    }
    else {
      firestore().collection("Users")
      .add({
        name: this.state.name,
        email: this.state.email,
        password: this.state.password
      })
      .then((res) => {
        MainStore.user = {
          name: this.state.name,
          email: this.state.email,
          password: this.state.password
        }
        this.props.navigation.navigate("App")})
      .catch(err => Alert.alert("Bir hata olustu"))
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
            <TextInput  placeholder = 'Isim Soyisim' style = {styles.loginInputs} onChangeText= {(text) => this.setState({name : text})}/>
            <TextInput  placeholder = 'Bolum' style = {styles.loginInputs} />
            <TextInput  placeholder = 'Sinif' style = {styles.loginInputs} />
            <TextInput  placeholder = 'E-posta' style = {styles.loginInputs} onChangeText= {(text) => this.setState({email : text})}/>
            <TextInput  placeholder = 'Şifre' secureTextEntry = {true} style = {styles.loginInputs} onChangeText= {(text) => this.setState({password : text})}/>
            <TextInput  placeholder = 'Şifre Tekrar' secureTextEntry = {true} style = {styles.loginInputs} />
            <View style = {{flexDirection: 'row'}}>
             
              <CheckBox
                disabled={false}
                boxType = 'square'
                onAnimationType = 'one-stroke'
                size = {12}
                // onValueChange={(newValue) => setToggleCheckBox(newValue)}
                // value={}
                />
               <Text style = {{fontFamily: 'Quicksand', marginLeft: 20, marginTop: 8}}>KVKK sartlarini okudum kabul ediyorum</Text>
            </View>
            <View style = {{flexDirection: 'row', marginTop: 10}}>
             
              <CheckBox
                disabled={false}
                boxType = 'square'
                onAnimationType = 'one-stroke'
                size = {12}
                // value={}
                // onValueChange={(newValue) => setToggleCheckBox(newValue)}
              />
               <Text style = {{fontFamily: 'Quicksand', marginLeft: 20, marginTop: 8, fontSize: 12}}>Kullanici sozlesmesini okudum kabul ediyorum</Text>
            </View>
            <TouchableOpacity style = {styles.signButton} onPress = {() => {
               this.addUser()
               }}>
              <Text style = {styles.signText}>Kayit Ol</Text>
            </TouchableOpacity>
            <View style = {{flexDirection: 'row', left: '10%'}}>
              <Text style = {styles.footerText}>Hesabın var mi? </Text>
              <TouchableOpacity  onPress = {() => this.props.navigation.navigate("Giris")}>
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
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  logo : {
    width : 112,
    height: 80,
    top: 1*screenHeight/100,
    
  },
  header: {
    top: screenHeight*2/100,
    color : '#FF9357',
    fontSize: 23,
    fontWeight: '600',
    textAlign: 'center',
    fontFamily: 'Quicksand',
  },
  authButtons : {
    width: '75%',
    top: screenHeight*3/100,
  
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
    fontWeight: '400',
    fontFamily: 'Quicksand',
  },
  loginInputs :{ 
    borderWidth: 1,
    borderColor: '#D8D8D8',
    borderRadius: 16,
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontSize: 16,
    marginBottom: 15,
    fontFamily: 'Quicksand',
    // height: screenHeight*5/100
  },
  unuttum : {
    fontSize: 10,
    color: '#FF9357',
    textDecorationLine: "underline",
    textAlign: "right",
    fontFamily: 'Quicksand',
  },
  footerText: {
    color: '#FF9357',
    textAlign: 'center',
    fontFamily: 'Quicksand',
  },
  footerTextLast:{
    color: '#FF9357',
    fontFamily: 'Quicksand'
    
  }
});

export default SignUp;
