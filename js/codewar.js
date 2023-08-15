/** @format */

// function pigIt(str) {
// 	const ARRAY = [',', '.', '!'];
// 	if (!str) {
// 		return alert('String empty!');
// 	}
// 	const strArray = str.split(' ');
// 	const strOutput = strArray.map(item => {
// 		if (item.length <= 1) {
// 			if (item.match(/[a-zA-Z0-9]/)) {
// 				return item + 'ay';
// 			} else {
// 				return item;
// 			}
// 		} else {
// 			const newItem = item.substring(1, item.length) + item.substring(0, 1) + 'ay';
// 			return newItem;
// 		}
// 	});

// 	return strOutput.join(' ');
// }

// console.log(pigIt('Pig latin is cool'));
// console.log(pigIt('Pig latin i cool !'));
// console.log(pigIt('Pig latin i cool 0'));
// pigIt();

// function formatDuration(secs) {
// 	if (!secs) {
// 		return console.log('now');
// 	}

// 	let years = 0;
// 	let days = 0;
// 	let hours = 0;
// 	let minutes = 0;
// 	let seconds = 0;
// 	let message = '';
// 	const arrTime = [];

// 	// const SECONDS_IN_MINUTE = 60;
// 	// const MINUTES_IN_HOUR = 60;
// 	// const HOURS_IN_DAY = 24;
// 	// const DAYS_IN_YEAR = 365;

// 	// years = Math.floor(secs / (SECONDS_IN_MINUTE * MINUTES_IN_HOUR * HOURS_IN_DAY * DAYS_IN_YEAR));
// 	// days = Math.floor((secs / (SECONDS_IN_MINUTE * MINUTES_IN_HOUR * HOURS_IN_DAY)) % DAYS_IN_YEAR);
// 	// hours = Math.floor((secs / (SECONDS_IN_MINUTE * MINUTES_IN_HOUR)) % HOURS_IN_DAY);
// 	// minutes = Math.floor((secs / SECONDS_IN_MINUTE) % MINUTES_IN_HOUR);
// 	// seconds = secs % SECONDS_IN_MINUTE;

// 	years = (secs / 60 / 60 / 24 - ((secs / 60 / 60 / 24) % 365)) / 365;
// 	days = (secs / 60 / 60 - ((secs / 60 / 60) % 24)) / 24 - years * 365;
// 	hours = (secs / 60 - ((secs / 60) % 60)) / 60 - days * 24 - years * 24 * 365;
// 	minutes = (secs - (secs % 60)) / 60 - hours * 60 - days * 24 * 60 - years * 60 * 24 * 365;
// 	seconds =
// 		secs - minutes * 60 - hours * 60 * 60 - days * 24 * 60 * 60 - years * 60 * 60 * 24 * 365;

// 	if (years) {
// 		arrTime.push((message = years > 1 ? `${years} years` : `${years} year`));
// 	}
// 	if (days) {
// 		arrTime.push((message = days > 1 ? `${days} days` : `${days} day`));
// 	}
// 	if (hours) {
// 		arrTime.push((message = hours > 1 ? `${hours} hours` : `${hours} hour`));
// 	}
// 	if (minutes) {
// 		arrTime.push((message = minutes > 1 ? `${minutes} minutes` : `${minutes} minute`));
// 	}
// 	if (seconds) {
// 		arrTime.push((message = seconds > 1 ? `${seconds} seconds` : `${seconds} second`));
// 	}
// 	message = '';
// 	if (arrTime.length > 1) {
// 		for (let index = 0; index < arrTime.length; index++) {
// 			message = `${message}${arrTime[index]}`;
// 			if (index === arrTime.length - 2) {
// 				message = `${message} and `;
// 			} else if (index !== arrTime.length - 1) {
// 				message = `${message}, `;
// 			}
// 		}
// 	} else message = `${arrTime[0]}`;

// 	return console.log(message);
// }

// formatDuration(61);
// formatDuration(0);
// formatDuration(3000000);

// function sumOfDivided(lst) {
// 	console.log(lst);

// 	const arrayDiv = [];
// 	const returnArray = [];

// 	lst.forEach(item => {
// 		let isFound = false;
// 		if (Math.abs(item) === 2) {
// 			if (!arrayDiv.includes(2)) {
// 				arrayDiv.push(2);
// 			}
// 		} else {
// 			for (let i = 2; i <= Math.abs(item); i++) {
// 				if (!(Math.abs(item) % i) && Math.abs(item) !== i) {
// 					if (!arrayDiv.includes(i)) {
// 						arrayDiv.push(i);
// 					}
// 					isFound = true;
// 				} else if (Math.abs(item) === i && !isFound) {
// 					isFound = false;
// 				}
// 			}
// 			if (!isFound) {
// 				if (!arrayDiv.includes(item) && !arrayDiv.includes(-item)) {
// 					arrayDiv.push(Math.abs(item));
// 				}
// 			}
// 		}
// 	});

// 	const primeNumber = arrayDiv
// 		.filter(item => {
// 			for (let i = 2; i < item; i++) {
// 				if (!(item % i)) {
// 					return;
// 				}
// 			}
// 			return item;
// 		})
// 		.sort((a, b) => a - b);

// 	primeNumber.forEach(el => {
// 		const sum = lst.reduce((sum, item, idx, array) => {
// 			if (!(item % el)) {
// 				sum += item;
// 			}
// 			return sum;
// 		}, 0);
// 		returnArray.push([el, sum]);
// 	});

// 	returnArray.sort((a, b) => a[0] - b[0]);

// 	console.log(returnArray);
// 	return returnArray;
// }

