/** @format */

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

// function getEvenNumbers(start, end) {
//    // Change code below this line
// let array = [];
//   for (let i = start; i <= end; i ++) {
//     if (i % 2 === 0) {
//       array.push(i);
//     }
//   }

// return array;
//     // Change code above this line
// }

// console.log(getEvenNumbers(3, 10));
// console.log(getEvenNumbers(15, 100));

// let str = 'Fuck the Police!';

// if (true) {
//   console.log(str);

//   if (true) {
//     console.log(str);
//     str = 'WTF?'
//   }
// }

// function calculateTotalPrice(order) {
//   total = order.reduce((sum, item) => {
//     return sum + item;
//   }, 0);
//   return total;
// }

// console.log(calculateTotalPrice([10, 5, 30, 45, 55]));

//{name: 'apple', price: 20}
//{name: 'orange', price: 50}
//{name: 'ananas', price: 70}
//{name: 'mandarin', price: 110}

// const cart = {
//   items: [],
//   getItems() {                                    // Arbeiten!!!
//     // const goods = [];
//     // for (const item of this.items) {
//     //   goods.push({ 'name': item.name, 'quantity': item.quantity});
//     // }
//     // return goods;
//       return this.items
//   },
//   add(product) {                                  // Arbeiten!!!
//     for (const item of this.items) {
//       if (item.name === product.name) {
//         item.quantity += 1;
//         return;
//       }
//     }
//       const newProduct = {
//           ...product,
//           quantity: 1,
//       }
//     this.items.push(newProduct)
//   },
//   remove(productName) {                           // Arbeiten!!!
//     for (const {name} of this.items) {
//       if (name === productName) {
//         this.items.splice(this.items.indexOf(name), 1);
//         return;
//       }
//     }
//     return `This product ${productName} not in cart`;
//   },
//   clear() {                                      // Arbeiten!!!
//     this.items = [];
//   },
//   countTotalPrice() {                             // Arbeiten!!!
//     let sum = 0;
//     for (const {price, quantity} of this.items) {
//       sum += (price * quantity);
//     }
//     return sum;
//   },
//   increaseQuantity(productName) {               // Arbeiten!!!
//     for (const item of this.items) {
//       if (item.name === productName) {
//         item.quantity += 1;
//         return;
//       }
//     }
//   },
//   decreaseQuantity(productName) {             // Arbeiten!!!
//     for (const item of this.items) {
//       if (item.name === productName) {
//         if (item.quantity >= 2) {
//           item.quantity -= 1;
//           return;
//         }
//         else  {
//           this.remove(item.name);
//         }
//       }
//     }
//   },
// };

// cart.add({ name: 'apple', price: 20 });           // Arbeiten!!!
// cart.add({ name: 'orange', price: 50 });
// cart.add({ name: 'mandarin', price: 110 });
// cart.add({ name: 'mandarin', price: 110 });
// cart.add({ name: 'ananas', price: 70 });
// cart.add({ name: 'orange', price: 50 });
// console.table(cart.getItems());                  // Arbeiten!!!
// cart.remove({name: 'apple', price: 20 });
// cart.increaseQuantity('apple');                 // Arbeiten!!!
// cart.increaseQuantity('apple');
// cart.increaseQuantity('apple');
// console.table(cart.getItems());
// cart.decreaseQuantity('apple');                 // Arbeiten!!!
// cart.decreaseQuantity('apple');
// cart.decreaseQuantity('apple');
// cart.decreaseQuantity('apple');
// cart.decreaseQuantity('orange');
// cart.decreaseQuantity('mandarin');
// console.table(cart.getItems());
// // cart.remove('apple');                           // Arbeiten!!!
// cart.remove('orange');
// cart.remove('ananas');
// console.table(cart.getItems());
// // // cart.clear();                              // Arbeiten!!!
// console.table(cart.getItems());
// console.log(cart.countTotalPrice());           // Arbeiten!!!
// console.log(cart);

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line
//   //  let salarys = [];
//   // salarys = Object.values(salaries);
//   // console.log(salarys);
//   for (const key in Object.values(salaries)) {
//     totalSalary += Object.values(salaries)[key];
//   }

