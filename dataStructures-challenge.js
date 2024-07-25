/*
Write a function that takes an array of numbers and returns a new array containing 
only the even numbers.
 */

function evenNumber(numbers) {
  let result = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      result.push(numbers[i]);
    }
  }
  return result;
}

/* 
Create an object representing a person with properties such as name, age, and email. 
Write a function that takes an array of these objects and returns a new array 
containing only the people who are over 30 years old.
*/

let person = {
  name: "John",
  age: 32,
  email: "John@gmail.com",
};

function overThirty(people) {
  let result = [];
  for (let i = 0; i < people.length; i++) {
    if (people[i].age > 30) {
      result.push(people[i]);
    }
  }
  return result;
}

/*
Implement a stack data structure in JavaScript using an array.
*/

class Stack {
  constructor() {
    this.items = [];
  }

  // Add an element to the top of the stack
  push(element) {
    this.items.push(element);
  }

  // Remove and return the top element of the stack
  pop() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.items.pop();
  }

  // Return the top element of the stack without removing it
  peek() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.items[this.items.length - 1];
  }

  // Check if the stack is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Return the size of the stack
  size() {
    return this.items.length;
  }

  // Print the elements of the stack
  printStack() {
    console.log(this.items.join(" "));
  }
}

/*
Implement a queue data structure in JavaScript using an array.
 */

class Queue {
  constructor() {
    this.items = [];
  }

  // Add an element to the end of the queue
  enqueue(element) {
    this.items.push(element);
  }

  // Remove and return the first element of the queue
  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items.shift();
  }

  // Return the first element of the queue without removing it
  front() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items[0];
  }

  // Check if the queue is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Return the size of the queue
  size() {
    return this.items.length;
  }

  // Print the elements of the queue
  printQueue() {
    console.log(this.items.join(" "));
  }
}

/*
Write a function that takes a string as input 
and returns a new string with all the vowels removed.
*/

function vowelsRemoved(string) {
  let vowels = "aeiou";
  let result = "";
  for (let i = 0; i < string.length; i++) {
    if (!vowels.includes(string[i])) {
      result += string[i];
    }
  }
  return result;
}

/*
Given two arrays of numbers, 
write a function that returns a new array containing the unique elements from both arrays.
*/

function uniqueElement(arr1, arr2) {
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    if (!arr2.includes(arr1[i])) {
      result.push(arr1[i]);
    }
  }
  for (let i = 0; i < arr2.length; i++) {
    if (!arr1.includes(arr2[i])) {
      result.push(arr2[i]);
    }
  }
  return result;
}
