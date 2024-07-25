// Challenge one

let message = "There is no war in Ba Sing Se";

// wordsNumber is the number of words in our message
let wordsNumber = message.split(" ").length;
console.log(wordsNumber);

console.log("###################################################");

// Challenge two
let countries = ["China", "Japan", "South Korea", "Vietnam", "Malaysia"];
let capital = ["Beijing", "Tokyo", "Seoul", "Hanoï", "Kuala Lumpur"];

for (let i = 0; i < countries.length; i++) {
  console.log(
    `Your country : ${countries[i]} has the capital named : ${capital[i]}.`
  );
}

console.log("###################################################");

// Challenge three
let randomizer = Math.floor(Math.random() * 3);

switch (randomizer) {
  case 0:
    console.log("A certain victory");
    break;
  case 1:
    console.log("not so certain victory");
    break;
  case 2:
    console.log("an uneasy victory");
    break;
}

console.log("###################################################");

// Challenge four

function checkSeason(month) {
  month = month.toLowerCase();
  switch (month) {
    case "december":
    case "january":
    case "february":
      return "Winter";
    case "march":
    case "april":
    case "may":
      return "Spring";
    case "june":
    case "july":
    case "august":
      return "Summer";
    case "september":
    case "october":
    case "nouvember":
      return "Autumn";

    default:
      return "Invalid Month";
  }
}

console.log(checkSeason("January")); // Output: Winter
console.log(checkSeason("April")); // Output: Spring
console.log(checkSeason("July")); // Output: Summer
console.log(checkSeason("October")); // Output: Autumn
console.log(checkSeason("Hello")); // Output: Invalid month