//   // Change code above this line
//   return totalSalary;
// }

// console.log(countTotalSalary({}));
// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));
// console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line

//   for (const product of products) {
//     if (product.name === productName) {
//         console.log(product.name);
//         return product.price
//     }
//   }
//   return null;
// };
// console.log(getProductPrice("Grip"));
// console.log(getProductPrice("Scanner"));
// console.log(getProductPrice("Droid"));
// console.log(getProductPrice("Engine"));

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
//   let values = [];
//   for (const product of products) {
//     if (product[propName]) {
//       values.push(product[propName])
//     }
// }
// return values;

//   // Change code above this line
// }

// console.log(getAllPropValues("name"));
// console.log(getAllPropValues("quantity"));
// console.log(getAllPropValues("price"));
// console.log(getAllPropValues("category"));

// function calculateTotalPrice(productName) {
//   // Пиши код ниже этой строки
//   let totalPrice = 0;
//   for (const product of products) {
//     if (product.name === productName) {
//       return totalPrice = product.price * product.quantity
//     }
//   }
//   return totalPrice
//   // Пиши код выше этой строки
// }

// console.log(calculateTotalPrice('Radar'));
// console.log(calculateTotalPrice('Droid'));
// console.log(calculateTotalPrice('Grip'));
// console.log(calculateTotalPrice('Scanner'));
// console.log(calculateTotalPrice('Blaster'));

// function slugify(title) {
//   // Change code below this line
// return title.toLowerCase().split(' ').join('-');

//   // Change code above this line
// }

// console.log(slugify("Arrays for begginers"));
// console.log(slugify("English for developer"));
// console.log(slugify("Ten secrets of JavaScript"));

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

// const { yesterday: highYesterday, today: highToday, tomorrow: highTomorrow, highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg", } = highTemperatures;

