//task 1
var text = 'I am reborn. All hail the son of misery.';

var newText = text.replace('son of misery', 'new Senator of Chisholm.');

var upperText = newText.toUpperCase();

var sencondText = '     Transform, the fire set me free.';
var defText = sencondText.concat(' ',upperText);

var finalText = defText.trim();

var tLength = defText.length;

console.log(finalText);
console.log(tLength);

//task 2
const skill = ['in-ryhm', 'multi', 'meta']
skill.push('acy');

skill[3] = 'kim chi nam';

console.log(skill);

const number = [2,8,9,5]
number.pop();

const greaterThan9 = number.slice(1);

const nString = number.toString();

console.log(greaterThan9);
console.log(nString);

//task 3
defDate = new Date();
date = defDate.toUTCString();

defDate1 = new Date();

const [year, month, day] = [defDate1.getFullYear(), defDate1.getMonth(), defDate1.getDate()];
const [hour, minute, second] = [defDate1.getHours(), defDate1.getMinutes(), defDate1.getSeconds()];

console.log(`${year}-${month}-${day} ${hour}:${minute}:${second}`);
console.log(date);
