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

import { Rating, AirbnbRating } from 'react-native-ratings';
import {observer} from 'mobx-react';
import firestore from '@react-native-firebase/firestore';
import MainStore from './store';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

@observer
class Events extends React.Component{
  constructor(props){
    super(props)
    this.state = {
    }
  }

  takeEvents = (string ) => {
    MainStore.events = []

    firestore().collection("Spor/days/"+string)
      // .doc("ad")
      .get()
      .then( querySnapshot => {
      
          querySnapshot.forEach(documentSnapshot => {
            MainStore.events = [
              ...MainStore.events, 
              {
                id : documentSnapshot.id,
                ...documentSnapshot.data()
              }
              
            ]
        })
        
      })
  }

  addChat = (id) => {
    firestore().collection("Messages/"+id+"/chat")
    .doc("empty")
    .set({})
    .then(function () {
        alert("Chat is opened in Messeages")
    })
    .catch(err =>{
      // alert(JSON.stringify(err))
      alert("Bir Hata Meydana Geldi")
    })

  }

  addMessage = (event) => {
    firestore().collection("Messages")
    .add({
      name1 : MainStore.user.name,
      name2: event.name,
      level: event.level,
      time : event.time,
      note: event.note,
      eventId : event.id+MainStore.user.name+event.name,
      last: MainStore.user.name,
      lastMessage: ""
    })
    .then(res => {
      // alert("devammm")
      MainStore.chatId = res.id
      this.addChat(res.id)
      
    })
    .catch(err => {
      alert("olmadi")
    })
  }

  addNewMessage = (event) => {
    let isok = 1;
    MainStore.chatLevel= event.level,
    MainStore.chatNote = event.note,
    MainStore.sender = event.name,
    firestore().collection("Messages")
    .get() 
    .then( async querySnapshot => {
      await querySnapshot.forEach(documentSnapshot => {
        // alert(documentSnapshot.data().eventId + "  " + (event.id+MainStore.user.name+event.name))
        if(documentSnapshot.data().eventId === event.id+MainStore.user.name+event.name || documentSnapshot.data().eventId === event.id+event.name+MainStore.user.name){
          // alert("DEvam etmeeee")
          MainStore.chatId = documentSnapshot.id
          isok = 0;
          alert("Bu Etkinlik Konusmasi Mesajlarinizda Mevcut Bulunmaktadir")
          // return
        }
      })
      if(isok){
        // alert(isok)
        this.addMessage(event)
      }
        
    })
    .catch(err => {
      alert(err)
    })

   
  }

  componentDidMount() {
    this.takeEvents('23')
  }



