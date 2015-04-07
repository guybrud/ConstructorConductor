  //Your 3 Users will be the following. 
    0) Tyler, tylermcginnis33@gmail.com, 'iLoveJS'
    1) Cahlan, cahlan@devmounta.in, 'iLoveHashtags'
    2) Lenny, lenny@theLenster.com, 'iLoveLentilSoup'


var User = function(name, email, pw){
  this.name = name;
  this.email = email;
  this.pw = pw;
}

//Create an Array called 'users' that will store all our instances of User.

  //code here
var User = function (name, email, pw) {
    this.name = name;
    this.email = email;
    this.pw = pw;
};


var tyler = new User("Tyler", "tylermcginnis33@gmail.com", 'iLoveJS');
var cahlan = new User("Cahlan", "cahlan@devmounta.in", 'iLoveHashtags');
var lenny = new User("Lenny", "lenny@theLenster.com", 'iLoveLentilSoup');

var users = [tyler, cahlan, lenny];


//Now create and push into your users array 3 seperate instances of User using the data from above in that exact order

  //code here
console.log('Tyler\'s information is ' + tyler.name, tyler.email, tyler.pw);
//Console.log all of Tylers information

  //code here

console.log('Lenny\'s information is ' + users[2].name, users[2].email, users[2].pw);
//Now console.log all of Lennys information

  //code here
var ryan = new User("Ryan", "guybrud@gmail.com", "guybrud")

//Now create another instance of User using your own information and then add that to your users array.
users.push(ryan);

  //code here

console.log('All my users names are ' this.name);
//Now loop through your users Array and console.log every users name. 
var looper = function(arr) {
  for (var i = 0; i < arr.length; i++) {
    alert(arr[i].name);
  }
};
looper(users);

  //code here