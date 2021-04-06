import React, { Component } from 'react';
import { StyleSheet, Image, View, TextInput } from 'react-native';
import Story from './Story';
import Characters from './Characters';

const [dialogue, setDialogue] = React.useState('');
const [characterName] = React.useState('');
const [storyChosen] = React.useState('');




export default class Actions extends Component {


  static neutral(characterName: string) {

    var characterVisual = Characters.getCharacterVisual(Story.storiesArray[parseInt(storyChosen)], characterName);

    if (characterVisual == 1) {
      return (
        <View >
          <Image style={styles.characterImage} source={require('../storyImages/vectors/girl1_neutral.png')} />
          <TextInput
            placeholder="Dialogue"
            value={dialogue}
            onChangeText={setDialogue}
            style={styles.container}
          />
        </View>
      );
    } else if (characterVisual == 2) {
      return (
        <View >
          <Image style={styles.characterImage} source={require('./images/vectors/girl2_neutral.png')} />
          <TextInput
            placeholder="Dialogue"
            value={dialogue}
            onChangeText={setDialogue}
            style={styles.container}
          />
        </View>
      );
    } else if (characterVisual == 3) {
      return (
        <View >
          <Image style={styles.characterImage} source={require('./images/vectors/girl3_neutral.png')} />
          <TextInput
            placeholder="Dialogue"
            value={dialogue}
            onChangeText={setDialogue}
            style={styles.container}
          />
        </View>
      );
    } else if (characterVisual == 4) {
      return (
        <View >
          <Image style={styles.characterImage} source={require('./images/vectors/girl4_neutral.png')} />
          <TextInput
            placeholder="Dialogue"
            value={dialogue}
            onChangeText={setDialogue}
            style={styles.container}
          />
        </View>
      );
    } else if (characterVisual == 5) {
      return (
        <View >
          <Image style={styles.characterImage} source={require('./images/vectors/boy1_neutral.png')} />
          <TextInput
            placeholder="Dialogue"
            value={dialogue}
            onChangeText={setDialogue}
            style={styles.container}
          />
        </View>
      );
    } else if (characterVisual == 6) {
      return (
        <View >
          <Image style={styles.characterImage} source={require('./images/vectors/boy2_neutral.png')} />
          <TextInput
            placeholder="Dialogue"
            value={dialogue}
            onChangeText={setDialogue}
            style={styles.container}
          />
        </View>
      );
    } else if (characterVisual == 7) {
      return (
        <View >
          <Image style={styles.characterImage} source={require('./images/vectors/boy3_neutral.png')} />
          <TextInput
            placeholder="Dialogue"
            value={dialogue}
            onChangeText={setDialogue}
            style={styles.container}
          />
        </View>
      );
    } else if (characterVisual == 8) {
      return (
        <View >
          <Image style={styles.characterImage} source={require('./images/vectors/boy4_neutral.png')} />
          <TextInput
            placeholder="Dialogue"
            value={dialogue}
            onChangeText={setDialogue}
            style={styles.container}
          />
        </View>
      );
    }
  };

  static shock(characterName: string) {

    var characterVisual = Characters.getCharacterVisual(Story.storiesArray[parseInt(storyChosen)], characterName);

    if (characterVisual == 1) {
      return (
        <View >
          <Image style={styles.characterImage} source={require('./images/vectors/girl1_shock.png')} />
          <TextInput
            placeholder="Dialogue"
            value={dialogue}
            onChangeText={setDialogue}
            style={styles.container}
          />
        </View>
      );
    } else if (characterVisual == 2) {
      return (
        <View >
          <Image style={styles.characterImage} source={require('./images/vectors/girl2_shock.png')} />
          <TextInput
            placeholder="Dialogue"
            value={dialogue}
            onChangeText={setDialogue}
            style={styles.container}
          />
        </View>
      );
    } else if (characterVisual == 3) {
      return (
        <View >
          <Image style={styles.characterImage} source={require('./images/vectors/girl3_shock.png')} />
          <TextInput
            placeholder="Dialogue"
            value={dialogue}
            onChangeText={setDialogue}
            style={styles.container}
          />
        </View>
      );
    } else if (characterVisual == 4) {
      return (
        <View >
          <Image style={styles.characterImage} source={require('./images/vectors/girl4_shock.png')} />
          <TextInput
            placeholder="Dialogue"
            value={dialogue}
            onChangeText={setDialogue}
            style={styles.container}
          />
        </View>
      );
    } else if (characterVisual == 5) {
      return (
        <View >
          <Image style={styles.characterImage} source={require('./images/vectors/boy1_shock.png')} />
          <TextInput
            placeholder="Dialogue"
            value={dialogue}
            onChangeText={setDialogue}
            style={styles.container}
          />
        </View>
      );
    } else if (characterVisual == 6) {
      return (
        <View >
          <Image style={styles.characterImage} source={require('./images/vectors/boy2_shock.png')} />
          <TextInput
            placeholder="Dialogue"
            value={dialogue}
            onChangeText={setDialogue}
            style={styles.container}
          />
        </View>
      );
    } else if (characterVisual == 7) {
      return (
        <View >
          <Image style={styles.characterImage} source={require('./images/vectors/boy3_shock.png')} />
          <TextInput
            placeholder="Dialogue"
            value={dialogue}
            onChangeText={setDialogue}
            style={styles.container}
          />
        </View>
      );
    } else if (characterVisual == 8) {
      return (
        <View >
          <Image style={styles.characterImage} source={require('./images/vectors/boy4_shock.png')} />
          <TextInput
            placeholder="Dialogue"
            value={dialogue}
            onChangeText={setDialogue}
            style={styles.container}
          />
        </View>
      );
    }
  };

