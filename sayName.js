//Create a Person constructor that accepts name and age as parameters and sets those properties accordingly in the Constructor.

  //code here

  var Person = function(name, age) {
  	this.name = name;
  	this.age = age;
  }


//Now create three instances of Person with data you make up

  //code here

  var peep1 = new Person("ryan", 22);
 var peep2 = new Person("donnie", 77);
 var peep3 = new Person("virgil", 26);
//Now add a sayName method on your Person class that will alert the name of whatever Person instance called it.

Person.prototype.sayName = function() {
	alert("Hello " + this.name)
};

  //code here


peep1.sayName();