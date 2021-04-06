import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import Story from './Story';
import Characters from './Characters';
import Actions from './Actions';


const Parse = () => {

  const [characterName] = React.useState('');
  const [storyChosen] = React.useState('');
  const [backgroundName] = React.useState('');
  const [dialogue, setDialogue] = React.useState('');
  var character = Characters.getCharacter(Story.storiesArray[parseInt(storyChosen)], characterName);
  var characterVisual = Characters.getCharacterVisual(Story.storiesArray[parseInt(storyChosen)], characterName);
  var story = Story.storiesArray[parseInt(storyChosen)];
  var storyName = Story.getStoryName(Story.storiesArray, parseInt(storyChosen));
  var storyId = Story.storiesArray[parseInt(storyChosen)].storyId;
  var listOfCharacters = Story.getCharacters(Story.storiesArray, Story.getStoryName(Story.storiesArray, Story.storiesArray[parseInt(storyChosen)].storyId));
  var storyChoice = React.useState('').toString();

  Actions.neutral(characterName);
  Actions.anger(characterName);
  Actions.shock(characterName);
  Actions.smile(characterName);
  Actions.frown(characterName);
  Actions.sad(characterName);
  Actions.background(backgroundName);
  Actions.narrate("narrator");

  

  return (
    <View >

    </View>
  );

}

export default Parse;


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
});