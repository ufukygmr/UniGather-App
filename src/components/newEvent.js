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
} from 'react-native';

import firestore from '@react-native-firebase/firestore';
import MainStore from './store';

import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Rating } from 'react-native-ratings';
// import testSvg from './../images/unigatherLogo.svg';


const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);


class NewEvent extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      isDatePickerVisible: false,
      isDatePickerVisible1: false,
      start: "",
      end : "",
      note: "",
      level: 0
    }
  }

  handleConfirm = (data) => {
    this.setState({start : data.getHours() + "." + data.getMinutes()})
    this.setState({isDatePickerVisible: false})
  }
  handleConfirm1 = (data) => {
    this.setState({end : data.getHours() + "." + data.getMinutes()})
    this.setState({isDatePickerVisible1: false})
  }

  handleAdd = () => {
    if(this.state.level === 0){
      alert("Lutfen Level Belirleyiniz")
    }
    else{
      firestore().collection("Spor/days/" + MainStore.chosenDay)
      .add({
        name: MainStore.user.name,
        time: this.state.start + " - " + this.state.end,
        note: this.state.note,
        level: this.state.level
      })
      .then(() => {
        this.props.navigation.navigate("Events")
      })
    }
  }

  render (){
    return (
      <>
        <StatusBar barStyle = "dark-content"/>
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
                onFinishRating={(data) => {this.setState({level : data})}}
                style = {{alignSelf: 'flex-start', marginTop: 12}}
              />
            </View>
            <View style = {styles.middleContainer}>
              <View style = {{flexDirection: 'row', marginLeft: 12}}>
                <Image source = {require("./../images/time_icon.png")} />
                <Text style = {{fontFamily: 'Quicksand',fontSize: 16, marginLeft: 8, color : '#2a3d70', }}>{MainStore.chosenDay} Mart</Text>
              </View>
              
              <View style ={{flexDirection: 'row', marginTop: 12,}}>
                <TouchableOpacity style = {styles.timeInput} onPress = {() => this.setState({isDatePickerVisible: true})}>
                  <Text style = {styles.timeIText}>{this.state.start}</Text>
                </TouchableOpacity>
                <Text style = {{fontFamily: 'Quicksand',color: '#2a3d70', fontSize: 16, justifyContent: 'center', alignSelf: 'center', marginHorizontal: 16}}>-</Text>
                <TouchableOpacity style = {styles.timeInput} onPress = {() => this.setState({isDatePickerVisible1: true})}>
                  <Text style = {styles.timeIText}>{this.state.end}</Text>
                </TouchableOpacity>
                <DateTimePickerModal
                  isVisible={this.state.isDatePickerVisible}
                  mode="time"
                  onConfirm={data => this.handleConfirm(data)}
                  onCancel={() => this.setState({isDatePickerVisible : false})}
          
                />
                <DateTimePickerModal
                  isVisible={this.state.isDatePickerVisible1}
                  mode="time"
                  onConfirm={data => this.handleConfirm1(data)}
                  onCancel={() => this.setState({isDatePickerVisible1: false})}
                />
              </View>
            </View>
            
            <View style= {styles.bottomContainer} style = {{flexDirection: 'row',  marginLeft: 12}}>
              <Image source = {require("./../images/not_icon.png")} />
              <Text style = {{fontFamily: 'Quicksand',marginLeft: 5, fontSize: 16, color : '#2a3d70',}}> Not </Text>
            </View>
            <TextInput style = {styles.input} placeholder = "Eklemek istediklerin.." onChangeText = {(text) => this.setState({note : text})}/>
            <TouchableOpacity style = {styles.button} onPress = {() => this.handleAdd()}>
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
    fontFamily: 'Quicksand',
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
    marginTop: 10,
    fontFamily: 'Quicksand',
  },
  secondContainer: {
    top: screenHeight*3/100,
    borderColor: '#9b9b9b', 
    borderWidth: 0.25,
    width: 95*screenWidth/100,
    left: 2.5*screenWidth/100,
    height: 282,
    borderRadius: 20,
    padding: 32,
    backgroundColor: '#fff',
    height: 60*screenHeight/100
  },
  button: {
    width: 75*screenWidth/100,
    height: 44,
    backgroundColor: '#FF9357',
    justifyContent: 'center',
    marginTop: 40,
    borderRadius: 15,
  },
  buttonText: {
    color: 'white',
    textAlign : 'center',
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'Quicksand',
  },
  timeInput: {
    // width : '30%',
    borderWidth: 1,
    borderColor: '#2a3d70',
    paddingVertical: 11 ,
    paddingHorizontal: 51.5 ,
    borderRadius: 20,
    // marginLeft: 20,
    fontFamily: 'Quicksand',
  },
  timeIText: {

  }

});

export default NewEvent;
