class Animal{
  constructor(name){
    this.name = name;
    this.canBreathe = true; //the keyword this relates back to parent object
  }
  getName(){
    return this.name;
  }
  getSpeak(){
    return 'Rawr';
  }
}
  class Bird extends Animal{
    getCanFly(){
      return 'This can fly';
    }
    getSpeak(){
      return 'Squak';
    }
}


let dog = new Animal('dog');
let cat = new Animal('cat');

let parakeet = new Bird('parakeet');

console.log(dog.name);
console.log(dog.getSpeak());
console.log(parakeet.name);
console.log(parakeet.getCanFly());
console.log(parakeet.getSpeak());
