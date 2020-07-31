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


const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);


class OneriPage extends React.Component{
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
          <View style = {styles.secondContainer}>
            <Text style = {styles.subHeader}>Burada olmasını istediğin kategoriyi bizimle paylaşabilirsin.</Text>
            <TextInput style = {styles.input} placeholder = "Önerini yaz.."/>
            <TouchableOpacity style = {styles.button}>
              <Text style = {styles.buttonText}>Gönder</Text>
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
    backgroundColor: '#f6f6f8'
    // alignItems: 'center'
  },
  subHeader : {
    color : '#5572b5',
    marginTop: 15,
    fontSize: 16
  },
  input :{
    width: 75*screenWidth/100,
    height: 9*screenHeight/100,
    borderWidth: 1,
    borderColor: '#9b9b9b',
    borderRadius: 20,
    paddingHorizontal: 10,
    marginTop: 32
  },
  secondContainer: {
    top: 100,
    borderColor: '#9b9b9b', 
    borderWidth: 0.25,
    width: 95*screenWidth/100,
    left: 2.5*screenWidth/100,
    height: 282,
    borderRadius: 20,
    padding: 32,
    backgroundColor: '#fff',
    height: 37*screenHeight/100
  },
  button: {
    width: 75*screenWidth/100,
    height: 44,
    backgroundColor: '#FF9357',
    justifyContent: 'center',
    marginTop: 50,
    borderRadius: 15
  },
  buttonText: {
    color: 'white',
    textAlign : 'center',
    fontSize: 16,
    fontWeight: '600'
  }

});

export default OneriPage;