  static smile(characterName: string) {

    var characterVisual = Characters.getCharacterVisual(Story.storiesArray[parseInt(storyChosen)], characterName);

    if (characterVisual == 1) {
      return (
        <View >
          <Image style={styles.characterImage} source={require('./images/vectors/girl1_smile.png')} />
          <TextInput
            placeholder="Dialogue"
            value={dialogue}
            onChangeText={setDialogue}
            style={styles.container}
          />
        </View>
      );
    } else if (characterVisual == 2) {
      return (
        <View >
          <Image style={styles.characterImage} source={require('./images/vectors/girl2_smile.png')} />
          <TextInput
            placeholder="Dialogue"
            value={dialogue}
            onChangeText={setDialogue}
            style={styles.container}
          />
        </View>
      );
    } else if (characterVisual == 3) {
      return (
        <View >
          <Image style={styles.characterImage} source={require('./images/vectors/girl3_shock.png')} />
          <TextInput
            placeholder="Dialogue"
            value={dialogue}
            onChangeText={setDialogue}
            style={styles.container}
          />
        </View>
      );
    } else if (characterVisual == 4) {
      return (
        <View >
          <Image style={styles.characterImage} source={require('./images/vectors/girl4_smile.png')} />
          <TextInput
            placeholder="Dialogue"
            value={dialogue}
            onChangeText={setDialogue}
            style={styles.container}
          />
        </View>
      );
    } else if (characterVisual == 5) {
      return (
        <View >
          <Image style={styles.characterImage} source={require('./images/vectors/boy1_smile.png')} />
          <TextInput
            placeholder="Dialogue"
            value={dialogue}
            onChangeText={setDialogue}
            style={styles.container}
          />
        </View>
      );
    } else if (characterVisual == 6) {
      return (
        <View >
          <Image style={styles.characterImage} source={require('./images/vectors/boy2_smile.png')} />
          <TextInput
            placeholder="Dialogue"
            value={dialogue}
            onChangeText={setDialogue}
            style={styles.container}
          />
        </View>
      );
    } else if (characterVisual == 7) {
      return (
        <View >
          <Image style={styles.characterImage} source={require('./images/vectors/boy3_smile.png')} />
          <TextInput
            placeholder="Dialogue"
            value={dialogue}
            onChangeText={setDialogue}
            style={styles.container}
          />
        </View>
      );
    } else if (characterVisual == 8) {
      return (
        <View >
          <Image style={styles.characterImage} source={require('./images/vectors/boy4_smile.png')} />
          <TextInput
            placeholder="Dialogue"
            value={dialogue}
            onChangeText={setDialogue}
            style={styles.container}
          />
        </View>
      );
    }
  };

