import React from 'react';
import { View, TextInput, ImageBackground, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { windowHeight, windowWidth } from '../utils/Dimensions';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import firebase from 'firebase';

  var auth = firebase.auth();

  const SignUp = () => {

      const navigation = useNavigation();

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    return (
  
      // Form that allows new users to sign up using their email address and password

      <View style={styles.container}>
      <ImageBackground
        source={require('../assets/images/webBackground.png')} style={styles.logo} >


        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={{
            fontSize: 120,
            color: "white",
            textShadowRadius: 45,
            textShadowColor: "white",
            textShadowOffset: { width: 3, height: 5 },
            fontWeight: '600',
          }}>
            Cre8 an account
        </Text>

        </View>


        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Feather name="user" style={styles.iconStyle} size={60} />
          <TextInput
            placeholder=" Your email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            style={{
              fontSize: 60,
              backgroundColor: "white",
              height: 90,
              borderColor: "gray",
              borderRadius: 10,
            }}
          />

          <View
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: 110,
            }}
          />

        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Feather name="lock" style={styles.iconStyle} size={60} />
          <TextInput
            placeholder=" Your password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
            style={{
              fontSize: 60,
              backgroundColor: "white",
              height: 90,
              borderColor: "gray",
              borderRadius: 10,
            }}
          />
        </View>

        <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: 30,
          }}
        />

<View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity
            style={{
              shadowOpacity: 30,
              shadowRadius: 20,
              shadowColor: "darkgray",
              backgroundColor: "darkgray",
              borderRadius: 10,
              height: 50,
              width: 180,
              alignItems: "center",
            }}
            onPress={() =>
                      // Validates the email address and password provided by the user, then passes them to the createUserWithEmailAndPassword() method
          {firebase.auth().createUserWithEmailAndPassword(email, password).then((userCredential) => {
            // Signed in 
            var user = userCredential.user;
            // ...
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            if (errorCode == 'auth/weak-password') {
              alert('The password is too weak.');
            } else {
              alert(errorMessage);
            }
            console.log(error);}), firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL), 
          navigation.navigate('Login')}}  
          >
            <Text style={{
              fontSize: 35,
              fontWeight: "bold",
              color: "white",
              textAlign: "center",
            }}>
              Register </Text>

          </TouchableOpacity>
        </View>

        <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: 30,
          }}
        />
        <View
          style={{
            borderRightColor: 'black',
            borderRightWidth: 30,
          }}
        />
  

        <TouchableOpacity
            style={{
              shadowOpacity: 30,
              shadowRadius: 20,
              shadowColor: "darkgray",
              backgroundColor: "darkgray",
              borderRadius: 10,
              height: 40,
              width: 350,
              alignItems: "center",
            }}
            onPress={() => navigation.navigate('Login')}>
            <Text style={{
              fontSize: 25,
              fontWeight: "bold",
              color: "white",
              textAlign: "center",
            }}>
              Already cre8ed an account?
        </Text>
          </TouchableOpacity>

          </ImageBackground>
      </View>
  
    );
  
  }
  

  export default SignUp;
  
  const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
  },
  logo: {
    resizeMode: 'cover',
    flex: 1,
    alignItems: 'center',
  },
  buttonContainer: {
    marginTop: 10,
    width: windowWidth / 15,
    height: windowHeight / 15,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 3,
  },
  buttonText: {
    fontSize: 100,
    textColor: "white",
    fontFamily: 'Lato-Regular',
  },
  iconStyle: {
    padding: 10,
    height: 90,
    width: 80,
    alignItems: 'center',
    borderRightColor: "gray",
    borderRightWidth: 1,
    borderRadius: 10,
    color: "gray",
    backgroundColor: "white",
  },

});


  
  