  render (){
    const EventList = MainStore.events.map(event => {
        if (event.name === 'erce'){
          return ((
            <TouchableOpacity style = {styles.meduimContainer} onPress = {() => this.addNewMessage(event)}>
              <Image style = {styles.pp} source = {require('./../images/erce.jpeg')} />
                <View style = {styles.smallContainer}>
                  <Text style = {styles.subHeader}>{event.name}</Text>
                  <Text style = {{fontFamily: 'Quicksand',marginLeft: 17, fontWeight: 'bold', color: '#5572b5', marginTop: 5 }}>{event.time}</Text>
                </View>
                <Rating
                  type='star'
                  ratingCount={5}
                  startingValue={event.level}
                  readonly = {true}
                  imageSize={14}
                  // showRating
                  isDisabled = {true}
                  style = {{marginLeft: 10}}
                />
            </TouchableOpacity>
          ))
        }
        else if (event.name === 'emre'){
          return ((
            <TouchableOpacity style = {styles.meduimContainer} onPress = {() => this.addNewMessage(event)}>
              <Image style = {styles.pp} source = {require('./../images/emre.jpeg')} />
                <View style = {styles.smallContainer}>
                  <Text style = {styles.subHeader}>{event.name}</Text>
                  <Text style = {{fontFamily: 'Quicksand',marginLeft: 17, fontWeight: 'bold', color: '#5572b5', marginTop: 5 }}>{event.time}</Text>
                </View>
                <Rating
                  type='star'
                  ratingCount={5}
                  startingValue={event.level}
                  readonly = {true}
                  imageSize={14}
                  // showRating
                  isDisabled = {true}
                  style = {{marginLeft: 30}}
                />
            </TouchableOpacity>
          ))
        }
        else if (event.name === 'mehmet'){
          return ((
            <TouchableOpacity style = {styles.meduimContainer} onPress = {() => this.addNewMessage(event)}>
              <Image style = {styles.pp} source = {require('./../images/mehmet.jpeg')} />
                <View style = {styles.smallContainer}>
                  <Text style = {styles.subHeader}>{event.name}</Text>
                  <Text style = {{fontFamily: 'Quicksand',marginLeft: 17, fontWeight: 'bold', color: '#5572b5', marginTop: 5 }}>{event.time}</Text>
                </View>
                <Rating
                  type='star'
                  ratingCount={5}
                  startingValue={event.level}
                  readonly = {true}
                  imageSize={14}
                  // showRating
                  isDisabled = {true}
                  style = {{marginLeft: 15}}
                />
            </TouchableOpacity>
          ))
        }
      })
    return (
      <>
        <StatusBar barStyle = "light-content"/>
        <SafeAreaView style = {styles.container}>
          {/* <Text style = {styles.header}>Kategoriler</Text> */}
          <View style = {{flexDirection: 'row', marginTop: 30, marginLeft: screenWidth*6/100}}>
              <TouchableOpacity style = {{ justifyContent: 'center'}} onPress = {()=> {
                MainStore.chosenDay= 23
                this.takeEvents('23')
              }}>
                <Text style = {{fontFamily: 'Quicksand',fontSize: 24, fontWeight: '400', color: '#5572b5'}}>23</Text>
                <Text style = {{fontFamily: 'Quicksand',color:'#5572b5', fontSize: 12, fontWeight: '300', textAlign: 'center', marginTop: 6 }}>Pzt</Text>
              </TouchableOpacity>
              <TouchableOpacity style = {{ marginLeft: 18, justifyContent: 'center'}} onPress = {()=> {
                MainStore.chosenDay= 24
                this.takeEvents('24')
                }}>
                <Text style = {{fontFamily: 'Quicksand',fontSize: 24, fontWeight: '400', color: '#5572b5'}}>24</Text>
                <Text style = {{fontFamily: 'Quicksand',color:'#5572b5', fontSize: 12, fontWeight: '300', textAlign: 'center', marginTop: 6 }}>Sal</Text>
              </TouchableOpacity>
              <TouchableOpacity style = {{ marginLeft: 18, justifyContent: 'center'}}  onPress = {()=> {
                MainStore.chosenDay=  25
                this.takeEvents('25')
              }}>
                <Text style = {{fontFamily: 'Quicksand',fontSize: 24, fontWeight: '400', color: '#5572b5'}}>25</Text>
                <Text style = {{fontFamily: 'Quicksand',olor:'#5572b5', fontSize: 12, fontWeight: '300', textAlign: 'center', marginTop: 6 }}>Car</Text>
              </TouchableOpacity>
              <TouchableOpacity style = {{ marginLeft: 18, justifyContent: 'center'}}  onPress = {()=> {
                MainStore.chosenDay = 26
                this.takeEvents('26')
                }}>
                <Text style = {{fontFamily: 'Quicksand',fontSize: 24, fontWeight: '400', color: '#5572b5'}}>26</Text>
                <Text style = {{fontFamily: 'Quicksand',color:'#5572b5', fontSize: 12, fontWeight: '300', textAlign: 'center', marginTop: 6 }}>Per</Text>
              </TouchableOpacity>
              <TouchableOpacity style = {{ marginLeft: 10, justifyContent: 'center'}}  onPress = {()=> {
                MainStore.chosenDay = 27
                this.takeEvents('27')
                }}>
                <Text style = {{fontFamily: 'Quicksand',fontSize: 24, fontWeight: '400', color: '#5572b5'}}>27</Text>
                <Text style = {{fontFamily: 'Quicksand',color:'#5572b5', fontSize: 12, fontWeight: '300', textAlign: 'center', marginTop: 6 }}>Cum</Text>
              </TouchableOpacity>
              <TouchableOpacity style = {{ marginLeft: 18, justifyContent: 'center'}}  onPress = {()=> {
                MainStore.chosenDay = 28
                this.takeEvents('28')}}>
                <Text style = {{fontFamily: 'Quicksand',fontSize: 24, fontWeight: '400', color: '#5572b5'}}>28</Text>
                <Text style = {{fontFamily: 'Quicksand',color:'#5572b5', fontSize: 12, fontWeight: '300', textAlign: 'center', marginTop: 6 }}>Cmts</Text>
              </TouchableOpacity>
              <TouchableOpacity style = {{ marginLeft: 18, justifyContent: 'center'}}  onPress = {()=> {
                MainStore.chosenDay = 29
                this.takeEvents('29')
              }}>
                <Text style = {{fontFamily: 'Quicksand',fontSize: 24, fontWeight: '400', color: '#5572b5'}}>29</Text>
                <Text style = {{fontFamily: 'Quicksand',color:'#5572b5', fontSize: 12, fontWeight: '300', textAlign: 'center', marginTop: 6 }}>Pzr</Text>
              </TouchableOpacity>

          </View>
          
          <ScrollView>
          {EventList}
          </ScrollView>
        

          <TouchableOpacity style = {styles.ideaContainer} onPress = {() => {this.props.navigation.navigate("NewEvent")}}>
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
    backgroundColor: '#fff'
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
    width : 64,
    height: 64,
    resizeMode: 'contain',
    marginLeft: 16,
    borderRadius: 500,
    backgroundColor: '#f1f1f1',
    marginLeft: 16,
    resizeMode: 'cover'
  },
  smallContainer: { 
    marginLeft: 16
  },
  subHeader : {
    color : '#5572b5',
    fontSize: 16,
    marginLeft: 17,
    fontFamily: 'Quicksand',
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
    backgroundColor: '#FF9357'
  }

});

export default Events;