  static anger(characterName: string) {

    var characterVisual = Characters.getCharacterVisual(Story.storiesArray[parseInt(storyChosen)], characterName);

    if (characterVisual == 1) {
      return (
        <View >
          <Image style={styles.characterImage} source={require('./images/vectors/girl1_anger.png')} />
          <TextInput
            placeholder="Dialogue"
            value={dialogue}
            onChangeText={setDialogue}
            style={styles.container}
          />
        </View>
      );
    } else if (characterVisual == 2) {
      return (
        <View >
          <Image style={styles.characterImage} source={require('./images/vectors/girl2_anger.png')} />
          <TextInput
            placeholder="Dialogue"
            value={dialogue}
            onChangeText={setDialogue}
            style={styles.container}
          />
        </View>
      );
    } else if (characterVisual == 3) {
      return (
        <View >
          <Image style={styles.characterImage} source={require('./images/vectors/girl3_anger.png')} />
          <TextInput
            placeholder="Dialogue"
            value={dialogue}
            onChangeText={setDialogue}
            style={styles.container}
          />
        </View>
      );
    } else if (characterVisual == 4) {
      return (
        <View >
          <Image style={styles.characterImage} source={require('./images/vectors/girl4_anger.png')} />
          <TextInput
            placeholder="Dialogue"
            value={dialogue}
            onChangeText={setDialogue}
            style={styles.container}
          />
        </View>
      );
    } else if (characterVisual == 5) {
      return (
        <View >
          <Image style={styles.characterImage} source={require('./images/vectors/boy1_anger.png')} />
          <TextInput
            placeholder="Dialogue"
            value={dialogue}
            onChangeText={setDialogue}
            style={styles.container}
          />
        </View>
      );
    } else if (characterVisual == 6) {
      return (
        <View >
          <Image style={styles.characterImage} source={require('./images/vectors/boy2_anger.png')} />
          <TextInput
            placeholder="Dialogue"
            value={dialogue}
            onChangeText={setDialogue}
            style={styles.container}
          />
        </View>
      );
    } else if (characterVisual == 7) {
      return (
        <View >
          <Image style={styles.characterImage} source={require('./images/vectors/boy3_anger.png')} />
          <TextInput
            placeholder="Dialogue"
            value={dialogue}
            onChangeText={setDialogue}
            style={styles.container}
          />
        </View>
      );
    } else if (characterVisual == 8) {
      return (
        <View >
          <Image style={styles.characterImage} source={require('./images/vectors/boy4_anger.png')} />
          <TextInput
            placeholder="Dialogue"
            value={dialogue}
            onChangeText={setDialogue}
            style={styles.container}
          />
        </View>
      );
    }
  };

  static frown(characterName: string) {

    var characterVisual = Characters.getCharacterVisual(Story.storiesArray[parseInt(storyChosen)], characterName);

    if (characterVisual == 1) {
      return (
        <View >
          <Image style={styles.characterImage} source={require('./images/vectors/girl1_frown.png')} />
          <TextInput
            placeholder="Dialogue"
            value={dialogue}
            onChangeText={setDialogue}
            style={styles.container}
          />
        </View>
      );
    } else if (characterVisual == 2) {
      return (
        <View >
          <Image style={styles.characterImage} source={require('./images/vectors/girl2_frown.png')} />
          <TextInput
            placeholder="Dialogue"
            value={dialogue}
            onChangeText={setDialogue}
            style={styles.container}
          />
        </View>
      );
    } else if (characterVisual == 3) {
      return (
        <View >
          <Image style={styles.characterImage} source={require('./images/vectors/girl3_frown.png')} />
          <TextInput
            placeholder="Dialogue"
            value={dialogue}
            onChangeText={setDialogue}
            style={styles.container}
          />
        </View>
      );
    } else if (characterVisual == 4) {
      return (
        <View >
          <Image style={styles.characterImage} source={require('./images/vectors/girl4_frown.png')} />
          <TextInput
            placeholder="Dialogue"
            value={dialogue}
            onChangeText={setDialogue}
            style={styles.container}
          />
        </View>
      );
    } else if (characterVisual == 5) {
      return (
        <View >
          <Image style={styles.characterImage} source={require('./images/vectors/boy1_frown.png')} />
          <TextInput
            placeholder="Dialogue"
            value={dialogue}
            onChangeText={setDialogue}
            style={styles.container}
          />
        </View>
      );
    } else if (characterVisual == 6) {
      return (
        <View >
          <Image style={styles.characterImage} source={require('./images/vectors/boy2_frown.png')} />
          <TextInput
            placeholder="Dialogue"
            value={dialogue}
            onChangeText={setDialogue}
            style={styles.container}
          />
        </View>
      );
    } else if (characterVisual == 7) {
      return (
        <View >
          <Image style={styles.characterImage} source={require('./images/vectors/boy3_frown.png')} />
          <TextInput
            placeholder="Dialogue"
            value={dialogue}
            onChangeText={setDialogue}
            style={styles.container}
          />
        </View>
      );
    } else if (characterVisual == 8) {
      return (
        <View >
          <Image style={styles.characterImage} source={require('./images/vectors/boy4_frown.png')} />
          <TextInput
            placeholder="Dialogue"
            value={dialogue}
            onChangeText={setDialogue}
            style={styles.container}
          />
        </View>
      );
    }
  };

