import Characters from './Characters';
import { tutorialStory } from '../screens/Read';

export default class Story {

    private static storyCount = 0;
    public storyId: number;
    public storyName: string;
    public characters: Array<Characters>;
    public script: string;
    static storiesArray: Array<Story> = [tutorialStory];
    public key: string;

    constructor (storyName: string, characters: Array<Characters>, script: string) {
        this.storyName = storyName;
        this.storyId = Story.storyCount++;
        this.script = script;
        this.characters = characters;
        this.key = this.storyId.toString();
    };

    static getStoryName(storiesArray: Array<Story>, storyNumber: number) {
        var i: number;
        var storyId = storyNumber - 1;
        for (i = 0; i < storiesArray.length - 1; i++) {
            if (storyId == storiesArray[i].storyId) {
                return storiesArray[i].storyName;
            } else {}
        };
    }

    static getStoryId(storiesArray: Array<Story>, storyName: string) {
        var i: number;
        for (i = 0; i < storiesArray.length - 1; i++) {
            if (storyName == storiesArray[i].storyName) {
                return storiesArray[i].storyId;
            } else {}
        };
    };

    static getCharacters(storiesArray: Array<Story>, storyName: string) {
        var i: number;
        for (i = 0; i < storiesArray.length - 1; i++) {
            if (storyName == storiesArray[i].storyName) {
                return storiesArray[i].characters;
            } else {}
        };
    };


};

