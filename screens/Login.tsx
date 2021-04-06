import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { windowHeight, windowWidth } from '../utils/Dimensions';
import { Feather, FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import firebase from 'firebase';

firebase.initializeApp({
  apiKey: "AIzaSyAhINwFq_Ntq9-H2tU8b99tmx8RGCWCa4I",
  authDomain: "cre8internalassessment.firebaseapp.com",
  projectId: "cre8internalassessment",
  storageBucket: "cre8internalassessment.appspot.com",
  messagingSenderId: "586002386434",
  appId: "1:586002386434:web:97432e15946ae39146611b",
  measurementId: "G-C45PD20MCW"
});

var auth = firebase.auth();

const Login = () => {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [resetEmail, setResetEmail] = React.useState('');

  const navigation = useNavigation();

  return (
    // Form that allows existing users to sign in using their email address and password


    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/images/webBackground.png')} style={styles.logo} >


        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={{
            fontSize: 120,
            color: "white",
            textShadowRadius: 45,
            textShadowColor: "magenta",
            textShadowOffset: { width: 3, height: 5 },
            fontWeight: '600',
          }}>
            Welcome to CRE8
        </Text>

        </View>


        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Feather name="user" style={styles.iconStyle} size={60} />
          <TextInput
            placeholder=" Email"
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
            placeholder=" Password"
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
              width: 120,
              alignItems: "center",
            }}
            onPress={() =>
            // When a user completes the form, call the signInWithEmailAndPassword() method
            {
              firebase.auth().signInWithEmailAndPassword(email, password).then((userCredential) => {
                // Signed in
                var user = userCredential.user;
                useState({ error: '', loading: false });
              }).catch(function (error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                if (errorCode === 'auth/wrong-password') {
                  alert('Wrong password.');
                } else {
                  console.log(errorMessage);
                }
                console.log(error);
              }),
                firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL),
                navigation.navigate('Root')
            }}
          >
            <Text style={{
              fontSize: 35,
              fontWeight: "bold",
              color: "white",
              textAlign: "center",
            }}>
              Sign in</Text>

          </TouchableOpacity>
        </View>

        <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: 20,
          }}
        />

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TextInput
            placeholder=" Enter email to receive password reset link "
            value={resetEmail}
            onChangeText={setResetEmail}
            style={{
              fontSize: 25,
              backgroundColor: "white",
              height: 40,
              width: 480,
              borderColor: "gray",
              borderRadius: 8,
            }}
          />
          <FontAwesome name="send-o" style={{
            padding: 10,
            height: 40,
            width: 40,
            alignItems: 'center',
            borderLeftColor: "gray",
            borderLeftWidth: 1,
            borderRadius: 8,
            color: "gray",
            backgroundColor: "white",
          }}
            size={20}
            alignItems="center"
            onPress={() => {
              auth.sendPasswordResetEmail(resetEmail).then(function () {
              }).catch(function (error) { console.log(error) })
            }}>

          </FontAwesome>

          <View
            style={{
              borderRightColor: 'black',
              borderRightWidth: 50,
            }}
          />

          <TouchableOpacity
            style={{
              shadowOpacity: 30,
              shadowRadius: 20,
              shadowColor: "darkgray",
              backgroundColor: "darkgray",
              borderRadius: 10,
              height: 35,
              width: 220,
              alignItems: "center",
            }}
            onPress={() => navigation.navigate('SignUp')}>
            <Text style={{
              fontSize: 25,
              fontWeight: "bold",
              color: "white",
              textAlign: "center",
            }}>
              Cre8 an account
        </Text>
          </TouchableOpacity>

        </View>

      </ImageBackground >
    </View>
  );

}

export default Login;

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

