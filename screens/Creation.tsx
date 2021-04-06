import React from 'react';
import { View, Image, TextInput, Button, StyleSheet, Text, FlatList, TouchableOpacity, SafeAreaView, ScrollView, ViewPagerAndroidBase } from 'react-native';
import { windowHeight, windowWidth } from '../utils/Dimensions';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Story from '../components/Story';
import Characters from '../components/Characters';
import firebase from 'firebase';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Creation = () => {


    const navigation = useNavigation();

    const [storyName, setStoryName] = React.useState('');
    const [characterName, setNewCharacterName] = React.useState('');
    const [characterVisual, setNewCharacterVisual] = React.useState('');
    var script: string;

    var characterList: Array<Characters> = [(new Characters("Narrator", "0"))];

    function restartArray(characterList: Array<Characters>) {
        characterList.length = 0;
        characterList.push(new Characters("Narrator", "0"));
    };


    return (
        < ScrollView style={{ backgroundColor: 'lightblue' }}>
            <View style={{ flexDirection: "row-reverse" }}>
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
                    onPress={() => {
                        firebase.auth().signOut().then(() => {
                            // Sign-out successful.
                            console.log('User Logged Out!');
                        }).catch(function (error) {
                            // An error happened.
                            console.log(error);
                        }), navigation.navigate('Login')
                    }}>

                </FontAwesome>
            </View>
            <View>
                <Text style={{
                    fontSize: 100,
                    color: "white",
                    textShadowRadius: 35,
                    textShadowColor: "magenta",
                    textShadowOffset: { width: 1, height: 1 },
                    fontWeight: '400',
                    textAlign: "center",
                }}>
                    Cre8ion corner
        </Text>
            </View>
            <View
                style={{
                    borderBottomColor: 'lightblue',
                    borderBottomWidth: 20,
                }}
            />

            <TextInput
                placeholder="Story name"
                value={storyName}
                onChangeText={setStoryName}
                style={styles.input && styles.inputField && styles.inputContainer}
            />

            <View style={{ flexDirection: "row", alignItems: "center" }}>

                <TextInput
                    placeholder="Character name"
                    value={characterName}
                    onChangeText={setNewCharacterName}
                    style={{
                        fontSize: 25,
                        backgroundColor: "white",
                        height: 40,
                        width: 480,
                        borderColor: "gray",
                        borderRadius: 8,
                    }}

                />

                <TextInput
                    placeholder="Character visual number"
                    value={characterVisual}
                    onChangeText={setNewCharacterVisual}
                    keyboardType={'numeric'}
                    style={{
                        fontSize: 25,
                        backgroundColor: "white",
                        height: 40,
                        width: 480,
                        borderColor: "gray",
                        borderRadius: 8,
                    }}
                />

                <Button title="Add character" onPress={() => characterList.push(new Characters(characterName, characterVisual))}>
                    Add character
    </Button>
            </View>

            <View
                style={{
                    borderBottomColor: 'lightblue',
                    borderBottomWidth: 40,
                }}
            />
            <View style={{ paddingLeft: 20, width: 50, height: 20 }}>
            <Text > Add all your characters before creating your story! </Text>
            
            <Button title="Create new story" onPress={() => (Story.storiesArray.push(new Story(storyName, characterList, script)), restartArray(characterList))}>
                CREATE YOUR NEW STORY
    </Button>
    </View>
            <View
                style={{
                    borderBottomColor: 'lightblue',
                    borderBottomWidth: 20,
                }}
            />
            <View >
                < Text style={styles.title}> Character Visuals </Text>
                < View style={{ flexDirection: "row", alignItems: "stretch" }}>
                    <Image style={styles.vectorImage} source={require('../storyImages/vectors/girl1_neutral.png')} />
                    <Image style={styles.vectorImage} source={require('../storyImages/vectors/girl2_neutral.png')} />
                    <Image style={styles.vectorImage} source={require('../storyImages/vectors/girl3_neutral.png')} />
                    <Image style={styles.vectorImage} source={require('../storyImages/vectors/girl4_neutral.png')} />
                    <Image style={styles.vectorImage} source={require('../storyImages/vectors/boy1_neutral.png')} />
                    <Image style={styles.vectorImage} source={require('../storyImages/vectors/boy2_neutral.png')} />
                    <Image style={styles.vectorImage} source={require('../storyImages/vectors/boy3_neutral.png')} />
                    <Image style={styles.vectorImage} source={require('../storyImages/vectors/boy4_neutral.png')} />
                </View>
                <View style={{ flexDirection: "row", alignItems: "stretch" }}>
                    <View
                        style={{
                            borderRightColor: 'lightblue',
                            borderRightWidth: 60,
                        }}
                    />
                    <Text style={styles.vectorLabel}> 1 </Text>
                    <View
                        style={{
                            borderRightColor: 'lightblue',
                            borderRightWidth: 130,
                        }}
                    />
                    <Text style={styles.vectorLabel}> 2 </Text>
                    <View
                        style={{
                            borderRightColor: 'lightblue',
                            borderRightWidth: 130,
                        }}
                    />
                    <Text style={styles.vectorLabel}> 3 </Text>
                    <View
                        style={{
                            borderRightColor: 'lightblue',
                            borderRightWidth: 130,
                        }}
                    />
                    <Text style={styles.vectorLabel}> 4 </Text>
                    <View
                        style={{
                            borderRightColor: 'lightblue',
                            borderRightWidth: 130,
                        }}
                    />
                    <Text style={styles.vectorLabel}> 5 </Text>
                    <View
                        style={{
                            borderRightColor: 'lightblue',
                            borderRightWidth: 130,
                        }}
                    />
                    <Text style={styles.vectorLabel}> 6 </Text>
                    <View
                        style={{
                            borderRightColor: 'lightblue',
                            borderRightWidth: 130,
                        }}
                    />
                    <Text style={styles.vectorLabel}> 7 </Text>
                    <View
                        style={{
                            borderRightColor: 'lightblue',
                            borderRightWidth: 130,
                        }}
                    />
                    <Text style={styles.vectorLabel}> 8 </Text>
                    <View
                        style={{
                            borderRightColor: 'lightblue',
                            borderRightWidth: 60,
                        }}
                    />
                </View>
            </View>
            <View
                style={{
                    borderBottomColor: 'lightblue',
                    borderBottomWidth: 40,
                }}
            />

            <View style={{ flexDirection: "column", alignItems: "center" }}>
                < Text style={styles.title}> Backgrounds </Text>

                <View
                style={{
                    borderBottomColor: 'lightblue',
                    borderBottomWidth: 20,
                }}
            />

                <Image style={styles.bg} source={require('../storyimages/backgrounds/bar.jpg')} />
                < Text style={styles.backgroundLabel}> Bar </Text>

                <View
                style={{
                    borderBottomColor: 'lightblue',
                    borderBottomWidth: 20,
                }}
            />

                <Image style={styles.bg} source={require('../storyImages/backgrounds/beach.jpg')} />
                < Text style={styles.backgroundLabel}> Beach </Text>

                <View
                style={{
                    borderBottomColor: 'lightblue',
                    borderBottomWidth: 20,
                }}
            />

                <Image style={styles.bg} source={require('../storyImages/backgrounds/bedroom1.jpg')} />
                < Text style={styles.backgroundLabel}> Bedroom 1 </Text>

                <View
                style={{
                    borderBottomColor: 'lightblue',
                    borderBottomWidth: 20,
                }}
            />

                <Image style={styles.bg} source={require('../storyImages/backgrounds/bedroom2.jpg')} />
                < Text style={styles.backgroundLabel}> Bedroom 2 </Text>

                <View
                style={{
                    borderBottomColor: 'lightblue',
                    borderBottomWidth: 20,
                }}
            />

                <Image style={styles.bg} source={require('../storyImages/backgrounds/cafeteria.png')} />
                < Text style={styles.backgroundLabel}> Cafeteria </Text>

                <View
                style={{
                    borderBottomColor: 'lightblue',
                    borderBottomWidth: 20,
                }}
            />

                <Image style={styles.bg} source={require('../storyImages/backgrounds/diner.png')} />
                < Text style={styles.backgroundLabel}> Diner </Text>

                <View
                style={{
                    borderBottomColor: 'lightblue',
                    borderBottomWidth: 20,
                }}
            />

                <Image style={styles.bg} source={require('../storyImages/backgrounds/diningroom.jpg')} />
                < Text style={styles.backgroundLabel}> Dining Room </Text>

                <View
                style={{
                    borderBottomColor: 'lightblue',
                    borderBottomWidth: 20,
                }}
            />

                <Image style={styles.bg} source={require('../storyImages/backgrounds/restaurant.jpg')} />
                < Text style={styles.backgroundLabel}> Restaurant </Text>

                <View
                style={{
                    borderBottomColor: 'lightblue',
                    borderBottomWidth: 20,
                }}
            />

                <Image style={styles.bg} source={require('../storyImages/backgrounds/homebathroom.jpg')} />
                < Text style={styles.backgroundLabel}> Home Bathroom </Text>

                <View
                style={{
                    borderBottomColor: 'lightblue',
                    borderBottomWidth: 20,
                }}
            />

                <Image style={styles.bg} source={require('../storyImages/backgrounds/kitchen.jpg')} />
                < Text style={styles.backgroundLabel}> Kitchen 1 </Text>

                <View
                style={{
                    borderBottomColor: 'lightblue',
                    borderBottomWidth: 20,
                }}
            />

                <Image style={styles.bg} source={require('../storyImages/backgrounds/kitchen2.jpg')} />
                < Text style={styles.backgroundLabel}> Kitchen 2 </Text>

                <View
                style={{
                    borderBottomColor: 'lightblue',
                    borderBottomWidth: 20,
                }}
            />

                <Image style={styles.bg} source={require('../storyImages/backgrounds/livingroom1.jpg')} />
                < Text style={styles.backgroundLabel}> Living Room  1 </Text>

                <View
                style={{
                    borderBottomColor: 'lightblue',
                    borderBottomWidth: 20,
                }}
            />

                <Image style={styles.bg} source={require('../storyImages/backgrounds/livingroom2.png')} />
                < Text style={styles.backgroundLabel}> Living Room  2 </Text>

                <View
                style={{
                    borderBottomColor: 'lightblue',
                    borderBottomWidth: 20,
                }}
            />

                <Image style={styles.bg} source={require('../storyImages/backgrounds/mall.jpg')} />
                < Text style={styles.backgroundLabel}> Mall </Text>

                <View
                style={{
                    borderBottomColor: 'lightblue',
                    borderBottomWidth: 20,
                }}
            />

                <Image style={styles.bg} source={require('../storyImages/backgrounds/movietheater.jpg')} />
                < Text style={styles.backgroundLabel}> Movie Theater </Text>

                <View
                style={{
                    borderBottomColor: 'lightblue',
                    borderBottomWidth: 20,
                }}
            />

                <Image style={styles.bg} source={require('../storyImages/backgrounds/park.jpg')} />
                < Text style={styles.backgroundLabel}> Park </Text>

                <View
                style={{
                    borderBottomColor: 'lightblue',
                    borderBottomWidth: 20,
                }}
            />

                <Image style={styles.bg} source={require('../storyImages/backgrounds/publicbathroom.png')} />
                < Text style={styles.backgroundLabel}> Public Bathroom </Text>

                <View
                style={{
                    borderBottomColor: 'lightblue',
                    borderBottomWidth: 20,
                }}
            />

                <Image style={styles.bg} source={require('../storyImages/backgrounds/school.jpg')} />
                < Text style={styles.backgroundLabel}> School </Text>

                <View
                style={{
                    borderBottomColor: 'lightblue',
                    borderBottomWidth: 20,
                }}
            />

                <Image style={styles.bg} source={require('../storyImages/backgrounds/street.jpg')} />
                < Text style={styles.backgroundLabel}> Street </Text>

                <View
                style={{
                    borderBottomColor: 'lightblue',
                    borderBottomWidth: 20,
                }}
            />

                <Image style={styles.bg} source={require('../storyImages/backgrounds/townhall.jpg')} />
                < Text style={styles.backgroundLabel}> Town Hall </Text>

                <View
                style={{
                    borderBottomColor: 'lightblue',
                    borderBottomWidth: 20,
                }}
            />

                <Image style={styles.bg} source={require('../storyImages/backgrounds/walkway.jpg')} />
                < Text style={styles.backgroundLabel}> Walkway </Text>

                 <View
                style={{
                    borderBottomColor: 'lightblue',
                    borderBottomWidth: 20,
                }}
            />


            </View>


        </ScrollView>
    );


}

export default Creation;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        paddingTop: 50
    },
    text: {
        fontFamily: 'Kufam-SemiBoldItalic',
        fontSize: 28,
        marginBottom: 10,
        color: '#051d5f',
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
    vectorImage: {
        width: 100,
        height: 180,
        flex: 1,
    },
    itemContainer: {
        width: Math.round(windowWidth * 0.7),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'dodgerblue'
    },
    itemLabel: {
        color: 'white',
        fontSize: 24
    },
    counter: {
        marginTop: 25,
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    title: {
        fontSize: 75,
        textAlign: "center",
        fontWeight: "100",
    },
    bg: {
        width: 1000,
        height: 600,
        flex: 1,
    },
    vectorLabel: {
        alignItems: "stretch",
        fontSize: 60,
    },
    backgroundLabel: {
        alignItems: "stretch",
        fontSize: 30,
    },

});



