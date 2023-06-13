// const min = 2;
// const max = 50;
// let total = 0;

// for (let i = min; i <= max; i += 1) {
//     if (i % 2 === 0) {
//         total += i;
//         console.log("Current sum(четные числа): ", total);
//     } else {
//         total -= i;
//         console.log("Current sum(нечетные числа): ", total);
//     }
// }

// console.log("Sum: ", total);

// function getExtremeElements(array) {
//   // Change code below this line
//     return [array[0], array[array.length - 1]];
//   // Change code above this line
// }

// console.log(getExtremeElements([1, 2, 3, 4, 5]));
// console.log(getExtremeElements(["Earth", "Mars", "Venus"]));
// console.log(getExtremeElements(["apple", "peach", "pear", "banana"]));

// function calculateEngravingPrice(message, pricePerWord) {
//    // Change code below this line 
//     return message.split(' ').length * pricePerWord;
//    // Change code above this line
// }

// console.log(calculateEngravingPrice("JavaScript is in my blood", 10));
// console.log(calculateEngravingPrice("JavaScript is in my blood", 20));
// console.log(calculateEngravingPrice("Web-development is creative work", 40));

// function slugify(title) {
//   // Change code below this line
//     return title.toLowerCase().split(' ').join('-');
//   // Change code above this line
// }

// console.log(slugify("Arrays for begginers"));
// console.log(slugify("Ten secrets of JavaScript"));
// console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// // Change code below this line
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, 4);
// const lastThreeEls = fruits.slice(-3);

// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);

// function makeArray(firstArray, secondArray, maxLength) {
//     // Change code below this line
//     const tempArray = firstArray.concat(secondArray);
//     const thirdArray = firstArray.concat(secondArray).slice(0, maxLength);

//     return firstArray.concat(secondArray).slice(0, maxLength);
//     // Change code above this line
// }
  
// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));
// console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0));

// function calculateTotal(number) {
//  // Change code below this line
//   let sum = 0;
// for (let i = 1; i <= number; i += 1) {
//   sum += i;
// }
// return sum;

//   // Change code above this line
// }

// console.log(calculateTotal(5));
// console.log(calculateTotal(50));
// console.log(calculateTotal(500));
// console.log(calculateTotal(5000));
// console.log(calculateTotal(50000));

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
// for (i = 0; i < order.length; i += 1) {
//   total +=order[i];
// }
//   // Change code above this line
//   return total;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
// console.log(calculateTotalPrice([5000]));

// function findLongestWord(string) {
//   // Change code below this line
//     const stringArray = string.split(' ');
//     let longestWord = stringArray[0];
//     for (i = 0; i < stringArray.length; i++) {
//         if (stringArray[i].length >= longestWord.length) {
//                 longestWord = stringArray[i];
//         }
//     }
//     return longestWord;
//   // Change code above this line
// }

// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// console.log(findLongestWord("Google do a roll"));
// console.log(findLongestWord("May the force be with you"));
// console.log(findLongestWord(''));

// function getCommonElements(array1, array2) {
//   // Change code below this line
//     let array3 = [];
//     for (let num of array1) {
//         if (array2.includes(num)) {
//             array3.push(num);
//         }
//     }
//     return array3;
//  // Change code above this line
// }

// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));

// const a = 3 % 3;
// const b = 4 % 3;
// const c = 11 % 8;
// const d = 12 % 7;
// const e = 8 % 6;

// console.log(a, b, c, d, e);

function getEvenNumbers(start, end) {
   // Change code below this line
let array = [];
  for (let i = start; i <= end; i ++) {
    if (i % 2 === 0) {
      array.push(i);
    }
  }

return array;
    // Change code above this line
}
  
  console.log(getEvenNumbers(3, 10));
console.log(getEvenNumbers(15, 100));