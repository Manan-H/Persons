// Create a class Person with the following properties (name, age). 
// After creating an instance the age of a person should be incremented by 1 every second.

class Person {

  constructor(name, age, interval) {
    this.name = name;
    this.age = age;
    this.grow(this.age);
  }

  grow(age){
    this.interval = setInterval(()=>{
          this.age++;
        }, 1000)
  }

  stopGrowing(){
    clearInterval(this.interval);
  }

}


var brad = new Person("Brad", 35);

setTimeout(()=>{
        console.log(`${brad.name} is ${brad.age} years old`);
  }, 1000)



// Create 4 instances of a person and push them to an array. 


let persons = [];


for(let i = 0; i < 4; i++){

  let newPerson = new Person(faker.name.firstName(), Math.floor(Math.random() * 50) + 1)
  persons.push(newPerson);
}

console.log(persons);


// Function that checks every second the age of each person in the array and removes a person from the array whenever age >=40.


function checkAge(){

  persons.forEach((item, index) =>{

    if (item.age >=40) {
        removePerson(item, index);
      }
  })
}

setInterval(checkAge, 1000);



function removePerson(item, index){

  console.log(`${item.name}'s ${item.age} before stopping to grow`);
  item.stopGrowing();
  console.log(`${item.name} was removed`);
  persons.splice(index, 1)
  

  setTimeout(()=>{ console.log(`${item.name} is still ${item.age}`)}, 3000);

}



// Create another function that pushes to the array every 2-second new instance of a person 
// with a random age between 1 and 50 and random name.

function addPerson(){

 let newPerson = new Person(faker.name.firstName(), Math.floor(Math.random() * 50) + 1)
  persons.push(newPerson);
  console.log(`${newPerson.name} was added`)

}

setInterval(addPerson, 2000);