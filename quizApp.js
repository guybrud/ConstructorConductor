//We're going to create the JS for a basic quiz application. 

//Let's think about the nature of this quiz app first. We're going to be creating lots of user objects, and we're
//also going to be creating lots of Question objects. Those would make two perfectly good constructors. 

//Create a User constructor that accepts name, email, password, and totalScore parameters and set them appropriatly

  //code here
  var User = function(name, email, password, totalScore) {
  	this.name = name;
  	this.email = email;
  	this.password = password;
  	this.totalScore = totalScore;
  };


//Create a Question constructor that accepts title, answersArray, rightAnswer, and difficulty parameters

  //code here

  var Question = function(title, answersArray, rightAnswer, difficulty) {
  	this.title = title;
  	this.answersArray = answersArray;
  	this.rightAnswer = rightAnswer;
  	this.difficulty = difficulty;
  }


//Create a users Array which is going to hold all of our users.

  //code here

  var userArr = [];


//Let's say three people signed up for our service, create 3 instances of User and add each to the users Array

  //code here

  var use1 = new User("ryan", "strange@email.com", "thingidies", "100");
var use2 = new User("donnie", "fake@email.com", "liarliar", "10");
var use3 = new User("lenny", "notreal@fake.com", "fakefake", "80");

userArr.push(use1, use2, use3);

//Create a questions Array which is going to hold all of our questions

var quiz = [];

  //code here


  var quest1 = new Question('T/F: Inheritance is achieved in JavaScript through Prototypes?', "true/false", "true", "med");
var quest2 = new Question('T/F: JavaScript is just a scripting version of Java', "true/false", "false", "easy");
var quest3 = new Question("T/F: In Javascript, == doesn't check 'type' but just the value - where === checks type and value", "true/false", "true", "hard");
//Now, let's say we wanted to create a quiz about JavaScript. Create three instances of Question which contain the following data
//title: 'T/F: Inheritance is achieved in JavaScript through Prototypes?'
//title: 'T/F: JavaScript is just a scripting version of Java'
//title: "T/F: In Javascript, == doesn't check 'type' but just the value - where === checks type and value"
//Fill in the rest of the required data as you see appropriate.

  //code here


//Now push all of your instances of Question into the questions Array
quiz.push(quest1, quest2, quest3);
  //code here

console.log('My users Array and my questions arrray are ...');
//Now loop console.log your users array and your questions array and verify that they're both holding the right data.
var loop = function(arr1, arr2) {
	for (var i = 0; i < arr1.length; i++) {
		for (var key in arr1[i]) {
			console.log(arr1[i][key])
		}
		for (var key in arr2[i]) {
			console.log(arr2[i][key])
		}
	}
  //code here
}

