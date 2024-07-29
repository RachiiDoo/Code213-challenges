/*
Write a function that takes an array of numbers and returns the average of all the even numbers. 
Use the filter() and reduce() array methods in your implementation.
*/

function averageEvenNumbers(numbers) {
  const evenArray = numbers.filter((el) => el % 2 === 0);
  const sum = evenArray.reduce((acc, curr) => acc + curr, 0);
  return sum / evenArray.length;
}

console.log(averageEvenNumbers([1, 2, 4]));

/*
Write a function that takes an array of words and returns the longest word. 
Use the reduce() array method in your implementation.
*/

function longestWord(words) {
  return words.reduce((previousValue, currentValue) => {
    return previousValue.length > currentValue.length
      ? previousValue
      : currentValue;
  }, "");
}

console.log(longestWord(["Oussma", "Mohamed", "Farid", "code213@tech"]));

/*
Write a function that takes an array of objects representing books, 
with each object containing properties such as title, author, and pages. 
The function should return the average number of pages across all the books. 
Use the map() and reduce() array methods in your implementation.
*/

function averageAcrossBooks(books) {
  return (
    books
      .map((book) => book.pages)
      .reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        0
      ) / books.length
  );
}

const books = [
  { title: "To Kill a Mockingbird", author: "Harper Lee", pages: 281 },
  { title: "1984", author: "George Orwell", pages: 328 },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", pages: 180 },
  { title: "The Catcher in the Rye", author: "J.D. Salinger", pages: 214 },
  { title: "Moby-Dick", author: "Herman Melville", pages: 635 },
];

console.log(averageAcrossBooks(books));

/*
Write a function that takes an array of strings and returns an object containing the frequency of each string. 
For example, if the input is ["hello", "world", "hello"], the output should be { hello: 2, world: 1 }. 
Use the reduce() array method in your implementation.
*/

function stringFrequency(array) {
  return array.reduce((acc, str) => {
    if (acc[str]) {
      acc[str] += 1; // Increment the count if the string already exists in the accumulator
    } else {
      acc[str] = 1; // Initialize the count to 1 if the string is encountered for the first time
    }
    return acc; // Return the accumulator for the next iteration
  }, {}); // Start with an empty object as the initial value of the accumulator
}

/*
Write a function that takes an array of objects representing people, 
with each object containing properties such as name, age, and city. 
The function should return an object containing the count of people by city. 
For example, if the input is [{ name: "Alice", age: 30, city: "New York" }, 
{ name: "Bob", age: 40, city: "Chicago" }, 
{ name: "Charlie", age: 50, city: "New York" }], the output should be { "New York": 2, "Chicago": 1 }. 
Use the reduce() array method in your implementation.
*/

function countPeopleByCity(people) {
  return people.reduce((acc, person) => {
    const city = person.city;
    if (acc[city]) {
      acc[city] += 1; // Increment the count if the city already exists in the accumulator
    } else {
      acc[city] = 1; // Initialize the count to 1 if the city is encountered for the first time
    }
    return acc; // Return the accumulator for the next iteration
  }, {}); // Start with an empty object as the initial value of the accumulator
}