// // Change code above this line
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;
// console.log(meanTemperature);

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   updatePotionName(oldName, newName) {
//     // Change code below this line
//     this.potions.splice(this.potions.indexOf(oldName), 1, newName);

//     // Change code above this line
//   },
// };

// atTheOldToad.updatePotionName('Dragon breath', 'Polymorth');
// console.log(atTheOldToad.potions);
// console.log(atTheOldToad.updatePotionName('Stone skin', 'Invisibility'));
// console.log(atTheOldToad.potions);

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     for (potion of this.potions) {
//       if (potion.name === newPotion.name) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
//     }
//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     for (potion of this.potions) {
//       if (potion.name === potionName) {
//         this.potions.splice(this.potions.indexOf(potion), 1);
//         return;
//       }
//     }
//     return `Potion ${potionName.name} is not in inventory!`;
//   },
//   updatePotionName(oldName, newName) {
//     for (potion of this.potions) {
//       if (potion.name === oldName) {
//         potion.name = newName;
//         return
//       }
//     };
//     return `Potion ${oldName} is not in inventory!`;
//     // Change code above this line
//   }
// };

// console.log(atTheOldToad.potions);
// atTheOldToad.addPotion({ name: "Invisibility", price: 620 });
// console.log(atTheOldToad.potions);
// atTheOldToad.addPotion({ name: "Dragon breath", price: 700 });
// console.log(atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }));
// atTheOldToad.addPotion({ name: "Stone skin", price: 240 });
// console.log(atTheOldToad.potions);
// atTheOldToad.addPotion({ name: "Dragon breath", price: 700 })
// console.log(atTheOldToad.potions);
// atTheOldToad.addPotion({ name: "Stone skin", price: 240 })
// console.log(atTheOldToad.potions);
// atTheOldToad.removePotion("Dragon breath");
// console.log(atTheOldToad.potions);
// atTheOldToad.removePotion("Speed potion");
// console.log(atTheOldToad.potions);
// atTheOldToad.updatePotionName("Dragon breath", "Polymorth");
// console.log(atTheOldToad.potions);
// atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion");
// console.log(atTheOldToad.potions);

// const array = { a: 23, b: 200, c: 4, d: 870, e: 84, h: 105 };

// const tempArray1 = Object.values(array);
// const tempArray2 = Object.keys(array);
// console.log(array);
// console.log(tempArray1);
// console.log(tempArray2);
// console.log(Math.max(...tempArray1));
// console.log(Object.values(array).indexOf(Math.max(...Object.values(array))));
// console.log(Object.keys(array)[Object.values(array).indexOf(Math.max(...Object.values(array)))]);
// const maxNumber = array[Object.values(array).indexOf(Math.max(...Object.values(array)))];

// function findOutlier(integers) {
//     const even = [];
//     const odd = [];
//     for (integer of integers) {
//     if (integer % 2 === 0) {
//       even.push(integer)
//     } else {
//       odd.push(integer)
//     }
//   };
//   if (even.length === 1) {
//     return `Should return: ${even[0]} (the only even number)`
//   } else if (odd.length === 1) {
//     return `Should return: ${odd[0]} (the only odd number)`
//   } else return 'Error!'
// }

// console.log(findOutlier([0, 1, 2]));
// console.log(findOutlier([1, 2, 3]));
// console.log(findOutlier([2,6,8,10,3]));
// console.log(findOutlier([0,0,3,0,0]));
// console.log(findOutlier([1, 1, 0, 1, 1, 2]));
// console.log(findOutlier([-32312819, 123803355, 75642447, 196126965, -7441701, -110842669, -152997047, -106071370, -21625599, 150316415, -81653649, -39806423, 171701899, 188858723, 140489333, -43241439, -150547855, -141847449, -192914617, -184603683, -8530593, -51197233, -180389063, 93988227, 116404177, 173551495, -150970067, -97015205, 179040847, -109069559, 80990129, 196785145, -141256885, 53251863, 61478957, -35873535, -87829277, 101012801]));
// console.log(findOutlier([68111487,-2215066,62843108,119078308,-37551116,-161686198,64416974,424966,-192870324,-1778126,-155611210,14309928,-172822738,-91987664,-153689324,-170588194,-197273110,-137361992,-33038890,-149409228,-193009124,158822478,12346286,112389596,-40536444,159664788,-82837116,-117511292,-188978984,-99633672,71328636,-31565832,72098322,65879080]));

// function duplicateCount(text) {
//     const answer = {};
//     const chars = text.toLowerCase().split('');
//     let message = 'The set contains the same characters:';
//     for (let x = 0; x < chars.length; x++) {
//         if (!answer.hasOwnProperty(chars[x])) {
//             answer[chars[x]] = 1;
//         } else {
//             answer[chars[x]] += 1;
//         }
//     }
//     for (key of Object.keys(answer)) {
//         if (answer[key] > 1) {
//             message = message + ` "${key}": count ${answer[key]},`
//         }
//     }
//     return message + ' other count 1.'
// }

// console.log(duplicateCount('object'));
// console.log(duplicateCount('Должна возвращать отрицательное значение'));
// console.log(duplicateCount('идти перед вторым, положительное значение, если второй '));
// console.log(duplicateCount('аргумент должен идти перед первым, и 0, если порядок элементов не важен Вот пример с функцией сравнения для сортировки в порядке убывания:'));

// function sumTwoSmallestNumbers(numbers) {
//     let numMin = [];
//     for (let i = 0; i <= 1; i++) {
//         numMin[i] = (numbers.splice(numbers.indexOf(Math.min(...numbers)), 1));
//     }
//     return `"Sum should be ${Number(numMin[0]) + Number(numMin[1])}"`;
// }

// console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]));
// console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43]));
// console.log(sumTwoSmallestNumbers([3, 87, 45, 12, 7]));
// console.log(sumTwoSmallestNumbers([23, 71, 33, 82, 1]));
// console.log(sumTwoSmallestNumbers([52, 76, 14, 12, 4]));

// function longest(s1, s2) {
//   const sum = s1 + s2;
//   let s3 = '';
//   for (let i = 0; i < sum.length; i += 1) {
//     if (!s3.includes(sum[i])) {
//       s3 = s3.concat(sum[i]);
//     }
//   }
//   return `Answer ${s3.split('').sort().join('')}`;
// }

// a = "Take 2 strings s1 and s2 including only lterwyyrtytretters from qwertyuiopa to z. Return a new sorted string, the "
// b = "-longest possible, containing distinct 13 letters - 490each taken only once - coming from s1 or s2."

// console.log(longest(a, b));

// function digPow(n, p){
//   let strNumber = n.toString().split('');
//   let sum = 0;
//   for (let i = 0; i < strNumber.length; i++) {
//     sum += Number(strNumber[i]) ** (p + i);
//   }
//   if ((sum / n) >= 1) {
//     return `should return minimum ${(sum / n).toFixed(0)}`
//   }
//   return `should return -1`;
// }

// console.log(digPow(89, 1)); // should return 1 since 8¹ + 9² = 89 = 89 * 1
// console.log(digPow(92, 1)); // should return -1 since there is no k such as 9¹ + 2² equals 92 * k
// console.log(digPow(695, 2));
// console.log(digPow(46288, 3));
// console.log(digPow(686859, 3));
// console.log(digPow(67898, 4));
// console.log(digPow(462, 3));

// const pizzaPalace = {
//   pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//   order(pizzaName, makePizza, onOrderError) {
//     if (!this.pizzas.includes(pizzaName)) {
//       return onOrderError(`There is no pizza with the name ${pizzaName} in the assortment.`);
//     }
//       return makePizza(pizzaName);
//       }
// };

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }
// // Method calls with callbacks
// console.log(pizzaPalace.order('Smoked', makePizza, onOrderError));
// console.log(pizzaPalace.order('Four meats', makePizza, onOrderError));
// console.log(pizzaPalace.order('Big Mike', makePizza, onOrderError));
// console.log(pizzaPalace.order('Vienna', makePizza, onOrderError));

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]
// const calculateTotalBalance = users.reduce((totalBalance, user) => totalBalance + user.balance, 0);
// console.log("🚀 ~ file: task-01.js:67 ~ calculateTotalBalance:", calculateTotalBalance)

// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Поли", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Киви", score: 94 },
// ];

// const inAscendingScoreOrder = [...students].sort(
//   (firstStudent, secondStudent) => firstStudent.score - secondStudent.score
// );
// console.log("🚀 ~ file: task-01.js:9 ~ inAscendingScoreOrder:", inAscendingScoreOrder)

// const inDescendingScoreOrder = [...students].sort(
//   (firstStudent, secondStudent) => secondStudent.score - firstStudent.score
// );
// console.log("🚀 ~ file: task-01.js:17 ~ inDescendingScoreOrder:", inDescendingScoreOrder)

// const inAlphabeticalOrder = [...students].sort((firstStudent, secondStudent) =>
//   firstStudent.name.localeCompare(secondStudent.name)
// );
// console.log("🚀 ~ file: task-01.js:22 ~ inAlphabeticalOrder:", inAlphabeticalOrder)

// const inAscendingScoreOrder1 = students.sort(
//   (firstStudent, secondStudent) => firstStudent.score - secondStudent.score
// );
// console.log("🚀 ~ file: task-01.js:9 ~ inAscendingScoreOrder1:", inAscendingScoreOrder1)

// const inDescendingScoreOrder1 = students.sort(
//   (firstStudent, secondStudent) => secondStudent.score - firstStudent.score
// );
// console.log("🚀 ~ file: task-01.js:17 ~ inDescendingScoreOrder1:", inDescendingScoreOrder1)

// const inAlphabeticalOrder1 = students.sort((firstStudent, secondStudent) =>
//   firstStudent.name.localeCompare(secondStudent.name)
// );
// console.log("🚀 ~ file: task-01.js:22 ~ inAlphabeticalOrder:", inAlphabeticalOrder1)

// console.log(inAscendingScoreOrder1 === inDescendingScoreOrder1 && inDescendingScoreOrder1 === inAlphabeticalOrder1);

