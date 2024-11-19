const fruits = ["Apple", "Banana", "Cherry"]

// Adding to the end
fruits.push("mango");
console.log(fruits); // ["Apple", "Banana", "Cherry", "Mango",]

// Adding to the beginning
fruits.unshift("Elderberry");
console.log(fruits);  ["Elderberry", "Apple", "Banana", "cherry"]

//4. Removing Element from an Array
//Explain method like pop, shift, and splice for removing elements

// Remove from the end
fruits.pop();
console.log(fruits); // ["Elderberry", "Apple", "Banans", "Cherry"]

// removing from the beginning 
fruits.shift();
console.log(fruits); // ["Apple", "Banana", cherry]

// remove a specific position
fruits.splice(1,1); // remove 1 element at index 1
console.log(fruits); // ["Apple", "cherry"]

// 5. Modifying Elements 
// show how to change element in array .

fruits[1] = "Blueberry";
 console.log(fruits); // ["Apple", "Blueberry"]

 fruits.splice(1, 0, "cocount");
 console.log(fruits);

 let array = [1, 2, 3, 4, 5,6]
 array.splice(2,3)
 console.log(array)

 // 6. iterating over arrays
 // introduce different ways to loop through arrays.

 // Using the loop
 for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
 }

 // Using forEach
 fruits.forEach(function(fruit) {
    console.log(fruit)
 });

 // 7. Common Array Methods
 // Explain some useful array methods like map, filter, reduce, find,  

 //map 
 let uppercasedFruits = fruits.map(fruit => fruit.toUpperCase());
 console.log(uppercasedFruits); // ["Apple", Bluberry]

 const add = (a, b) => a + b
 add(2,4)
//filter
let longFruits = fruits.filter(fruit => fruit.length > 5);
console.log(longFruits);    


//find 
let foundFruit = fruits.find (fruit => fruit ==='Apple')
console.log(foundFruit);

// combing Arrays 
//show how to concatenate array using concat.
let moreFruits = ['Fig', 'Grape'];
let allFruits = fruits.concat(moreFruits);
console.log(allFruits);









//9. sorting Arrays 
//Explain how to sort arrays with sort.
let sortedFruits = allFruits.sort();
console.log(sortedFruits); // ["Apple", "Blueberry", "Fig", "Grape"]

// 10. Reversing Array 
// show how to reserve arrays with reserve.
let reversedFruits = allFruits.reverse();
console.log(reversedFruits); // ["grape", "Fig", "Blueberry", "Apple"]

// Original array
const numbers2 = [1,2,3,4,5];

// Using map to create a new array with each element doubled
const douubledNumbers = numbers2.map(number => number * 2);

console.log(douubledNumbers); // [2,4,6,8,10]

const people = [
   {name: "Alice", age: 25},
   {name: "Bob", age: 30},
   {name: "Charile", age: 35},
];

// using map to create a new array with just names of the people 
const name = people.map (person => person.name);
console.log(name);

const peoples = [
   {name: "Alice", age: 25},
   {name: "Bob", age: 30},
   {name: "Charile", age: 35},
];

// using map to create a new array with just names of the people 
const age = people.map (person => person.age);

console.log(age); // ["Apple","Bob", Charile]



