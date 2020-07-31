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


// import testSvg from './src/images/unigatherLogo.svg';
import MainStore from './store'
import firestore from '@react-native-firebase/firestore';
import {observer} from 'mobx-react';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

@observer
class Messeages extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      Messages : []
    }
  }

  findChat = () => {
    
    firestore().collection("Messages")
    // .doc("ad")
    .get()
    .then( querySnapshot => {
        if(querySnapshot.size === MainStore.messages.length){
          // alert("asd")
          return
        }
        else {
          MainStore.messages = [] 
          querySnapshot.forEach(documentSnapshot => {
              // alert(documentSnapshot.id)
              if(documentSnapshot.data().name1 === MainStore.user.name || documentSnapshot.data().name2 === MainStore.user.name){
                  // alert(JSON.stringify(documentSnapshot.data()))
                  MainStore.messages = [ 
                      ...MainStore.messages,
                      { name1 : documentSnapshot.data().name1,
                        name2 : documentSnapshot.data().name2,
                        time: documentSnapshot.data().time,
                        level: documentSnapshot.data().level,
                        note : documentSnapshot.data().note,
                        chatId : documentSnapshot.id,
                        last : documentSnapshot.data().last,
                        lastMessage : documentSnapshot.data().lastMessage
                      }
                  ]
                  // alert(JSON.stringify(MainStore.messages))
              }
              else{
                  // alert("cannot fetch the messages data")
              }
      
              
          })
        }

        })
        // .catch(err => {alert(JSON.stringify(err))})
        
  }

  componentDidMount(){
    MainStore.messages = []
    this.findChat()

    setInterval(this.findChat, 1500)
  }


  render (){

    const renderMessages = MainStore.messages.map(item => {

      // alert(JSON.stringify(item))
      if(item.name1 === MainStore.user.name){
        if(item.last === MainStore.user.name){
          if(item.name2 === 'emre'){
            return ((
              <TouchableOpacity style = {styles.messeageContainer} onPress = {() => {
                  MainStore.chatId = item.chatId+"/"
                  MainStore.chatNote = item.note 
                  MainStore.chatLevel = item.level
                  MainStore.sender = item.name2
                  this.props.navigation.navigate("Mesaj")
                }}>
                <Image  style = {styles.leftMC} source = {require('./../images/emre.jpeg')}/>
                <View style = {styles.middleMC}>
                  <Text style = {styles.sender}>{item.name2}</Text>
                  <Text style = {styles.mContent}>{item.lastMessage}</Text>
                </View>
                <View style = {styles.rightMC}>
                <Text style = {styles.mTime}>{item.time}</Text>
                <View style = {styles.notificate2}>
      
                </View>
                </View>
            </TouchableOpacity>
            ))
          }
          else if(item.name2 === 'erce'){
            return ((
              <TouchableOpacity style = {styles.messeageContainer} onPress = {() => {
                  MainStore.chatId = item.chatId+"/"
                  MainStore.chatNote = item.note 
                  MainStore.chatLevel = item.level
                  MainStore.sender = item.name2
                  this.props.navigation.navigate("Mesaj")
                }}>
                <Image  style = {styles.leftMC} source = {require('./../images/erce.jpeg')}/>
                <View style = {styles.middleMC}>
                  <Text style = {styles.sender}>{item.name2}</Text>
                  <Text style = {styles.mContent}>{item.lastMessage}</Text>
                </View>
                <View style = {styles.rightMC}>
                <Text style = {styles.mTime}>{item.time}</Text>
                <View style = {styles.notificate2}>
      
                </View>
                </View>
            </TouchableOpacity>
            ))
          }
          else if(item.name2 === 'mehmet'){
            return ((
              <TouchableOpacity style = {styles.messeageContainer} onPress = {() => {
                  MainStore.chatId = item.chatId+"/"
                  MainStore.chatNote = item.note 
                  MainStore.chatLevel = item.level
                  MainStore.sender = item.name2
                  this.props.navigation.navigate("Mesaj")
                }}>
                <Image  style = {styles.leftMC} source = {require('./../images/mehmet.jpeg')}/>
                <View style = {styles.middleMC}>
                  <Text style = {styles.sender}>{item.name2}</Text>
                  <Text style = {styles.mContent}>{item.lastMessage}</Text>
                </View>
                <View style = {styles.rightMC}>
                <Text style = {styles.mTime}>{item.time}</Text>
                <View style = {styles.notificate2}>
      
                </View>
                </View>
            </TouchableOpacity>
            ))
            }
            else{
              return ((
                <TouchableOpacity style = {styles.messeageContainer} onPress = {() => {
                    MainStore.chatId = item.chatId+"/"
                    MainStore.chatNote = item.note 
                    MainStore.chatLevel = item.level
                    MainStore.sender = item.name2
                    this.props.navigation.navigate("Mesaj")
                  }}>
                  <Image  style = {styles.leftMC}/>
                  <View style = {styles.middleMC}>
                    <Text style = {styles.sender}>{item.name2}</Text>
                    <Text style = {styles.mContent}>{item.lastMessage}</Text>
                  </View>
                  <View style = {styles.rightMC}>
                  <Text style = {styles.mTime}>{item.time}</Text>
                  <View style = {styles.notificate2}>
        
                  </View>
                  </View>
              </TouchableOpacity>
              ))
            }
          }
          
        }
        else{
          if(item.name1 === 'emre'){
            return ((
              <TouchableOpacity style = {styles.messeageContainer} onPress = {() => {
                  MainStore.chatId = item.chatId+"/"
                  MainStore.chatNote = item.note 
                  MainStore.chatLevel = item.level
                  MainStore.sender = item.name2
                  this.props.navigation.navigate("Mesaj")
                }}>
                <Image  style = {styles.leftMC} source = {require('./../images/emre.jpeg')}/>
                <View style = {styles.middleMC}>
                  <Text style = {styles.sender}>{item.name2}</Text>
                  <Text style = {styles.mContent}>{item.lastMessage}</Text>
                </View>
                <View style = {styles.rightMC}>
                <Text style = {styles.mTime}>{item.time}</Text>
                <View style = {styles.notificate}>
      
                </View>
                </View>
            </TouchableOpacity>
            ))
          }
          else if(item.name1 === 'mehmet'){
            return ((
              <TouchableOpacity style = {styles.messeageContainer} onPress = {() => {
                  MainStore.chatId = item.chatId+"/"
                  MainStore.chatNote = item.note 
                  MainStore.chatLevel = item.level
                  MainStore.sender = item.name2
                  this.props.navigation.navigate("Mesaj")
                }}>
                <Image  style = {styles.leftMC} source = {require('./../images/mehmet.jpeg')}/>
                <View style = {styles.middleMC}>
                  <Text style = {styles.sender}>{item.name2}</Text>
                  <Text style = {styles.mContent}>{item.lastMessage}</Text>
                </View>
                <View style = {styles.rightMC}>
                <Text style = {styles.mTime}>{item.time}</Text>
                <View style = {styles.notificate}>
      
                </View>
                </View>
            </TouchableOpacity>
            ))
          }
        else if (item.name1 === 'erce'){
          return ((
            <TouchableOpacity style = {styles.messeageContainer} onPress = {() => {
                MainStore.chatId = item.chatId+"/"
                MainStore.chatNote = item.note 
                MainStore.chatLevel = item.level
                MainStore.sender = item.name2
                this.props.navigation.navigate("Mesaj")
              }}>
              <Image  style = {styles.leftMC} source = {require('./../images/erce.jpeg')}/>
              <View style = {styles.middleMC}>
                <Text style = {styles.sender}>{item.name2}</Text>
                <Text style = {styles.mContent}>{item.lastMessage}</Text>
              </View>
              <View style = {styles.rightMC}>
              <Text style = {styles.mTime}>{item.time}</Text>
              <View style = {styles.notificate}>
    
              </View>
              </View>
          </TouchableOpacity>
          ))
        }
        
      }
      return ((
        <TouchableOpacity style = {styles.messeageContainer} onPress = {() => {
          MainStore.chatId = item.chatId+"/"
          MainStore.chatNote = item.note 
          MainStore.chatLevel = item.level
          MainStore.sender = item.name2
          this.props.navigation.navigate("Mesaj")
          }}>
          <Image  style = {styles.leftMC} />
          <View style = {styles.middleMC}>
            <Text style = {styles.sender}>{item.name1}</Text>
            <Text style = {styles.mContent}>{item.lastMessage}</Text>
          </View>
          <View style = {styles.rightMC}>
            <Text style = {styles.mTime}>{item.time}</Text>
            <View style = {styles.notificate}>
    
            </View>
          </View>
      </TouchableOpacity>
    ))
      
        
        
      })

    return (
      <>
        <StatusBar barStyle = "dark-content"/>
        <SafeAreaView style = {styles.container}>
          <ScrollView>
            {renderMessages}  
          </ScrollView>
            

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
  messeageContainer: {
    width : screenWidth* 90 /100,
    height: 15 * screenHeight / 100,
    flexDirection: 'row',
    borderWidth: 0.25,
    borderRadius: 16,
    // justifyContent: 'center',
    alignItems: 'center',
    left: 5*screenWidth/100,
    marginTop: 12
  },
  leftMC: { 
    width : 64,
    height: 64,
    resizeMode: 'cover',
    marginLeft: 16,
    borderRadius: 500,
    backgroundColor: '#f1f1f1'
  },
  middleMC : {
    marginLeft: 24,
  },
  sender: {
    color: '#5572b5',
    fontWeight: "600",
    fontSize: 16,
    fontFamily: 'Quicksand',
  },
  mContent: {
    marginTop: 10,
    color: '#5572b5',
    fontSize : 14,
    fontWeight: "300"
  },
  rightMC: {
    width: '40%'
     
  },
  mTime : {
    textAlign: "right",
    width: 90,
    // marginLeft: 50,
    fontFamily: 'Quicksand',
    alignSelf:'flex-end'
  },
  notificate: {
    color: '#fff',
    textAlign: 'center',
    marginTop: 5,
    backgroundColor: '#81a0e7',
    width: 21,
    height: 21,
    alignSelf: 'flex-end',
    fontSize: 14,
    borderRadius: 50, 
    fontFamily: 'Quicksand',
  },
  notificate2: {
    color: '#fff',
    textAlign: 'center',
    marginTop: 5,
    backgroundColor: '#f6f6f8',
    width: 21,
    height: 21,
    alignSelf: 'flex-end',
    fontSize: 14,
    borderRadius: 50, 
    fontFamily: 'Quicksand',
  }

});

export default Messeages;
