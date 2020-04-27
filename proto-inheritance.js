function Animal(voice){
	this.voice = voice || 'Grunt';
}

Animal.prototype.speak = function(){
	console.log(this.voice);
}

function Cat(name, color){
	Animal.call(this, 'Meow');
	this.name = name;
	this.color = color;
}

// Cat inherits Animal
Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

var cat = new Cat('Tom','Brown');
cat.speak()


// Dog inherits Animal
function Dog(name, color){
	Animal.call(this, 'Bark');
	this.name = name;
	this.color = color;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

var dog = new Dog('Tim','white');
dog.speak()
