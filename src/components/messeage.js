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
  Keyboard, 
} from 'react-native';

import firestore from '@react-native-firebase/firestore';
import { Rating, AirbnbRating } from 'react-native-ratings';
import MainStore from './store';
import {observer} from 'mobx-react'

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

@observer
class Message extends React.Component{
  constructor(props){
    super(props)
    this.state = {
        messages : [],
        newText: "",
        keyboardOffset: screenHeight *20/100,
        headerName: ""
    }
  }
    

    // findChat = (name) => {
    //     firestore().collection("Messages")
    //     // .doc("ad")
    //     .get()
    //     .then( querySnapshot => {
    //         querySnapshot.forEach(documentSnapshot => {
    //             //   alert(documentSnapshot.data().name2 + " " + documentSnapshot.data().name1)
    //             if(documentSnapshot.data().name2 === name && documentSnapshot.data().name1 === MainStore.user.name){
    //                 // alert(documentSnapshot.id)
    //                 this.takeChat(documentSnapshot.id)
    //             }
    //             else{
    //                 alert(JSON.stringify(documentSnapshot.data()))
    //             }
                
    //         })

    //         })
    //         .catch(err => {alert(JSON.stringify(err))})     
    // }

    updateLast = (text) => {
        // alert("girdi")
        firestore().collection("Messages").doc("ZKLwji8WguUOS4H93hIQ")
        .update({
            "last": MainStore.user.name,
            "lastMessage": text
        })
        .get()
    }

    sendMessage = () => {
        if(this.state.newText !== ""){
          let date = new Date()
          firestore().collection("Messages/"+MainStore.chatId+"chat")
          .add({
              sender: MainStore.user.name,
              content: this.state.newText,
              time : date
          })
          .then(() => {     
              this.updateLast(this.state.newText)  
              // Keyboard.dismiss
              this.setState({newText: ""})
          })
        }
    }
    
    takeChat = () => {
        // alert("Messages/"+MainStore.chatId+"chat")
        // ]
        firestore().collection("Messages/"+MainStore.chatId+"chat").orderBy("time")
        .get()
        .then(querySnapshot => {
            // alert(querySnapshot.size)
            if(querySnapshot.size === MainStore.chat.length) {
                return
            }
            else{
                MainStore.chat = []
                querySnapshot.forEach(documentSnapshot => {
                    // alert(JSON.stringify(documentSnapshot.data()))
                    if(documentSnapshot.id !== "empty"){
                        MainStore.chat = [
                            ...MainStore.chat,
                            documentSnapshot.data()
                        ]
                    }
                    
                })
            }
        })
        // .catch(err => alert(JSON.stringify(err)))
    }

    componentDidMount(){
        // alert(JSON.stringify(MainStore.user))
    //    MainStore.chat = []
        this.takeChat()
        this.keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            this._keyboardDidShow,
        );
        this.keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            this._keyboardDidHide,
        );
        setInterval(() => this.takeChat(MainStore.chatId), 1500)
    }

    _keyboardDidShow = (event) => {
        this.setState({keyboardOffset:event.endCoordinates.height+100})
    }

    _keyboardDidHide = () =>  {
        this.setState({
            keyboardOffset: screenHeight *20/100,
        })
    }
  

  render (){

    renderChat = MainStore.chat.map(item => {
        // let width2 = item.content.length*9
        // if(width2> screenWidth * 90/100){
        //     width2 = screenWidth *90/100
        // }
        if(item.sender === MainStore.user.name){
            
            
            return ((
                <View style = {{alignSelf: "flex-end", borderRadius: 20, backgroundColor : "#ff9357", padding: 10, right: 10,marginTop: 20}}>
                    <Text style = {{fontFamily: 'Quicksand',textAlign: 'right', color: 'white', fontSize: 16}}>{item.content}</Text>
                    
                </View>
            ))
        }

        return ((
            
            <View style = {{alignSelf: "flex-start", borderRadius: 20, backgroundColor : "#f6f6f8", padding: 10, left: 10,marginTop: 20}}>
                <Text style = {{fontFamily: 'Quicksand',textAlign: 'left', color: '#2a3d70', fontSize: 16}}>     {item.content}   </Text>
            </View>
            
        ))
        
    })
    return (
      <>
        <StatusBar barStyle = "dark-content"/>
        <SafeAreaView style = {styles.container}>
          {/* <Text style = {styles.header}>Kategoriler</Text> */}
          <View style = {{backgroundColor: '#fff', height: screenHeight, borderRadius: 50}}>
            <Rating
                type='star'
                ratingCount={5}
                startingValue={MainStore.chatLevel}
                readonly = {true}
                imageSize={14}
                // showRating
                isDisabled = {true}
                style = {{marginTop: 30}}
              />
              <View style = {{flexDirection: "row", justifyContent: "center", marginTop: 10}}>
                <Text style = {{fontFamily: 'Quicksand',color: '#2a3d70', fontWeight: '500'}}>Notu: </Text>
                <Text style = {{fontFamily: 'Quicksand',}}> {MainStore.chatNote}</Text>
              </View>
            {/* <View> */}
                <ScrollView style = {{bottom: 23*screenHeight/100, height:10*screenHeight/100, top : 1*screenHeight/100}}>
                    {renderChat}
                    <View style = {{height: 27*screenHeight/100}}></View>
                </ScrollView>
            {/* </View> */}
           

            <View style ={{backgroundColor: 'white',borderWidth: 1, borderColor: "#d8d8d8", width: 80*screenWidth/100, left: 10*screenWidth/100 , flexDirection: 'row', padding : 10, borderRadius: 20, position: 'absolute',  bottom:   this.state.keyboardOffset,}}>
                <TextInput style = {{fontFamily: 'Quicksand',width: '90%'}} placeholder = "Mesaj Yaz" value = {this.state.newMesaj} onChangeText = {(text) => this.setState({newText : text})}/>
                <TouchableOpacity onPress = {() => this.sendMessage()}>
                    <Image source = {require('./../images/sender.png')} style = {{width: 20, height: 20, alignSelf: 'flex-end', right: 0}} />
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
    // alignItems: 'center',
    backgroundColor: '#FF9357'
  },
  header: {
    color: "#5572b5",
    fontSize: 24, 
    top: 6*screenHeight/100,
    textAlign: 'center'
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
    height: 64,
    width: 90*screenWidth/100,
    borderRadius: 10,
    marginLeft: '5%',
    flexDirection: 'row',
    alignItems:  'center',
    borderColor: '#9b9b9b', 
    borderWidth: 0.25,
    marginTop: 15,
    paddingHorizontal: 15,

    shadowColor: '#9b9b9b',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity:  0.4,
    shadowRadius: 3,
    elevation: 5,
    // overflow: 'hidden'
    
  },
  subHeader : {
    color : '#5572b5',
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
    borderColor: '#81a0e7'
  }

});

export default Message;
