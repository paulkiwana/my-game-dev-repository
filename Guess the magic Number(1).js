const readline = require('readline');

const magicNum  = 537;

const tempRanges = [
    {name: "red hot", range: Array.from({length: 37}, (_, index) => index + 500)},
    {name: " hot", range: Array.from({length: 50}, (_, index) => index + 450)},
    {name: " getting warmer", range: Array.from({length: 50}, (_, index) => index + 400)},
    {name: "warm", range: Array.from({length: 100}, (_, index) => index + 300)},
    {name: "getting colder", range: Array.from({length: 150}, (_, index) => index + 100)},
    {name: "cold", range: Array.from({length: 50}, (_, index) => index + 250)},
    {name: "freezing", range: Array.from({length: 100}, (_, index) => index + 0)},
    {name:  "out of range", range: Array.from({length: 463}, (_, index) => index +538)}
];

const rl = readline.createInterface({
    input : process.stdin,
output: process.stdout
});
const askForGuess = () => {
rl.question("Guess the magic number: ",(input) => {
    const guess = parseInt(input);



tempRanges.forEach(({ name, range }) => {
if(range.includes(guess)){
    console.log(`You are ${name}`);
    askForGuess()
}

});

 if(guess === magicNum){
    console.log(`congratulations ${magicNum} is the magic number`);
    rl.close();
} 

});
}

askForGuess()

/*const readline = require('readline');

const magicNum  = 537;


    const redHot = Array.from({length: 37}, (_, index) => index + 500)
    const hot =   Array.from({length: 50}, (_, index) => index + 450)
    const warmer =   Array.from({length: 50}, (_, index) => index + 400)
    const warm  = Array.from({length: 100}, (_, index) => index + 300)
    const colder = Array.from({length: 150}, (_, index) => index + 100)
    const cold = Array.from({length: 50}, (_, index) => index + 250)
    const freezing = Array.from({length: 100}, (_, index) => index + 0)
const outOfRange = Array.from({length: 463},(_, index) => index + 538)

const rl = readline.createInterface({
    input : process.stdin,
output: process.stdout
});
const askForGuess = () => {
rl.question("Guess the magic number: ",(input) => {
    const guess = parseInt(input);
    
if (hot.includes(guess)){
    console.log("you are hot")
    askForGuess()
}
else if (warmer.includes(guess)){
    console.log("you are getting warmer")
    askForGuess()
}
else if(warm.includes(guess)){
    console.log("you are warm")
    askForGuess()
}
else if(outOfRange.includes(guess)){
    console.log("your guess is out of range")
    askForGuess()
}
else if(cold.includes(guess)){
    console.log("you are cold")
    askForGuess()
}
else if(redHot.includes(guess)){
    console.log("you are red hot")
    askForGuess()
}
else if(colder.includes(guess)){
    console.log("you are getting colder")
    askForGuess()
}
else if(freezing.includes(guess)){
    console.log("you are freezing")
    askForGuess()
} else if (guess === magicNum){
    console.log(`Congratulations ${magicNum} is the magic number`)
    rl.close()
}
});

}

askForGuess()*/