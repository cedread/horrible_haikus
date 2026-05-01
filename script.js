/*I'm coming back to this to see how an object might make things easier

const obj = {
    lineOne: ['Greetings Lord Fuckface,', 'Your face can scare ghosts,', 'I think you should know,', 'I fucking hate you,', 'You time wasting plank,'],
    lineTwo: ['You purple headed cocksplat,', 'Even flys think you smell bad,', 'You\'re why we have birth control,', 'Please cease and fucking desist,', 'You\'ve the brains of a yoghurt,'],
    lineThree: ['You make Trump look sane.', 'You prove Darwin wrong.', 'Go step on Legos.', 'Why even bother?', '']
}
*/


const lineOne = ['Greetings Lord Fuckface,', 'Your face can scare ghosts,', 'I think you should know,', 'I fucking hate you,', 'You time wasting plank, ', 'You\'re a fucking cunt, ', 'You sucked a pig\'s dick, ', 'You talk such bollocks, ', 'Sword fight with your mom, ', 'You are a wrong\'un, ', 'You act like a cunt, ', 'Fucking asshole cunt, ', 'Man U supporter, ', 'Your mother is hot, ', 'Perfume makes no change, ', 'You are your mum\'s slut, ', 'You are your dad\'s slut, ', 'Your father sits down to piss, ', 'You were adopted, ', 'Cum is your breakfast, ', 'You go Dutch with whores, ', 'Your style is bollocks, ', 'Space doesn\'t like you, ', 'Whores are your parents, ', 'Your parents gave up, ', 'Backside\'s back, alright, ', 'Your mom died of aids, ', 'Aids riddled father, ', 'I\'m blind seeing you, ', 'You can\'t grow a beard, ', 'You can\'t sit with us, ', 'Mate, are you lost? ', 'You never get laid, ', 'Your dick is too small, ', 'What\'s wrong with your face? ', 'Not enough neurons, ', 'Neurons are lacking, ', 'Bereft of neurons, ', 'Lacking synapses, ', 'Asscracks look like you, ', 'Your face makes god cry, ', 'Your mum is child free, ', 'She\'s not your real mom, ', 'He\'s not your real dad, ', 'Your mother hates you, ', 'My dog looks like you, ', 'Jesus fucking wept'];
const lineTwo = ['You purple headed cocksplat,', 'Even flys think you smell bad,', 'You\'re why we have birth control,', 'Please cease and fucking desist,', 'You\'ve the brains of a yoghurt,', 'I can\'t wait until you die, ' , 'Eat my diarrhoea bitch, ', 'Your achievements are nothing, ', 'You will take it and like it, ', 'You will never know true love, ', 'Your sister fucks your mother, ', 'Your paediatrician cried, ', 'Burns would be an improvement, ', 'Send my regards to your mum, ', 'Hit me baby one more time, ', 'All your ideas are shit, ', 'I like incels more than you, ', 'I hope you die a virgin, ', 'This is how we should write songs, ', 'You are incest production, ', 'You confuse me with your chi, ', 'I don\'t know what\'s wrong with you, ', 'Why don\'t you go fuck yourself, ', 'You are product of incest, ', 'Don\'t get ahead of yourself, ', 'You lack opposable thumbs, ', 'Your intelligence is fucked, ', 'Your face offends my sore eyes, ', 'You are a neanderthal, ', 'Shit on your hand, slap your face, ', 'Enjoy my cum, your breakfast, ', 'And my shit is your dinner, ', 'You were a poor decision, ', 'You turn wine into urine, ', 'Your mum says you look fifty, ', 'Fuck you and your family, '];
const lineThree = ['You make Trump look sane.', 'You prove Darwin wrong.', 'Go step on Legos.', 'Why even bother?', 'No one can stand you.', 'We never told you.', 'Get aids from your mum.', 'Get aids from your dad.', 'You make my eyes hurt.', 'Even Buddha cried.', 'Save your jokes for god.', 'Are you still talking?', 'Go forth and fuck off.', 'Want some pubic lice?', 'Your best is your worst.', 'I wanked on your mum.', 'You wanked on your mum.', 'Everyone hates you.', 'You sorry fucker.', 'Get into the sea.', 'Go drown in the sea.', 'Garbage smells better.', 'You space wasting fuck.', 'You make babies cry.', 'I\'m depressed by you.', 'I want you buried.', 'Go play in traffic.', 'Life wants you buried.', 'You\'re why girls write songs.', 'Jesus can\'t save you.', 'Why are you still here?', 'You are a disease.', 'What\'s the point of you?', 'Eat my Dutch oven.', 'You suck all the dicks.', 'Your life don\'t matter.', 'You should get tested.', 'You can park my bike.', 'Just eat shit and die.', 'Sit on it and spin.', 'Just go and get fucked.', 'Die and shit yourself.', 'Sit on this and spin.', 'You will not be missed.', 'Your dog won\'t miss you.', 'You have anal crabs.', 'You can\'t cook for shit.', 'Mr Rogers hates you.'];
const howToSay = ['Like you a talking to a dying relative, whose money you want', 'Like you\'re a depressed pirate', 'Like you\'re a remarkably cheerful debt collector for the mafia', 'Like you\'re explaining something to a five-year-old', 'Like you\'re trying to explain quantum physics to a goldfish', 'Like you\'re describing the taste of chocolate to someone who\'s never tasted it', 'Like you are talking to your lover after extremely mediocre sex', 'Like you are trying to persuade a judge to give you a lighter sentence', 'Like you\'re explaining the rules of a game to someone who\'s hard of hearing', 'Like you are comforting a grieving widow', 'Like you are explaining the meaning of life to a confused student'];

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

function howToSayGenerate() {
    const returnHowToSay = () => {
        let num = Math.floor(Math.random() * howToSay.length);
        return howToSay[num];
    }
    document.getElementById("howToSay").innerHTML = returnHowToSay()
};


