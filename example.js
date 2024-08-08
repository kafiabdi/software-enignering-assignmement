
// deining function that reverses number 
function reverse_number(num) {
  // converting the number to string 
  let num_conversion = num.toString();

  let reversed_number = num_conversion.split('').reverse().join('');
  return reversed_number;
}

console.log(reverse_number(1234)); // Output: "4321"


// defining function that check palindrom

function palindrom_checker(word1, word2){
  // comparing the two words
  if (word1 == word2 ){
    return 'the word is palindrom'
  }else{
    return 'the word is not palindrom'
  }
}
result = palindrom_checker('kafi', 'kafi')
console.log(result)






// let fruits = ["apple", "banana"];
// fruits.push("orange");
// console.log(fruits); // Output: ["apple", "banana", "orange"]



// let fruits = ["apple", "banana", "orange"];
// fruits.pop();
// console.log(fruits); // Output: ["apple", "banana"]


// let fruits = ["apple", "banana", "orange"];
// fruits.shift();
// console.log(fruits); // Output: ["apple", "banana"]



// let fruits = ["banana", "orange"];
// fruits.unshift("apple", 'passion');
// console.log(fruits); // Output: ["apple", "banana", "orange"]


// let fruits = ["banana", "orange"];
// fruits.slice(1,3);
// console.log(fruits); // Output: ["apple", "banana", "orange"]




let numbers = [1, 2, 3, 4];
let firstEven = numbers.find(num => num % 2 === 0);
console.log(firstEven); // Output: 2



// let x = [1, 2, 3, 4];
// let even_number = x.find(num => num%2===0);
// console.log(even_number)



// let users = [
//   { id: 1, name: 'John' , class:'2A'},
//   { id: 2, name: 'Jane', class:'2c' },
//   { id: 3, name: 'Mary' , class:'2b'}
// ];

//  let user = users.find(user => user.id === 2);
// // console.log(user); // Output: { id: 2, name: 'Jane' }



// let students=  users.find(student=>user.name==='jane');
// console.log(user.class, user.id); // Output: { id: 2, name: 'Jane' }




// let fruits = ["banana", "apple", "orange"];
// fruits.sort();
// console.log(fruits); // Output: ["apple", "banana", "orange"]



// let users = [
//   { name: 'Alice', age: 25 },
//   { name: 'Bob', age: 30 },
//   { name: 'Charlie', age: 35 }
// ];

// let youngUsers = users.filter(user => user.age < 30);
// console.log(youngUsers); // Output: [{ name: 'Alice', age: 25 }]


let words = ['apple', 'banana', 'cherry', 'date'];
let longWords = words.filter(word => word.length > 5);
console.log(longWords); // Output: ['banana', 'cherry']










