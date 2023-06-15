function Animal(name){
    this.name = name;
    this.sleep = function(){
        console.log (this.name + " says ZzzzZZZz...")
    }
    this.noise = function(){
        console.log(this.name + " says " + this.sound);
    }
}


function Cat(name, race, age, color){
    this.race = race;
    this.age = age;
    this.color = color;
    Animal.call(this, name);
    Cat.prototype.sound = "MEOW";
} 


function Dog(name, race, age, color,sound){
    this.race = race;
    this.age = age;
    this.color = color;
    Animal.call(this, name);
    Dog.prototype.sound = "WOOF";
} 


const cat2 = new Cat("littleCat","Persian", "3 years", "blue");
const dog2 = new Dog("bigDog", "Boxer","4 months", "brown");
const dog3 = new Dog("littleDog","Poodle", "984 years", "white")
console.log(cat2);
console.log(dog2);
console.log(dog3);
cat2.noise();
cat2.sleep();
dog2.noise();
dog2.sleep();
dog3.noise();
dog3.sleep();