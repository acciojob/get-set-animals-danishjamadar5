class Animal {
  constructor(species) {
    this.species = species;
  }

  getSpecies() {
    return this.species;
  }

  makeSound() {
    console.log("The animal makes a sound.");
  }
}

class Cat extends Animal {
  purr() {
    console.log("purr");
  }
}

class Dog extends Animal {
  bark() {
    console.log("woof");
  }
}

window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;



// //complete this code
// class Animal {}

// class Dog extends Animal {}

// class Cat extends Animal {}

// // Do not change the code below this line
// window.Animal = Animal;
// window.Dog = Dog;
// window.Cat = Cat;