  static sad(characterName: string) {

    var characterVisual = Characters.getCharacterVisual(Story.storiesArray[parseInt(storyChosen)], characterName);

    if (characterVisual == 1) {
      return (
        <View >
          <Image style={styles.characterImage} source={require('./images/vectors/girl1_sad.png')} />
          <TextInput
            placeholder="Dialogue"
            value={dialogue}
            onChangeText={setDialogue}
            style={styles.container}
          />
        </View>
      );
    } else if (characterVisual == 2) {
      return (
        <View >
          <Image style={styles.characterImage} source={require('./images/vectors/girl2_sad.png')} />
          <TextInput
            placeholder="Dialogue"
            value={dialogue}
            onChangeText={setDialogue}
            style={styles.container}
          />
        </View>
      );
    } else if (characterVisual == 3) {
      return (
        <View >
          <Image style={styles.characterImage} source={require('./images/vectors/girl3_sad.png')} />
          <TextInput
            placeholder="Dialogue"
            value={dialogue}
            onChangeText={setDialogue}
            style={styles.container}
          />
        </View>
      );
    } else if (characterVisual == 4) {
      return (
        <View >
          <Image style={styles.characterImage} source={require('./images/vectors/girl4_sad.png')} />
          <TextInput
            placeholder="Dialogue"
            value={dialogue}
            onChangeText={setDialogue}
            style={styles.container}
          />
        </View>
      );
    } else if (characterVisual == 5) {
      return (
        <View >
          <Image style={styles.characterImage} source={require('./images/vectors/boy1_sad.png')} />
          <TextInput
            placeholder="Dialogue"
            value={dialogue}
            onChangeText={setDialogue}
            style={styles.container}
          />
        </View>
      );
    } else if (characterVisual == 6) {
      return (
        <View >
          <Image style={styles.characterImage} source={require('./images/vectors/boy2_sad.png')} />
          <TextInput
            placeholder="Dialogue"
            value={dialogue}
            onChangeText={setDialogue}
            style={styles.container}
          />
        </View>
      );
    } else if (characterVisual == 7) {
      return (
        <View >
          <Image style={styles.characterImage} source={require('./images/vectors/boy3_sad.png')} />
          <TextInput
            placeholder="Dialogue"
            value={dialogue}
            onChangeText={setDialogue}
            style={styles.container}
          />
        </View>
      );
    } else if (characterVisual == 8) {
      return (
        <View >
          <Image style={styles.characterImage} source={require('./images/vectors/boy4_sad.png')} />
          <TextInput
            placeholder="Dialogue"
            value={dialogue}
            onChangeText={setDialogue}
            style={styles.container}
          />
        </View>
      );
    }
  };

  static narrate(characterName:string) {
    <View >
    <TextInput
      placeholder="Dialogue"
      value={dialogue}
      onChangeText={setDialogue}
      style={styles.container}
    />
  </View>
  };