// const tesla = {
//     brand: "Tesla",
//     speed: 70,
//   controlSpeed(maxSpeed) {
//     const speedSensor = (maxSpeed) =>
//       this.speed >= maxSpeed ? console.log(`Автомобіль ${this.brand} рухається з безпечною швидкістю`) : console.log(`${this.brand} - Перевищено безпечну швидкість! 😨`);
//     speedSensor(maxSpeed);
//     }
// };

// const audi = {
//     brand: 'Audi',
//     speed: 70,
// }

// tesla.controlSpeed(60);
// tesla.controlSpeed.call(audi, 100);

// const apartment = {};

// apartment.location = {};
// apartment.location.country = "Jamaica";
// console.log("🚀 ~ file: test.js:730 ~ apartment:", apartment)

// class Kvadrat {
//   #height;
//   #width;

//   constructor({ height, width } = {}) {
//     this.#height = height;
//     this.#width = width;
//   }

//   get size() {
//     console.log(`width ${this.#width} px, height ${this.#height} px`);
//     return `width ${this.#width} px, height ${this.#height} px`;
//   }

//   set dimensions(sizeValue) {
//     const type = sizeValue[0];
//     const num = Number(sizeValue.slice(1));
//     if (type === 'w') {
//       this.#width = num;
//     } else if (type === 'h') {
//       this.#height = num;
//     } else {
//       console.log('error!');
//     }
//   }
// }

// const newKv = new Kvadrat({ height: 5, width: 5 });
// console.log(newKv);
// newKv.size;
// newKv.dimensions = 'w24';
// newKv.size;
// newKv.dimensions = 'h123';
// newKv.size;
// newKv.dimensions = 'm123';

// function tribonacci(signature, n) {
//   const arrayTribon = [];
//   for (let i = 0; i < n; i++) {
//     if (signature[i] !== undefined) {
//       arrayTribon.push(signature[i]);
//       console.log(arrayTribon);
//     }
//   }

//   for (let i = 0; arrayTribon.length < n; i++) {
//     let sum = 0;
//     sum = arrayTribon[i] + arrayTribon[i + 1] + arrayTribon[i + 2];
//     arrayTribon.push(sum);
//   }
//   return arrayTribon;
// }

// console.log(tribonacci([1, 1, 1], 10));

// function OnCLick(event) {
// 	console.log('Hi!');
// }

// function solution(string) {
// 	let idx = 0;
// 	const words = [];
// 	for (let i = 0; i < string.length; i++) {
// 		if (string[i] === string[i].toUpperCase()) {
// 			words.push(string.slice(idx, i));
// 			idx = i;
// 		}
// 		if (i + 1 === string.length) {
// 			words.push(string.slice(idx, i + 1));
// 		}
// 	}
// 	console.log(words.join(' '));
// 	console.log(string);
// 	return words.join(' ');
// }

// solution('makeStringmakeStringmakeStringmakeString');

// function highAndLow(numbers) {
// 	// const numArray = numbers.split(' ').map(Number);

// 	const num = numbers
// 		.split(' ')
// 		.map(Number)
// 		.sort((a, b) => a - b);
// 	return `${num[0]} ${num[num.length - 1]}`;
// }

// console.log(highAndLow('1 4 -5 6'));

// function sortArray(array) {
// 	let j = 0;
// 	const array2 = [...array].filter(num => num % 2 !== 0).sort((a, b) => a - b);
// 	for (let i = 0; i < array.length; i++) {
// 		if (array[i] % 2 !== 0) {
// 			array[i] = array2[j];
// 			j += 1;
// 		}
// 	}
// 	return array;
// }

// console.log(sortArray([5, 3, 2, 8, 1, 4]));

// function domainName(url) {
// const idxArr = [];
// if (!url.includes('http') && !url.includes('www')) {
// 	idxArr.push(0);
// }
// for (let i = 0; i < url.length; i++) {
// 	if (url[i] === '.') {
// 		idxArr.push(i + 1);
// 	} else if (url[i] === '/' && url[i + 1] === '/' && !url.includes('www')) {
// 		idxArr.push(i + 2);
// 	}
// }
// return idxArr.length > 1 ? url.slice(idxArr[0], idxArr[1] - 1) : 'no damain';
// }

