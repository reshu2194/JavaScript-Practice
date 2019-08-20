//program 1

// var randomNumber = Math.floor(Math.random()*6 + 1);
// //console.log(randomNumber);
// var guess = parseInt(prompt("I am thinking of number between 1 to 6. and what is that ?"));
// if(randomNumber === guess ){
//     document.write("<p> You guessed the number right!.</p>");
// } else {
//     document.write('<p>Sorry. The  number was '+ randomNumber + '</p>')
// }


// Program 2

// Boolean values

// if(false) {
//     document.write('<p>The condition is true </p>');
// } else {
//   document.write('<p>The condition is false </p>');
// }

// if(true) {
//     document.write('<p>The condition is true </p>');
// } else {
//   document.write('<p>The condition is false </p>');
// }




//program 3


// var randomNumber = Math.floor(Math.random()*6 + 1);
// var guess = parseInt(prompt("enter your guess no is 1 to 6"));
// console.log(randomNumber);
// var correctGuess = false;
// if(randomNumber ===  guess)
// {
//   correctGuess = true ;
// }
// if(correctGuess)
// {
//     document.write(" congo ... your guess is right");
// } else {
//     document.write("sorry your guess is incorrect");
// }





// program 4
// Improving the random number guess game

/*
  The Random Number Guessing Game Generates a number between 1 to 6
  and gives a player who attemps to guess the number
*/


// var randomNumber = Math.floor(Math.random()*6 + 1);
// var guess = parseInt(prompt("enter your guess no 1 to 6"));
// console.log( randomNumber);
// var correctGuess = false;
// if(randomNumber ===  guess)
// {
//   correctGuess = true ;
// }
// else if( guess < randomNumber )
// {
//   var guessMore = parseInt(prompt("sorry your guess is greter than random number ..plz try again"));
//     if(randomNumber ===  guessMore)
//     {
//       correctGuess = true ;
//     }
//   }
// else if(guess > randomNumber)
// {
//   var guessLess = parseInt(prompt("sorry ..your guess is less than random number..plz try agin"));
//   if(randomNumber === guessLess)
//   {
//       correctGuess = true ;
//   }
// }
// if(correctGuess)
// {

//     document.write(" congo ...your guess is right..");
// } 
// else
//  {
//     document.write("sorry.. your guess no is  wrong..");
// }



// Program 5
//quiz begins , no answers correct

// var correct = 0;

// var ans1 = prompt("Name a programming language that's also a gem?");
// if(ans1.toUpperCase() === "RUBY")
// {
// 	correct += 1;
// }

// var ans2 = prompt("Name a programming language that's also the name of snake?");
//  if(ans2.toUpperCase() === "PYTHON")
// {
// 	correct += 1;
	
// }

// var ans3 = prompt("What are the languages you do to style the web pages");
// if(ans3.toUpperCase() === "CSS" )
// {
// 	correct += 1;
	
// }
// var ans4 = prompt("What are the languages you to structure the web pages?");
// if(ans4.toUpperCase() === "HTML" )
// {
// 	correct += 1;
	
// }
// var ans5 = prompt("What are the languages you do to increase the interactivity of the webpages ");
// if(ans5.toUpperCase() === "JAVASCRIPT" )
// {
// 	correct += 1;
    
// }

// if(correct == 5)
// {
// 	document.write(" congo..!! you got Gold Medal..");
// }else if(correct >=3 )
// {
// 	document.write(" congo...!! you got Silver Medal..");
// }else if(correct >= 1)
// {
// 	document.write(" congo..!!you got Brownse Medal..");
// }


//program 6

// Function Declaration

//function alertRandoma()
// {
//     var randomNumber = Math.floor(Math.random() * 6) + 1;
//     alert(randomNumber);
//     console.log(randomNumber);
//   } 
  
//   alertRandoma();
//   alertRandoma();
//   alertRandoma();

//program 7
// // function expression

// var alertRandom = function()
// {
//     var randomNumber = Math.floor(Math.random() * 6) + 1;
//      alert(randomNumber);
//      //console.log(randomNumber);
//   }
  
//   alertRandom();
//   alertRandom();
//   alertRandom();
  


//program 8
// Returning a random number .

//  function RandomNumber()
//  {
//   var randomNumber = Math.floor(Math.random() * 6) + 1;
//   return randomNumber;
// }

// console.log(RandomNumber());
// alert(RandomNumber());
// //document.write(RandomNumber());
// var number = RandomNumber();
// console.log(number);


//program 9

//function  with passing parameter
 
// function randomNumber(upper)
// {
//     return Math.floor(Math.random() * upper) +1;
// }

// alert(randomNumber(9));
// alert(randomNumber(99));
// alert(randomNumber(999));

