// // Working with number

//
// // program 1

// var numberOfSecondsInMinute = 60;
//var numberOfMinutesInHour = 60 ;
//var numberOfHoursInDays = 24;
//var numberOfDaysInWeek = 7;
//var numberOfDaysInYear = 365;
//var numberofDaysInMonth = 31;
//var numberOfWeeksInYears = 52;
//var secondsPerDay = numberOfSecondsInMinute * numberOfMinutesInHour * numberOfHoursInDays;
//document.write('There are '+secondsPerDay+' seconds in a day');


// // Program 2
// // prompt() returns us the string varaible.
//
// var name = prompt("Please enter your name");//user  define string 
// var city = prompt ("Please Enter your city");
// var intro = name + city;                       // store the name and city to one new varible
// document.write(" i am" + intro +  " "); 


// // program 3
// // Using parseInt() to convert string to integer and correcting the program

// var bdate = prompt("Please Enter your birthe date  ? ");// user define string  . while prompt  number enter  return string 
// var Year= prompt ("Please Enter your birth year");
// var age = parseInt(bdate) + parseInt(Year); //prompt return string bt parseInt convert that int value to string number 
// document.write("your  bdate and year sum is  "+ age + "  ");


// // Program 4
//
// // The Mad libs challenge presented
//
// // Let the player know how many questios are remained to be answer.
//
// var questions = 3;    // declre var  question to store d num of que ..
// var questiosLeft = '[' + questions + 'questionsLeft]';
// var name = prompt("Please Enter  your name"+ questiosLeft); // user define value 1.
// questions --; // declare decrement to que ..meanses define d remaining que..
// questiosLeft = '[' + questions + 'questionsLeft]';
// var city = prompt("Please Enter the city"+ questiosLeft);
// questions --;
// questiosLeft = '[' + questions + 'questionsLeft]';
// var age  = prompt("Please Enter the age"+ questiosLeft);
// var sentence = "<h2> i am "+name +" ..basicly i am ";  
// sentence += " from  "+city+ " .i am staying with family ..my age is  ";
// sentence += age;
// document.write(sentence);





// // Program 5
// //Rolling the dice

// var x = Math.floor(Math.random() * 6) + 1; // random no 
//  console.log("you have rolled the number " + x);


// //Program 6
//
// //The random number challenge ---
//
//
// //Generate a random number till the value input  by user.

// var userInput = parseInt(prompt("please Enter a value ?"));
// var x = Math.floor(Math.random()*userInput) + 1;
// console.log(x);

// alert("you have rolled the number " + x);

//
//


// // program 7
// //Generate a random number till between two values generate by user.

// var lower = parseInt(prompt("please Enter a starting value?"));
// var upper= parseInt(prompt("please Enter a ending value?"));
// var randomNumber = Math.floor(Math.random() * (upper-lower+1))+lower;
// alert("you have rolled the number " + randomNumber);
//

// //program 8

// Make one program with if statement , one with else statement and
// and came the case of uppercase.

//   var answer = prompt('What  is your name?');
//     if(answer.toUpperCase() === 'RESHU'){
//         document.write(" congo..ur guess is right ");
//     } 
//     else 
//     {
//        document.write(" Sorry , that's wrong .";
//     }


 //program 9

  // Every number comes before alphabets , hence 90 < b will be true .

//   if("90" < "b"){
//     console.log("true");
//   }

//   if("3" == 3){
//     console.log("true");
//   }

//   if("3" === 3){
//     console.log("true");
//   }
//   else {
//     console.log(false)
//   }

//   if("" == 0){
//     console.log(true);
//   }

//   if("" === 0){
//     console.log(true);
//   }

//   else {
//     console.log(false);
//   }


// program 10

// //console.log(a);
// console.log('apple' < 'bear')
// console.log(2 > 4)
// console.log(100 >= 100)
// console.log(3 < 2);
// console.log(-12 < 0)
// console.log('apple' < '12');
// console.log(3 === '3');
// console.log(3 == 3);
// console.log('' == 0 ); // true
// console.log(''=== 0); // false
// console.log('10'!== 10);//true
//console.log(-159 !== -159)


