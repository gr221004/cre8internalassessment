import React from 'react';
import { View, Image, TextInput, Button, StyleSheet, Text, FlatList, TouchableOpacity, SafeAreaView, ScrollView, ViewPagerAndroidBase } from 'react-native';
import { windowHeight, windowWidth } from '../utils/Dimensions';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Story from '../components/Story';
import Characters from '../components/Characters';
import { Carousel } from 'react-responsive-carousel';

const Creation = () => {

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
        < ScrollView style={{backgroundColor: 'lightblue'}}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={{
            fontSize: 100,
            color: "black",
            textShadowRadius: 45,
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


        <TextInput
            placeholder="Character name"
            value={characterName}
            onChangeText={setNewCharacterName}
            style={styles.input && styles.inputField && styles.inputContainer}
        />

        <TextInput
            placeholder="Character visual number"
            value={characterVisual}
            onChangeText={setNewCharacterVisual}
            keyboardType={'numeric'}
            style={styles.input && styles.inputField && styles.inputContainer}
        />
        <Text > Add all your characters before creating your story! </Text>

        <Button title="Add character" onPress={() => characterList.push(new Characters(characterName, characterVisual))}>
            Add character
    </Button>

    <View
          style={{
            borderBottomColor: 'lightblue',
            borderBottomWidth: 40,
          }}
        />

        <Button title="Create new story" onPress={() => (Story.storiesArray.push(new Story(storyName, characterList, script)), restartArray(characterList))}>
            Create your new story!
    </Button>
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
        <Text style={styles.imageLabel}> Character visual 1 </Text>
        <Text style={styles.imageLabel}> Character visual 2 </Text>
        <Text style={styles.imageLabel}> Character visual 3 </Text>
                <Text style={styles.imageLabel}> Character visual 4 </Text>
                <Text style={styles.imageLabel}> Character visual 5 </Text>
                <Text style={styles.imageLabel}> Character visual 6 </Text>
                        <Text style={styles.imageLabel}> Character visual 7 </Text>
                        <Text style={styles.imageLabel}> Character visual 8 </Text>
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

            <Image style={styles.image} source={require('../storyImages/backgrounds/bar.jpg')} />
            < Text style={styles.imageLabel}> Bar </Text>
            <Image style={styles.image} source={require('../storyImages/backgrounds/beach.jpg')} />
            < Text style={styles.imageLabel}> Beach </Text>
            <Image style={styles.image} source={require('../storyImages/backgrounds/bedroom1.jpg')} />
            < Text style={styles.imageLabel}> Bedroom 1 </Text>
            <Image style={styles.image} source={require('../storyImages/backgrounds/bedroom2.jpg')} />
            < Text style={styles.imageLabel}> Bedroom 2 </Text>
            <Image style={styles.image} source={require('../storyImages/backgrounds/cafeteria.png')} />
            < Text style={styles.imageLabel}> Cafeteria </Text>
            <Image style={styles.image} source={require('../storyImages/backgrounds/diner.jpg')} />
            < Text style={styles.imageLabel}> Diner </Text>
            <Image style={styles.image} source={require('../storyImages/backgrounds/diningroom.jpg')} />
            < Text style={styles.imageLabel}> Dining Room </Text>
            <Image style={styles.image} source={require('../storyImages/backgrounds/homebathroom.jpg')} />
            < Text style={styles.imageLabel}> Home Bathroom </Text>
            <Image style={styles.image} source={require('../storyImages/backgrounds/kitchen.jpg')} />
            < Text style={styles.imageLabel}> Kitchen </Text>
            <Image style={styles.image} source={require('../storyImages/backgrounds/kitchen2.jpg')} />
            < Text style={styles.imageLabel}> Kitchen 2 </Text>
            <Image style={styles.image} source={require('../storyImages/backgrounds/livingroom.jpg')} />
            < Text style={styles.imageLabel}> Living Room </Text>
            <Image style={styles.image} source={require('../storyImages/backgrounds/park.jpeg')} />
            < Text style={styles.imageLabel}> Park </Text>
            <Image style={styles.image} source={require('../storyImages/backgrounds/publicbathroom.jpg')} />
            < Text style={styles.imageLabel}> Public Bathroom </Text>
            <Image style={styles.image} source={require('../storyImages/backgrounds/school.jpg')} />
            < Text style={styles.imageLabel}> School </Text>
            <Image style={styles.image} source={require('../storyImages/backgrounds/street.jpg')} />
            < Text style={styles.imageLabel}> Street </Text>
            <Image style={styles.image} source={require('../storyImages/backgrounds/townhall.jpg')} />
            < Text style={styles.imageLabel}> Town Hall </Text>
            <Image style={styles.image} source={require('../storyImages/backgrounds/walkway.jpg')} />
            < Text style={styles.imageLabel}> Walkway </Text>

            
          </View>


  </ScrollView>
  );
  

}

export default Creation ;

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
    height: 170,
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

        },
  image: {
            marginTop: 5,
  },
    imageLabel: {
        alignItems: "stretch",
        fontSize: 70,
        },

});