// function domainName(url) {
// 	const regex = /^(http:\/\/|https:\/\/)/;
// 	const protocolFreeUrl = url.replace(regex, '').replace('www.', '');
// 	const idxEnd = protocolFreeUrl.indexOf('.');
// 	return protocolFreeUrl.slice(0, idxEnd);
// }

// console.log(domainName('http://github.com/carbonfive/raygun'));
// console.log(domainName('www.xakep.ru'));
// console.log(domainName('http://www.jzodzprg.de'));

// function solution(number) {
// 	const numInp = [];
// 	let t = Math.floor(number / 1000);
// 	let s = Math.floor((number - t * 1000) / 100);
// 	let x = Math.floor((number - t * 1000 - s * 100) / 10);
// 	let y = Math.floor(number - t * 1000 - s * 100 - x * 10);

// 	if (t) {
// 		rymNumber(t, 1000, numInp);
// 	}
// 	if (s) {
// 		rymNumber(s, 100, numInp);
// 	}
// 	if (x) {
// 		rymNumber(x, 10, numInp);
// 	}
// 	if (y) {
// 		rymNumber(y, 1, numInp);
// 	}

// 	return `${number} should return '${numInp.join('')}'`;
// }

// function rymNumber(num, dec, numInp) {
// 	const arrNum = {
// 		1: 'I',
// 		5: 'V',
// 		10: 'X',
// 		50: 'L',
// 		100: 'C',
// 		500: 'D',
// 		1000: 'M',
// 	};
// 	const z = num - 5;

// 	if (dec === 1000) {
// 		for (let i = 0; i < num; i++) {
// 			numInp.push(arrNum[1 * dec]);
// 		}
// 		return numInp;
// 	}
// 	if (num <= 3) {
// 		for (let i = 0; i < num; i++) {
// 			numInp.push(arrNum[1 * dec]);
// 		}
// 	} else if (num === 9) {
// 		numInp.push(arrNum[1 * dec], arrNum[10 * dec]);
// 	} else if (z >= 0) {
// 		numInp.push(arrNum[5 * dec]);
// 		for (let i = 0; i < z; i++) {
// 			numInp.push(arrNum[1 * dec]);
// 		}
// 	} else {
// 		for (let i = 0; i < -z; i++) {
// 			numInp.push(arrNum[1 * dec]);
// 		}
// 		numInp.push(arrNum[5 * dec]);
// 	}
// 	return numInp;
// }

// console.log(solution(1));

// function solution(number) {
// 	return [
// 		{ threshold: 1000, char: 'M' },
// 		{ threshold: 900, char: 'CM' },
// 		{ threshold: 500, char: 'D' },
// 		{ threshold: 400, char: 'CD' },
// 		{ threshold: 100, char: 'C' },
// 		{ threshold: 90, char: 'XC' },
// 		{ threshold: 50, char: 'L' },
// 		{ threshold: 40, char: 'XL' },
// 		{ threshold: 10, char: 'X' },
// 		{ threshold: 9, char: 'IX' },
// 		{ threshold: 5, char: 'V' },
// 		{ threshold: 4, char: 'IV' },
// 		{ threshold: 1, char: 'I' },
// 	].reduce(function (prev, curr, idx, arr) {
// 		while (number >= curr.threshold) {
// 			prev += curr.char;
// 			number -= curr.threshold;
// 		}

// 		return prev;
// 	}, '');
// }

// console.log(solution(22999));

