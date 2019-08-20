//program 1


// var count = 0;
// while(count <1000)
// {
//     count ++;
//     var randomNumber = Math.floor(Math.random() * 6);
//     document.write("<h4> "+randomNumber+" </h4>");
// }


//program2

//1 Generate a random number from 1 to 10000. This number the number which computer
//  need to guess.
//  2 Enter a while loop - inside this loop the computer will "guess" a random
// number . If the number the computer guesses matches the number generated at the
// beginning  of the program , the loop ends , if not the loop continues
// until the correct number is guessed. 

// var randomNumber = Math.floor(Math.random() *1000) + 1;
// console.log(randomNumber);
// var count = 0;
 
// while(true)
// {
//     count ++;
//     var guess = Math.floor(Math.random() *1000) + 1;
//     if(randomNumber === guess)
//     {
//     document.write("your have guessed correct no is" +randomNumber+" ");
//      break;
//     }
// }
// document.write("You have guessed correct guess  attempts is"+count+"");



// program 3

// Check whether use entered number and random number get same and check whether the
// GuessCount

// var randomNumber = guessRandom(10);
// var guess ;
// var guessCount = 0 ;
// var correctGuess = false ;

// function guessRandom(upper)
// {
//   return Math.floor(Math.random()* upper);

// }

// do {
//   guess = parseInt(prompt("Please Enter any number between 1 to 10"));
//   guessCount ++;
//   if(guess === randomNumber)
//   {
//     correctGuess = true;
//   }
// } while(!correctGuess)

//  document.write(" your guess is right "+ randomNumber +" !!!");
//  document.write("your guess attempts is "+guessCount+" !!!");


//Program 4

// For loops

// For loops are used to execute a loop over a predefined number of times .
// For loops are also the common way to deal with array data.
// intialzation code run only once

//var i = 0 (this code runs only once), the condition is checked ,then the
// increment will happen , if the condition is failed the loop will exits

// html ="";
// // //
//  for(var i = 0 ; i < 10 ; i++ )
// {
//    html += " " + i + " ";
//  }
// document.write(html);



//program 5

// Using boolean as flag and and limiting guess to only 10 times .


// var guessCount = 0 ;
// var guess;
// var correctGuess = false;
// var randomNumber = guessRandomNumber(6) ;
// function guessRandomNumber(upper){
//   return Math.floor(Math.random()*upper) + 1
// }

// while(guessCount < 10){
//   guessCount ++;
//   guess = parseInt(prompt("Please Enter any number between one to six"));
//   if(guess === randomNumber )
//   {
//     correctGuess = true;
//     document.write(" your guess is correct"+guess)
//     break;

//   }
// }


// program 7 (a)


// Refactoring the code to make it more efficient



// var html = " ";
// var red = Math.floor(Math.random()*256);
// var blue = Math.floor(Math.random()*256);
// var green = Math.floor(Math.random()*256);
// // rgb(255, 0, 0)
// rgbColor = 'rgb('+ red +','+ blue +','+ green +')';
// console.log(rgbColor);
// html += '<h4 style = "background-color:'+rgbColor+'">RESHU</h4>';
// document.write(html);


// for(var i = 0;i < 10 ;i++){
//  var html = " ";
// var red = Math.floor(Math.random()*256);
// var blue = Math.floor(Math.random()*256);
// var green = Math.floor(Math.random()*256);
//  // rgb(255, 0, 0)
//   rgbColor = 'rgb('+ red +','+ blue +','+ green +')';
//   console.log(rgbColor);
//   html += '<h4 style = "background-color:'+rgbColor+'">RESHU</h4>';
//  document.write(html);




}