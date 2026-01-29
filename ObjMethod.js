//object 
   // collection of any type of data 
// const person ={
//   name:'testing',
//  age:24,
//  hobbies:['cricket','music'],
//  greet:function(){
//    console.log("hello")
//  }
// }
 

//access value from object 

// console.log(person.name)
// console.log(person['name'])

//adding or modifying the data of obj 
// person.job="developer"
// person.salary=50000
// console.log(person)

// delete person.salary
// console.log(person)


// nester object

const person1={
  name:'tanvi',
  age:20,
  address:{
    city:"ksd",
    Pincode:'362220',
    street:"123 main"
  }
}
 console.log(person1)
 console.log(person1?.address?.city)
 console.log(Object.keys(person1))
 console.log(Object.values(person1))
 console.log(Object.entries(person1))
