'use strict';

/*var answer1 = prompt('Is Michael a student in programming at Code Fellows?').toLowerCase();
// answer1 = answer1.toLowerCase();
if (answer1 === 'yes' || answer1 === 'y') {
  alert('That\'s correct!');
  console.log('That\'s correct!');
}
else {
  alert('Sorry that\'s incorrect.');
  console.log('Sorry that\'s incorrect.');
}

var answer2 = prompt('Does Michael practice writing code on a Macbook Pro?');
answer2 = answer2.toLowerCase();
if (answer2 === 'yes' || answer2 === 'y') {
  alert('That\'s correct!');
  console.log('That\'s correct!');
}
else {
  alert('Sorry that\'s incorrect.');
  console.log('Sorry that\'s incorrect.');
}

var answer3 = prompt('Currently, can Michael build a complex website?');
answer3 = answer3.toLowerCase();
if (answer3 === 'no' || answer3 === 'n') {
  alert('That\'s correct!');
  console.log('That\'s correct!');
}
else {
  alert('Sorry that\'s incorrect.');
  console.log('Sorry that\'s incorrect.');
}

var answer4 = prompt('Has Michael had any prior experience writing code?');
answer4 = answer4.toLowerCase();
if (answer4 === 'no' || answer4 === 'n') {
  alert('That\'s correct!');
  console.log('That\'s correct!');
}
else {
  alert('Sorry that\'s incorrect.');
  console.log('Sorry that\'s incorrect.');
}

var answer5 = prompt('Will Michael pass Code Fellows 201 course? (Yes, No, or Maybe?)');
answer5 = answer5.toLowerCase();
if (answer5 === 'maybe' || answer5 === 'm') {
  alert('That\'s correct!');
  console.log('That\'s correct!');
}
else {
  alert('Sorry that\'s incorrect.');
  console.log('Sorry that\'s incorrect.');
}

/*Add a sixth question to my guessing game that takes numeric input by prompting a user to guess a number (for instance, "What is my favorite number?" or "How many Pokémon did I catch yesterday?"), and indicates to the user whether the guess is 'too high' or 'too low', and gives the user exactly four opportunities to get the correct answer, so that my fancy programming skills are showcased.*/
for (var i = 0; i <= 3; i++) {
    var guessNum = parseInt(prompt('What is my favorite number?'));
    if (guessNum === 7) {
      alert('That\'s correct!');
      console.log('That\'s correct!');
      break;
  } else if (guessNum < 7) {
      alert('Sorry that\'s too low. Try Again.');
      console.log('Sorry that\'s too low.');
  } else if (guessNum > 7) {
      alert('Sorry that\'s too high. Try Again.');
      console.log('Sorry that\'s too high. Try Again.');
  }
}
/*add a seventh question to my guessing game that has multiple possible correct answers that are stored in an array. For instance, "Can you guess a state that I have lived in besides Washington?", so that even more of my programming skills are showcased. For now, I will structure this question so that the user has six tries to get a single correct answer, and upon using up those tries OR getting a correct answer, displays a message to the user indicating all of the possible correct answers.*/
/*for (var i = 0; i <= 5; i++) {
  var (guessState) = prompt('Can you guess a state that I have lived in besides Washington?');
  if (guessState) === ['Washington', 'Illinois', 'New York', 'Virginia']






/*
var username = prompt('What is your name?');
alert('Hello, ' + username + '.');
console.log('The user\'s name is ' + username);

var usertalent = prompt('What is your talent?');
alert('You must be gifted at ' + usertalent + '.');
console.log('The user\'s talent is ' + usertalent);

var userfood = prompt('What is your favorite food?');
alert('I enjoy eating ' + userfood + ' too.');
console.log('The user\'s favorite food is ' + userfood);

var usersport = prompt('What is your favorite sports event to watch?');
alert('Being able to play ' + usersport + ' sounds difficult but easier to watch.');
console.log('The user\'s favorite sport is ' + usersport);

console.log('Wow, ' + username + ' you know how to ' + usertalent + ' and you probably like to eat ' + userfood + ' while watching ' + usersport + '.');
document.write('Wow, ' + username + ' you must enjoy ' + usertalent + ' and you probably like to eat ' + userfood + ' while watching ' + usersport + '.');*/