// sumOfDivided([
// 	-4, 19, 7, 48, 59, -23, 78, -98, 145, 176, -66, -80, 80, -75, -66, 85, 183, 50, 8, 59, -33,
// ]);
// sumOfDivided([15, 21, 24, 30, 45]);
// sumOfDivided([-1307, -1001, 15, 21, 24, 30, 45, 57, 68, 75, 92, 104, 53, 73, 97, 107, 199]);

// function multiply(a, b) {
// 	const bigNumber1 = BigInt(a);
// 	const bigNumber2 = BigInt(b);
// 	const result = bigNumber1 * bigNumber2;

// 	return result.toString();
// }

// function multiplyStrings(str1, str2) {
// 	const len1 = str1.length;
// 	const len2 = str2.length;
// 	const result = Array(len1 + len2).fill(0);

// 	for (let i = len1 - 1; i >= 0; i--) {
// 		for (let j = len2 - 1; j >= 0; j--) {
// 			const product = parseInt(str1[i]) * parseInt(str2[j]);
// 			const sum = product + result[i + j + 1];
// 			result[i + j + 1] = sum % 10;
// 			result[i + j] += Math.floor(sum / 10);
// 		}
// 	}

// 	return result.join('').replace(/^0+/, '') || '0';
// }

// function multiply(a, b) {
// 	console.log(a, b);
// 	const arrayReturn = Array(a.length + b.length).fill(0);
// 	const aLeng = a.length;
// 	const bLeng = b.length;
// 	let c = arrayReturn.length - 1;
// 	let z = 0;
// 	for (let i = bLeng - 1; i >= 0; i--) {
// 		for (let j = aLeng - 1; j >= 0; j--) {
// 			const res = parseInt(a[j]) * parseInt(b[i]);
// 			arrayReturn[c - z] += res % 10;
// 			arrayReturn[c - 1 - z] += Math.floor(res / 10);
// 			console.log(a[j], b[i]);
// 			console.log(c, z, res, arrayReturn[c - 1 - z], arrayReturn[c - z]);

// 			if (arrayReturn[c - z] >= 10) {
// 				const t = arrayReturn[c - z];
// 				arrayReturn[c - z] = t % 10;
// 				arrayReturn[c - 1 - z] += Math.floor(t / 10);
// 			}

// 			if (arrayReturn[c - 1 - z] >= 10) {
// 				const t = arrayReturn[c - z - 1];
// 				arrayReturn[c - 1 - z] = t % 10;
// 				arrayReturn[c - 2 - z] += Math.floor(t / 10);
// 			}
// 			c -= 1;
// 			console.log(arrayReturn);
// 		}
// 		z += 1;
// 		c = arrayReturn.length - 1;
// 	}
// 	return arrayReturn.join('').replace(/^0+/, '') || '0';
// }

// // console.log(multiply('015', '42'));
// // console.log(multiply('2', '0'));
// console.log(multiply('98765', '56894'));
// console.log(multiply('0000001', '3'));
// console.log(multiply('1020303004875647366210', '2774537626200857473632627613'));

// function mix(s1, s2) {
// 	console.log(s1, '//', s2);
// 	const arr = [];
// 	const masT = {};
// 	let str = '';

// 	function createMas(s) {
// 		const mas = {};
// 		s.split('').forEach(el => {
// 			if (el in mas) {
// 				el !== el.toUpperCase() ? (mas[el] += 1) : null;
// 			} else {
// 				el !== el.toUpperCase() ? (mas[el] = 1) : null;
// 			}
// 		});
// 		return mas;
// 	}

// 	const mas1 = createMas(s1);
// 	const mas2 = createMas(s2);

// 	for (const key1 in mas1) {
// 		for (const key2 in mas2) {
// 			if (key1 === key2 && (mas1[key1] > 1 || mas2[key2] > 1)) {
// 				if (mas1[key1] > mas2[key2]) {
// 					masT[key1] = `${mas1[key1]}/1`;
// 				} else if (mas1[key1] === mas2[key2]) {
// 					masT[key1] = `${mas1[key1]}/E`;
// 				} else if (mas1[key1] < mas2[key2]) {
// 					masT[key2] = `${mas2[key2]}/2`;
// 				}
// 			}
// 		}
// 	}

// 	for (const key in mas1) {
// 		if (!(key in masT) && mas1[key] > 1) {
// 			masT[key] = `${mas1[key]}/1`;
// 		}
// 	}
// 	for (const key in mas2) {
// 		if (!(key in masT) && mas2[key] > 1) {
// 			masT[key] = `${mas2[key]}/2`;
// 		}
// 	}
// 	for (const key in masT) {
// 		const num = Number(masT[key].slice(0, masT[key].length - 2));
// 		const str = masT[key].slice(masT[key].length - 1, masT[key].length);
// 		arr.push([str, key, num]);
// 	}

// 	str = arr
// 		.sort((el1, el2) => {
// 			if (el1[0] === el2[0] && el1[2] === el2[2]) {
// 				return el1[1].localeCompare(el2[1]);
// 			} else if (el1[2] === el2[2]) {
// 				return el1[0].localeCompare(el2[0]);
// 			} else return el2[2] - el1[2];
// 		})
// 		.map(el => {
// 			let str = '';
// 			for (let i = 0; i < el[2]; i++) {
// 				str += el[1];
// 			}
// 			return `${el[0]}:${str}/`;
// 		})
// 		.join('')
// 		.slice(0, str.length - 1);

// 	return str.replace(/E/g, '=');
// }

// mix('looping is fun but dangerous', 'less dangerous than coding');
// mix('In many languages', "there's a pair of functions");
