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

import { Rating, AirbnbRating } from 'react-native-ratings';


const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);


class Events extends React.Component{
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
          {/* <Text style = {styles.header}>Kategoriler</Text> */}
          <View style = {{flexDirection: 'row', marginTop: 30, marginLeft: screenWidth*6/100}}>
              <TouchableOpacity style = {{ marginLeft: 18, justifyContent: 'center'}}>
                <Text style = {{fontSize: 24, fontWeight: '400', color: '#2a3d70'}}>23</Text>
                <Text style = {{color:'#2a3d70', fontSize: 12, fontWeight: '300', textAlign: 'center', marginTop: 6 }}>Pzt</Text>
              </TouchableOpacity>
              <TouchableOpacity style = {{ marginLeft: 18, justifyContent: 'center'}}>
                <Text style = {{fontSize: 24, fontWeight: '400', color: '#2a3d70'}}>24</Text>
                <Text style = {{color:'#2a3d70', fontSize: 12, fontWeight: '300', textAlign: 'center', marginTop: 6 }}>Sal</Text>
              </TouchableOpacity>
              <TouchableOpacity style = {{ marginLeft: 18, justifyContent: 'center'}}>
                <Text style = {{fontSize: 24, fontWeight: '400', color: '#2a3d70'}}>25</Text>
                <Text style = {{color:'#2a3d70', fontSize: 12, fontWeight: '300', textAlign: 'center', marginTop: 6 }}>Car</Text>
              </TouchableOpacity>
              <TouchableOpacity style = {{ marginLeft: 18, justifyContent: 'center'}}>
                <Text style = {{fontSize: 24, fontWeight: '400', color: '#2a3d70'}}>26</Text>
                <Text style = {{color:'#2a3d70', fontSize: 12, fontWeight: '300', textAlign: 'center', marginTop: 6 }}>Per</Text>
              </TouchableOpacity>
              <TouchableOpacity style = {{ marginLeft: 18, justifyContent: 'center'}}>
                <Text style = {{fontSize: 24, fontWeight: '400', color: '#2a3d70'}}>27</Text>
                <Text style = {{color:'#2a3d70', fontSize: 12, fontWeight: '300', textAlign: 'center', marginTop: 6 }}>Cum</Text>
              </TouchableOpacity>
              <TouchableOpacity style = {{ marginLeft: 18, justifyContent: 'center'}}>
                <Text style = {{fontSize: 24, fontWeight: '400', color: '#2a3d70'}}>28</Text>
                <Text style = {{color:'#2a3d70', fontSize: 12, fontWeight: '300', textAlign: 'center', marginTop: 6 }}>Cmts</Text>
              </TouchableOpacity>
              <TouchableOpacity style = {{ marginLeft: 18, justifyContent: 'center'}}>
                <Text style = {{fontSize: 24, fontWeight: '400', color: '#2a3d70'}}>29</Text>
                <Text style = {{color:'#2a3d70', fontSize: 12, fontWeight: '300', textAlign: 'center', marginTop: 6 }}>Pzr</Text>
              </TouchableOpacity>

          </View>
          
          <View style = {styles.meduimContainer}>
            <Image style = {styles.pp} />
              <TouchableOpacity style = {styles.smallContainer}>
                <Text style = {styles.subHeader}>Arda Unal</Text>
                <Text style = {{marginLeft: 17, fontWeight: 'bold', color: '#2a3d70', marginTop: 5 }}>09.00-12.00</Text>
              </TouchableOpacity>
              <Rating
                type='star'
                ratingCount={5}
                imageSize={14}
                // showRating
                onFinishRating={this.ratingCompleted}
                style = {{marginLeft: 80}}
              />
          </View>
          <View style = {styles.meduimContainer}>
            <Image style = {styles.pp} />
              <TouchableOpacity style = {styles.smallContainer}>
                <Text style = {styles.subHeader}>Arda Unal</Text>
                <Text style = {{marginLeft: 17, fontWeight: 'bold', color: '#2a3d70', marginTop: 5 }}>09.00-12.00</Text>
              </TouchableOpacity>
              <Rating
                type='star'
                ratingCount={5}
                imageSize={14}
                // showRating
                onFinishRating={this.ratingCompleted}
                style = {{marginLeft: 80}}
              />
          </View>
          <View style = {styles.meduimContainer}>
            <Image style = {styles.pp} />
              <TouchableOpacity style = {styles.smallContainer}>
                <Text style = {styles.subHeader}>Arda Unal</Text>
                <Text style = {{marginLeft: 17, fontWeight: 'bold', color: '#2a3d70', marginTop: 5 }}>09.00-12.00</Text>
              </TouchableOpacity>
              <Rating
                type='star'
                ratingCount={5}
                imageSize={14}
                // showRating
                onFinishRating={this.ratingCompleted}
                style = {{marginLeft: 80}}
              />
          </View>


          <TouchableOpacity style = {styles.ideaContainer}>
              <Image style = {styles.idea} source = {require('./../images/plus_icon.png')} />
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
    // alignItems: 'center'
  },
  meduimContainer: {
    height: screenHeight*12/100,
    width: 90*screenWidth/100,
    // justifyContent: 'center',
    borderColor: '#9b9b9b', 
    borderWidth: 0.25,
    marginTop: 15,
    // paddingHorizontal: 15,
    marginLeft: '5%',
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  pp: {
    width : 72,
    height: 72,
    resizeMode: 'contain',
    marginLeft: 16,
    borderRadius: 500,
    backgroundColor: '#f1f1f1',
    marginLeft: 16
  },
  smallContainer: { 
    marginLeft: 16
  },
  subHeader : {
    color : '#2a3d70',
    fontSize: 16,
    marginLeft: 17,
  },
  ideaContainer: {
    padding: 15,
    borderWidth: 1,
    borderRadius: 50,
    width: 63,
    height: 63,
    position: 'absolute',
    right: 15,
    top: 60*screenHeight/100,
    borderColor: '#81a0e7',
    backgroundColor: '#81a0e7'
  }

});

export default Events;
