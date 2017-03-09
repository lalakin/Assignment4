//STEP1
//var ANIMAL = ANIMAL || {};
//ANIMAL.Cat = function (){};
//ANIMAL.Dog = function (){};

//STEP2
//var Cat = {
//	color: "white";
//	age: 3;
//};
//function Dog() {
//	this.color = "brown";
//	this.age: 5;
//};

//STEP3
//var myDog = new Dog();

//STEP4
//function Animal() {
//	this.info = "The Animal has been created";
//};
//var myAnimal = new Animal();
//console.log(myAnimal.info);

//STEP5
//function Animal(fox) {
//	this.fox = fox;
//	console.log(this.fox);
//}
//var myAnimal = new Animal("red");

//STEP6
//function Animal (type, breed, color, height, length) {
//	this.type = type;
//	this.breed = breed; 
//	this.color = color;
//	this.height = height;
//	this.length = length;
//	console.log(this.type, this.breed, this.color, this.height, this.length);
//}
//var myAnimal = new Animal("dog", "shepard", "brown", "two feet", "30'");

//STEP7
//function Animal (type, breed, color, height, length) {
//	this.type = type;
//	this.breed = breed; 
//	this.color = color;
//	this.height = height;
//	this.length = length;
//	}
//var myAnimal = new Animal("dog", "shepard", "brown", "two feet", "30'");
//for (var a in myAnimal) {
//	console.log(myAnimal[a]);
//}

//STEP8
//function Animal (type, breed, color, height, length) {
//	this.type = type;
//	this.breed = breed; 
//	this.color = color;
//	this.height = height;
//	this.length = length;
//	this.speak = function() {
//		if (this.type === "dog") {
//		console.log("The " + this.color + " dog is barking!");
//			} else {
//				console.log("The" + this.color + "cat is meowing!");
//			}
//		}
//}
//var myAnimal = new Animal("dog", "shepard", "brown", "two feet", "30'");
//myAnimal.speak();

//STEP9
//function Animal (type, breed, color, height, length) {
//	var _type = type;
//	var _breed = breed; 
//	var _color = color;
//	var _height = height;
//	var _length = length;
//	var checkType = function() {
//		if (_type === "dog") {
//		return _type;
//			} else {
//				return "cat";
//			}
//	}
//	this.speak = function() {
//		console.log("The " + checkType() + " has made a noise!");
//		}
//}
//var myAnimal = new Animal("dog", "shepard", "brown", "two feet", "30'");
//myAnimal.speak();

//STEP10_A (shows words)
//String.prototype.findWords = function() {
//	var findWords = "";
//	for (var i = 0; i < this.length; i++) {
//		findWords = this.match(/paragraph/g);
//		
//	} 
//	return findWords;
//}
//var text = "Create your own String method called findWords() that inherits from the native String Object. This method should find all instances of a specific word within a provided paragraph of text. It should then alert out to the user the number of times that word was found in the paragraph."
//alert(text.findWords());

//STEP10_B (shows number of times word was found)
//String.prototype.findWords = function() {
//	var words = "";
//	var count = (this.match(/paragraph/g)).length;
//	return count;
//	}
//var text = "Create your own String method called findWords() that inherits from the native String Object. This method should find all instances of a specific word within a provided paragraph of text. It should then alert out to the user the number of times that word was found in the paragraph."
//alert(text.findWords());

//The Recipe Card 
//var Recipe = function(title, servings, ingredients) {
//	this.title = title;
//	this.servings = servings;
//	this.ingredients = ingredients;
//	this.showRecipe = function () {
//			console.log(this.title); 
//			console.log("Serves: " + this.servings); console.log("Ingredients: ");
//			console.log(this.ingredients.forEach(function(ingredients){console.log("-" + ingredients);}));
//		}
//}
//var myRecipe = new Recipe("Sharlotka", 8, ["2 eggs", "1 cup of sugar", "1 cup of flour", "2 medium apples"]);
//myRecipe.showRecipe();

//The Reading List
//function Book(title, author, alreadyRead) {
//	this.title = title;
//	this.author = author;
//	this.alreadyRead = alreadyRead;
//	this.displayInfo = function() {
//		return ('"' + this.title + '"' + ' by ' + this.author + '.'); 
//	}
//}
//var myBook1 = new Book("Digital Fortress", "Dan Brown", true);
//var myBook2 = new Book("Deception Point", "Dan Brown", true);
//var myBook3 = new Book("The Da Vinci Code", "Dan Brown", true);
//var myBook4 = new Book("Inferno", "Dan Brown", false);
//var myBook5 = new Book("Origin", "Dan Brown", false);
//
//var books = [myBook1, myBook2, myBook3, myBook4, myBook5];
//for (var i = 0; i < books.length; i++) {
//	//console.log(books[i].displayInfo());
//
//	if (books[i].alreadyRead === true) {
//		console.log("You already read " + books[i].displayInfo());
//	} else {
//	console.log("You still need to read " + books[i].displayInfo());
//	} 
//}