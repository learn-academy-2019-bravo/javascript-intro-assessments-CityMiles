

// 1. Write the code that returns 'B' from mantra.

var mantra = 'Be the dev'

console.log(mantra.charAt(0))


// 2. Write the code that determines if there is an 'x' in mantra.

console.log(mantra.includes('x'))


// 3. Write the code that determines if there is a 'v' in mantra.

console.log(mantra.includes('v'))


// Stretch: Write the code that returns the position of 'v' in mantra.

console.log(mantra.indexOf('v'))



// 4. Update the codingIsEasy and imBored variables above the statement to the values required to log 'I need more!'

var codingIsEasy = true
var imBored = true

if (codingIsEasy && imBored) {
    console.log('I need more!')
} else {
    console.log('Steady as she goes')
}



// 5. Update the imLost and imFrustated variables above the statement to the values required to log 'Keep coding!'

var imLost = false
var imFrustrated = false

if (imLost || imFrustrated) {
    console.log('Break time!')
} else {
    console.log('Keep coding!')
}



// 6. Recall the mantra variable from the first question. Write the code that logs each letter of mantra using a for loop.

for (let i=0; i < mantra.length; i++) {
  console.log(mantra[i])
}

// Stretch: Using a while loop ....... ??? (finish later)

// Super Stretch: Using forEach(). ....... ??? (finish later)



// 7. Write a function that takes a string like message as an argument and returns the string without vowels.

var message = 'thisisateststring'

function noVowel(string) {

  var vowelGone = string.split('')
  for(let i=0; i < string.length; i++) {
    if(string[i] != 'a' && string[i] != 'e' && string[i] != 'i' && string[i] != 'o' && string[i] != 'u') {
      console.log(string[i])
    }
  }
}
console.log(noVowel(message))

// Stretch: Update your function to throw an exception if the argument is not a string ....... ??? (finish later)

// Super Duper Stretch: Update your function to throw a TypeError if the argument is not a string ....... ??? (finish later)



// 8. Write a function that takes an array like toonimals and returns an array with only the toons that are cats.

var toonimals = [ {name: 'Itchy', animal: 'mouse'},
{name: 'Stimpy', animal: 'cat'},
{name: 'Daffy', animal: 'duck'},
{name: 'Scratchy', animal: 'cat'},
{name: 'Ren', animal: 'dog'},
{name: 'Felix', animal: 'cat'} ]

function toonFarm(array) {
  var toonCat = []
  for(let i=0; i < array.length; i++) {
    if(array[{animal: 'cat'}]) {
      console.log(toonCat.push(array[{i}]))
    }
  }
}
console.log(toonFarm(toonimals))
