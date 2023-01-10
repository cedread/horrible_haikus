/*const obj = {
    lineOne: ['Greetings Lord Fuckface,', 'Your face can scare ghosts,', 'I think you should know,', 'I fucking hate you,', 'You time wasting plank,'],
    lineTwo: ['You purple headed cocksplat,', 'Even flys think you smell bad,', 'You\'re why we have birth control,', 'Please cease and fucking desist,', 'You\'ve the brains of a yoghurt,'],
    lineThree: ['You make Trump look sane.', 'You prove Darwin wrong.', 'Go step on Legos.', 'Why even bother?', '']
}*/
const lineOne = ['Greetings Lord Fuckface,', 'Your face can scare ghosts,', 'I think you should know,', 'I fucking hate you,', 'You time wasting plank,'];
const lineTwo = ['You purple headed cocksplat,', 'Even flys think you smell bad,', 'You\'re why we have birth control,', 'Please cease and fucking desist,', 'You\'ve the brains of a yoghurt,'];
const lineThree = ['You make Trump look sane.', 'You prove Darwin wrong.', 'Go step on Legos.', 'Why even bother?', 'No one can stand you.'];

function haikuGenerate() {
    const returnLineOne = () => {
        let num = Math.floor(Math.random() * lineOne.length);
        return lineOne[num];
    };
    const returnLineTwo = () => {
        let num = Math.floor(Math.random() * lineTwo.length);
        return lineTwo[num];
    };
    const returnLineThree = () => {
        let num = Math.floor(Math.random() * lineThree.length);
        return lineThree[num];
    };
    document.getElementById("lineOne").innerHTML = returnLineOne();
    document.getElementById("lineTwo").innerHTML = returnLineTwo();
    document.getElementById("lineThree").innerHTML = returnLineThree();
    
};

/*haikuGenerate();*/
