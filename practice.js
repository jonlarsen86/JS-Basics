//Once you complete a problem, open up Chrome and check the answer in the console.


var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only argument.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

  //Code Here
  var isTyler = function() {
  	if (name === "Tyler") {
  		return true;
  	} else {
  		return false;
  	}
  }

//Next problem



//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


  //Code Here
var getName = function() {
	var nameGot = prompt("Enter your name.");
	return nameGot;
}
//Next Problem



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

  //Code Here
var welcome = function() {
	var name = getName();
	alert("Welcome, " + name);
}

//Next problem




//What is the difference between arguments and parameters?

  //Answer Here
//Arguments are values that are passed into a function
//Parameters are variables defined for the function 

//Next problem



//What are all the falsy values in JavaScript and how do you check if something is falsy?

  //Answer Here

//false
//0 (zero)
//"" (empty string)
//null
//undefined
//NaN (a special Number value meaning Not-a-Number!)

//to check, you could use an if statement to check and see if the value is not one of the falsy options.

//Next Problem



//Create a function called myName that returns your name

  //Code Here

 var myName = function () {
 	return "Jon";
 }

//Now save the function definition of myName into a new variable called newMyName

  //Code Here

  var newMyName = myName;

//Now alert the result of invoking newMyName

alert(newMyName());

//Next problem



//Create a function called outerFn which returns an anonymous function which returns your name.

  //Code Here

var outerFn = function () {
	return myName();
}

//Now save the result of invoking outerFn into a variable called innerFn.

  //Code Here

var innerFn = outerFn();

//Now invoke innerFn.
innerFn;