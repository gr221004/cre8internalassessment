import React from 'react';
import { View, StyleSheet, Text, Button, SafeAreaView, TouchableOpacity } from 'react-native';
import firebase from 'firebase';
import { windowHeight, windowWidth } from '../utils/Dimensions';
import Story from '../components/Story';
import Characters from '../components/Characters';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

var user = firebase.auth().currentUser;
const itemWidth = Math.round(windowWidth * 0.7);

const tutorialStoryCharacters = [(new Characters("Narrator", "0")), (new Characters("Bibi", "3")), (new Characters("Lucas", "7")), (new Characters("Nay", "5"))];
var script: string = "";
const tutorialStory = new Story("Tutorial Story", tutorialStoryCharacters, script);

const Read = () => {

    const navigation = useNavigation();

    const [storyChosen] = React.useState('');
    const storiesArray = Story.storiesArray;




    var story = Story.getStoryName(Story.storiesArray, parseInt(storyChosen));

    function load(storyChosen: string) {
        // storyChosen = React.useState('');
    }

    firebase.auth().onAuthStateChanged(function (user) {
        /* For each of your app’s pages that need information about the signed-in user, 
        attach an observer to the global authentication object. 
        This observer gets called whenever the user’s sign-in state changes
        */
        if (user) {
            // User is signed in.
            var email = user.email;
            var emailVerified = user.emailVerified;
            var uid = user.uid;
            var providerData = user.providerData;
            // ...
        } else {
            // User is signed out.
            // ...
        }
    });





    // persists data for offline usage
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);

    return (
        <View >
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

                {/* < FlatList
            data={storiesArray}
            renderItem={({ item }) => (
                <View>
                    <AntDesign name="arrowright" style={{
                        padding: 10,
                        height: 40,
                        width: 40,
                        alignItems: 'center',
                        borderLeftColor: "gray",
                        borderLeftWidth: 1,
                        borderRightWidth: 2,
                        borderRightColor: "black",
                        color: "black",
                        backgroundColor: "white",
                    }}
                        size={30}
                        alignItems="center"
                        // onPress={() => { }}
                    />
                    <Text style={styles.itemLabel}>{item.storyName}</Text>
                </View>
            )}
        /> */}


        </View>
    );
}

export default Read;

export { tutorialStory };

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover', // or 'stretch'
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    itemContainer: {
        width: itemWidth,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'dodgerblue'
    },
    itemLabel: {
        color: 'white',
        fontSize: 24
    },
});

