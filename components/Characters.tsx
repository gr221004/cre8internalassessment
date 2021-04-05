import Story from './Story';

export default class Characters {

    public characterName: string;
    public characterVisual: number;

    constructor (characterName: string, characterVisual: string) {
        this.characterName = characterName;
        this.characterVisual = parseInt(characterVisual);
    };

    static getCharacterList(characterList: Array<{}>) {
        return characterList;
    };

    static getCharacterVisual(story: Story, characterName: string) {
        var i: number;
        for (i = 0; i < Story.storiesArray.length - 1; i++) {
            if (characterName == story.characters[i].characterName) {
                return story.characters[i].characterVisual;
            } else {}
        };
    };

    static getCharacter(story: Story, characterName: string) {
        var i: number;
        for (i = 0; i < Story.storiesArray.length - 1; i++) {
            if (characterName == story.characters[i].characterName) {
                return story.characters[i];
            } else {}
        };
    };

};