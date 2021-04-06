import React from 'react';
import { View, TextInput, Button, StyleSheet, Text, TouchableOpacity } from 'react-native';
import firebase from 'firebase';
import { windowHeight, windowWidth } from '../utils/Dimensions';
import Story from '../components/Story';
import Characters from '../components/Characters';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


var user = firebase.auth().currentUser;

const Write = () => {

    const navigation = useNavigation();

    const [storyName, setStoryName] = React.useState('');
    const [characterName, setNewCharacterName] = React.useState('');
    
  
    // persists data for offline usage
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
  
    return < View
     // save button that on press calls save method, which saves stuff to script and parses to read
    >
             <View style={{flexDirection: "row-reverse"}}>
            <FontAwesome name="sign-out" size={25} color={"white"} style={{
            shadowOpacity: 30,
            shadowRadius: 20,
            shadowColor: "darkgray",
            backgroundColor: "darkgray",
            borderBottomLeftRadius: 10,
            height: 30,
            width: 35,
            paddingLeft: 5,
          }}
        onPress={() => {firebase.auth().signOut().then(() => {
            // Sign-out successful.
            console.log('User Logged Out!');
        }).catch(function (error) {
            // An error happened.
            console.log(error);
        }), navigation.navigate('Login')}}>

          </FontAwesome>
          </View>
            
    </View>;

}

export default Write;

const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      paddingTop: 50
    },
    logo: {
      height: 150,
      width: 150,
      resizeMode: 'cover',
    },
    text: {
      fontFamily: 'Kufam-SemiBoldItalic',
      fontSize: 28,
      marginBottom: 10,
      color: '#051d5f',
    },
    navButton: {
      marginTop: 15,
    },
    forgotButton: {
      marginVertical: 35,
    },
    navButtonText: {
      fontSize: 18,
      fontWeight: '500',
      color: '#2e64e5',
      fontFamily: 'Lato-Regular',
    },
    buttonContainer: {
      marginTop: 10,
      width: '100%',
      height: windowHeight / 15,
      backgroundColor: '#2e64e5',
      padding: 10,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 3,
    },
    buttonText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#ffffff',
      fontFamily: 'Lato-Regular',
    },
    inputContainer: {
      marginTop: 5,
      marginBottom: 10,
      width: '100%',
      height: windowHeight / 15,
      borderColor: '#ccc',
      borderRadius: 3,
      borderWidth: 1,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#fff',
    },
    iconStyle: {
      padding: 10,
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      borderRightColor: '#ccc',
      borderRightWidth: 1,
      width: 50,
    },
    input: {
      padding: 10,
      flex: 1,
      fontSize: 16,
      fontFamily: 'Lato-Regular',
      color: '#333',
      justifyContent: 'center',
      alignItems: 'center',
    },
    inputField: {
      padding: 10,
      marginTop: 5,
      marginBottom: 10,
      width: windowWidth / 1.5,
      height: windowHeight / 15,
      fontSize: 16,
      borderRadius: 8,
      borderWidth: 1,
    },
  });

// <TextInput>
// whoa no way <Text style={{color:'red'}}>rawr</Text>
// </TextInput>