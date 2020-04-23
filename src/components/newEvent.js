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


import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Rating } from 'react-native-ratings';
// import testSvg from './../images/unigatherLogo.svg';


const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);


class NewEvent extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      isDatePickerVisible: false
    }
  }


  render (){

    return (
      <>
        <StatusBar barStyle = "light-content"/>
        <SafeAreaView style = {styles.container}>
          {/* <Text style = {styles.header}>Kategoriler</Text> */}
          <View style = {styles.secondContainer}>
            <View style = {styles.levelContainer}>
              <Text style = {styles.subHeader}>Seviyeni belirle</Text>
              <Rating
                type='star'
                ratingCount={5}
                imageSize={23}
                // showRating
                onFinishRating={this.ratingCompleted}
                style = {{alignSelf: 'flex-start', marginTop: 12}}
              />
            </View>
            <View style = {styles.middleContainer}>
              <View style = {{flexDirection: 'row', marginLeft: 12}}>
                <Image source = {require("./../images/time_icon.png")} />
                <Text style = {{fontSize: 16, marginLeft: 8, color : '#2a3d70', }}>24 Mart Sali</Text>
              </View>
              
              <View style ={{flexDirection: 'row', marginTop: 12,}}>
                <TouchableOpacity style = {styles.timeInput} onPress = {(event) => this.setState({isDatePickerVisible: true})}>
                  <Text style = {styles.timeIText}>13.00</Text>
                </TouchableOpacity>
                <Text style = {{color: '#2a3d70', fontSize: 16, justifyContent: 'center', alignSelf: 'center', marginHorizontal: 16}}>-</Text>
                <TouchableOpacity style = {styles.timeInput}>
                  <Text style = {styles.timeIText}>13.00</Text>
                </TouchableOpacity>
                <DateTimePickerModal
                  isVisible={this.state.isDatePickerVisible}
                  mode="time"
                  onConfirm={this.handleConfirm}
                  onCancel={this.hideDatePicker}
                />
                <DateTimePickerModal
                  isVisible={this.state.isDatePickerVisible}
                  mode="time"
                  onConfirm={this.handleConfirm}
                  onCancel={this.hideDatePicker}
                />

              </View>
              
            </View>
            
            <View style= {styles.bottomContainer} style = {{flexDirection: 'row',  marginLeft: 12}}>
              <Image source = {require("./../images/not_icon.png")} />
              <Text style = {{marginLeft: 5, fontSize: 16, color : '#2a3d70',}}> Not </Text>
            </View>
            <TextInput style = {styles.input} placeholder = "Eklemek istediklerin.."/>
            <TouchableOpacity style = {styles.button}>
              <Text style = {styles.buttonText}>Kaydet</Text>
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
    color : '#2a3d70',
    marginTop: 15,
    fontSize: 16,
    marginLeft: 5,
  },
  middleContainer: {
    marginVertical: 36
  },
  input :{
    width: 75*screenWidth/100,
    height: 9*screenHeight/100,
    borderWidth: 1,
    borderColor: '#9b9b9b',
    borderRadius: 20,
    paddingHorizontal: 10,
    marginTop: 10
  },
  secondContainer: {
    top: 150,
    borderColor: '#9b9b9b', 
    borderWidth: 0.25,
    width: 95*screenWidth/100,
    left: 2.5*screenWidth/100,
    height: 282,
    borderRadius: 20,
    padding: 32,
    backgroundColor: '#fff',
    height: 52*screenHeight/100
  },
  button: {
    width: 75*screenWidth/100,
    height: 44,
    backgroundColor: '#81a0e7',
    justifyContent: 'center',
    marginTop: 40,
    borderRadius: 15
  },
  buttonText: {
    color: 'white',
    textAlign : 'center',
    fontSize: 16,
    fontWeight: '600'
  },
  timeInput: {
    // width : '30%',
    borderWidth: 1,
    borderColor: '#2a3d70',
    paddingVertical: 11 ,
    paddingHorizontal: 51.5 ,
    borderRadius: 20,
    // marginLeft: 20
  },
  timeIText: {

  }

});

export default NewEvent;