  static background(backgroundName: string) {
    if (backgroundName == "bar" || backgroundName == "BAR") {
      return (
        <View >
          <Image style={styles.backgroundImage} source={require('./images/backgrounds/bar.png')} />

        </View>
      );
    } else if (backgroundName == "beach" || backgroundName == "BEACH") {
      return (
        <View >
          <Image style={styles.backgroundImage} source={require('./images/backgrounds/beach.jpg')} />

        </View>
      );
    } else if (backgroundName == "bedroom 1" || backgroundName == "BEDROOM 1") {
      return (
        <View >
          <Image style={styles.backgroundImage} source={require('./images/backgrounds/bedroom1.jpg')} />

        </View>
      );
    } else if (backgroundName == "bedroom 2" || backgroundName == "BEDROOM 2") {
      return (
        <View >
          <Image style={styles.backgroundImage} source={require('./images/backgrounds/bedroom2.jpg')} />

        </View>
      );
    } else if (backgroundName == "cafeteria" || backgroundName == "CAFETERIA") {
      return (
        <View >
          <Image style={styles.backgroundImage} source={require('./images/backgrounds/cafeteria.png')} />

        </View>
      );
    } else if (backgroundName == "diner" || backgroundName == "DINER") {
      return (
        <View >
          <Image style={styles.backgroundImage} source={require('./images/backgrounds/diner.png')} />

        </View>
      );
    } else if (backgroundName == "dining room" || backgroundName == "DINING ROOM") {
      return (
        <View >
          <Image style={styles.backgroundImage} source={require('./images/backgrounds/diningroom.jpg')} />

        </View>
      );
    } else if (backgroundName == "restaurant" || backgroundName == "RESTAURANT") {
      return (
        <View >
          <Image style={styles.backgroundImage} source={require('./images/backgrounds/restaurant.jpg')} />

        </View>
      );
    } else if (backgroundName == "home bathroom" || backgroundName == "HOME BATHROOM") {
      return (
        <View >
          <Image style={styles.backgroundImage} source={require('./images/backgrounds/homebathroom.jpg')} />

        </View>
      );
    } else if (backgroundName == "kitchen" || backgroundName == "KITCHEN") {
      return (
        <View >
          <Image style={styles.backgroundImage} source={require('./images/backgrounds/kitchen.jpg')} />

        </View>
      );
    } else if (backgroundName == "kitchen 2" || backgroundName == "KITCHEN 2") {
      return (
        <View >
          <Image style={styles.backgroundImage} source={require('./images/backgrounds/kitchen2.jpg')} />

        </View>
      );
    } else if (backgroundName == "living room 1" || backgroundName == "LIVING ROOM 1") {
      return (
        <View >
          <Image style={styles.backgroundImage} source={require('./images/backgrounds/livingroom1.jpg')} />

        </View>
      );
    } else if (backgroundName == "living room 2" || backgroundName == "LIVING ROOM 2") {
        return (
          <View >
            <Image style={styles.backgroundImage} source={require('./images/backgrounds/livingroom2.png')} />
  
          </View>
        );
    } else if (backgroundName == "mall" || backgroundName == "MALL") {
        return (
          <View >
            <Image style={styles.backgroundImage} source={require('./images/backgrounds/mall.jpg')} />
  
          </View>
        );
    } else if (backgroundName == "movie theater" || backgroundName == "MOVIE THEATER") {
        return (
          <View >
            <Image style={styles.backgroundImage} source={require('./images/backgrounds/movietheater.jpg')} />
  
          </View>
        );
    } else if (backgroundName == "park" || backgroundName == "PARK") {
      return (
        <View >
          <Image style={styles.backgroundImage} source={require('./images/backgrounds/park.jpg')} />

        </View>
      );
    } else if (backgroundName == "public bathroom" || backgroundName == "PUBLIC BATHROOM") {
      return (
        <View >
          <Image style={styles.backgroundImage} source={require('./images/backgrounds/publicbathroom.png')} />

        </View>
      );
    } else if (backgroundName == "school" || backgroundName == "SCHOOL") {
      return (
        <View >
          <Image style={styles.backgroundImage} source={require('./images/backgrounds/school.jpg')} />

        </View>
      );
    } else if (backgroundName == "street" || backgroundName == "STREET") {
      return (
        <View >
          <Image style={styles.backgroundImage} source={require('./images/backgrounds/street.jpg')} />

        </View>
      );
    } else if (backgroundName == "town hall" || backgroundName == "TOWN HALL") {
      return (
        <View >
          <Image style={styles.backgroundImage} source={require('./images/backgrounds/townhall.jpg')} />

        </View>
      );
    } else if (backgroundName == "walkway" || backgroundName == "WALKWAY") {
      return (
        <View >
          <Image style={styles.backgroundImage} source={require('./images/backgrounds/walkway.jpg')} />

        </View>
      );
    }
  };


};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingTop: 50
  },
  dataStyle: {
    paddingRight: '10px'
  },
  elementStyle: {
    border: 'solid',
    borderRadius: 10,
    position: 'relative',
    left: '10vh',
    height: '3vh',
    width: '20vh',
    marginTop: '5vh',
    marginBottom: '10vh'
  },
  characterImage: {

  },
  characterImageReversed: {

  },
  backgroundImage: {

  },
});