// doSomething().then(doSomethingElse).then(finalHandler);
// function doSomething() {
// 	const a = 5;
// 	const b = 6;
// 	const z = a + b;
// 	console.log('🚀 1', z);
// 	return Promise.resolve(z);
// }
// function doSomethingElse(z) {
// 	return Promise.resolve(z => {
// 		const q = 7;
// 		let w = 0;
// 		console.log('🚀 2', z);
// 		setTimeout(() => {
// 			w = q * z;
// 			console.log('🚀 3', z);
// 		}, 2000);
// 	});
// }
// function finalHandler(w) {
// 	const r = 10;
// 	let v = 0;
// 	console.log('🚀 4');
// 	setTimeout(() => {
// 		v = w(r) * r;
// 		console.log('🚀 5', v);
// 	}, 3000);
// 	const n = w(r) / r;
// 	console.log('🚀 6', n);
// }

// function moveZeros(arr) {
// 	const arrayZero = arr.filter(item => item === 0);
// 	console.log('🚀 ~ file: test.js:983 ~ moveZeros ~ arrayZero:', arrayZero);
// 	const arrayNoZero = arr.filter(item => item !== 0);
// 	console.log(
// 		'🚀 ~ file: test.js:985 ~ moveZeros ~ arrayNoZero:',
// 		arr.filter(item => item !== 0) + arr.filter(item => item === 0)
// 	);
// 	return [...arr.filter(item => item !== 0), ...arr.filter(item => item === 0)];
// }

// console.log(moveZeros([false, 2, 0, 1, 0, 1, 0, 3, 0, 1]));

// function findUniq(arr) {
// 	let x = arr.filter((value, i, arr) => {
// 		let newArr = [...arr];
// 		let element = newArr.splice(i, i + 1);
// 		let x = element[0];
// 		if (newArr.indexOf(x) === -1) {
// 			return x;
// 		}
// 	});
// 	return x[0];
// }

// function findUniq(arr) {
// 	return arr.find((item, index) => arr.indexOf(item) === arr.lastIndexOf(item));
// }

// console.log(findUniq([1, 1, 1, 1, 0.55, 1]));

// function copy(arr, num) {
// 	let newArr = [];
// 	while (num >= 1) {
// 		// newArr.push(...arr);
// 		// newArr = [...newArr];
// 		newArr = [...newArr, ...arr];
// 		num--;
// 	}
// 	return newArr;
// }

// console.log(copy([1, 2, 3, 4, 5], 5));

// function perimeter(n) {
// 	const arr = [0, 1];
// 	for (let i = 1; i <= n; i++) {
// 		arr.push(arr[i - 1] + arr[i]);
// 	}
// 	return arr.reduce((pv, cv, i, arr) => (pv = pv + cv * 4), 0);
// }

// console.log(perimeter(50));

// const refBtn = document.querySelector('.test');
// refBtn.addEventListener('click', onClick);

// function onClick(evt) {
// 	const parentDiv = evt.target.closest('.card');

// 	if (parentDiv) {
// 		const parentId = parentDiv.dataset.id;
// 		console.log('ID главного элемента:', parentId);
// 	}
// }

// function add(a, b) {
// 	return a * b;
// }

// function add(a, b) {
// 	let sum = 0;
// 	for (let i = 1; i <= a; i += 1) {
// 		sum += i + b;
// 	}
// 	return sum;
// }

// localStorage.setItem('foo', add);

// const a = 8;
// const b = 5;
// const codeString = localStorage.getItem('foo');

// try {
// 	const result = eval(`(${codeString})(a, b)`);
// 	console.log('🚀 result:', result);
// } catch (error) {
// 	console.log(error);
// }

// const cart = new Map();

// function addToCart(item) {
// 	if (cart.has(item)) {
// 		cart.set(item, cart.get(item) + 1);
// 	} else {
// 		cart.set(item, 1);
// 	}
// }

// addToCart('item1');
// addToCart('item2');
// addToCart('item1'); // Количество item1 увеличится на 1

// console.log(cart); // Выведет: Map { 'item1' => 2, 'item2' => 1 }

async function fetchUser() {
	try {
		const response = await fetch('https://restcountries.com/v3.1/nme/Ukraine');
		if (!response.ok) {
			throw new Error(response.statusText);
		}
		const data = await response.json();
		console.log(data);
	} catch (err) {
		console.log(err);
	}
}
fetchUser();
