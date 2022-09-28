const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your Name? ", (answer1) => {
rl.question("What's an activity you like doing? ", (answer2) => {
rl.question("What's music you'd like to listen? ", (answer3) => {
rl.question("What's your favourite food? ", (answer4) => {
rl.question("Which sport is your absolute favourite? ", (answer5) => {
rl.question("Who's your childhood superhero? ", (answer6) => {
rl.question("What is your superpower? In a few words, tell us what you are amazing at ", (answer7) => {
console.log("Your name is: " + answer1 + "\n" +  
  "An activity you like doing is " + answer2 + "\n" +
  "You listen to " + answer3 + " while " + answer2 + "\n" +
  "Your favourite thing to eat is " + answer4 + "\n" +
  "Your absolute favourite sport is " + answer5 + "\n" +
  "Your childhood superhero is " + answer6 + "\n" +
  "Your superpower is " + answer7);
  rl.close();
});
});
});
});
});
});
});
// What's your name? Nicknames are also acceptable :)
// What's an activity you like doing?
// What do you listen to while doing that?
// Which meal is your favourite (eg: dinner, brunch, etc.)
// What's your favourite thing to eat for that meal?
// Which sport is your absolute favourite?
// What is your superpower? In a few words, tell us what you are amazing at */