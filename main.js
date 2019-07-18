
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  get getAge() {
    return this.addYear()
      .then(age => {
        this.age = age;
        console.log(`${this.name}'s age is ${age}`);
      })
      .catch(err => console.log('error', err));
  }

  addYear() {
    return new Promise((resolve, reject) => {
      if (this.age) {
        setTimeout(() => {
          resolve(this.age + 1);
        }, 250);
      } else {
        reject('The age is not found');
      }
    });
  }
}

const brad = new Person('Brad', 28);

setInterval(() => {
  brad.getAge;
}, 3000);



// Create 4 instances of a person and push them to an array. 


let persons = [];


for(let i = 0; i < 4; i++){

  let newPerson = new Person(faker.name.firstName(), Math.floor(Math.random() * (100 - 0 + 1) ) + 0)
  persons.push(newPerson);
}

console.log(persons);


// Function that checks every second the age of each person in the array and removes a person from the array whenever age >=40.


let checkAge = function(){

    return new Promise((resolve, reject) => {
        persons.forEach((item, index) =>{
          if (item.age >=40) {
            resolve(persons.splice(index, 1))   
          }
        })
          
  })
}

setInterval(checkAge, 1000);



// Create another function that pushes to the array every 2-second new instance of a person 
// with a random age between 1 and 50 and random name.

function addPerson(){

 let newPerson = new Person(faker.name.firstName(), Math.floor(Math.random() * (100 - 0 + 1) ) + 0)
  persons.push(newPerson);

 setInterval(addPerson, 2000);

}

addPerson();