var fruits = ['mango', 'apple', 'orange', 'watermelon', 'guava', 'grapes', 'pineapple'];
var slicedFruits = fruits.slice(2, 6);
console.log(slicedFruits);

var fruits = ['mango', 'apple', 'orange']
var doesIncludes1 = fruits.includes('apple');
var doesIncludes2 = fruits.includes('app');
console.log(doesIncludes1);
console.log(doesIncludes2);
var nums = [1, 2, 3];
var doesIncludes3 = nums.includes(3);
var doesIncludes4 = nums.includes(4);
console.log(doesIncludes3);
console.log(doesIncludes4);
var sentence = 'hello, my name is Mahfuj';
var doesIncludes5 = sentence.includes('lo');
var doesIncludes6 = sentence.includes('lo ');
console.log(doesIncludes5);
console.log(doesIncludes6);

var text = 'watermelon';
console.log(text.substring(2, 5));
console.log(text.substring(0));
console.log(text.substring(1));
console.log(text.substring(2));

function myFunction() {
    console.log('text');
}
myFunction();

function add(num1, num2) {
    // console.log(num1, num2);
    sum = num1 + num2;
    // console.log(sum);
    return sum;
}
var total = add(5, 7);
console.log(total);

function singara(money) {
    var singaraPrice = 10;
    var quantity = money / singaraPrice;
    return quantity;

}

var taka = 100;
var singaras = singara(taka);
console.log(singaras);

function getAverage(num1, num2, num3) {
    var total = num1 + num2 + num3;
    var average = total / 3;
    return average;
}

var num1Value = 10;
var num2Value = 15;
var num3Value = 20;

var avg = getAverage(num1Value, num2Value, num3Value);
console.log(avg);

var result1 = getAverage(11, 23, 43);
var result2 = getAverage(5, 12, 35);
var result3 = getAverage(50, 41, 64);

var finalResult = getAverage(result1, result2, result3);
console.log(finalResult);

var student = {
    id: 1,
    name: 'Mahfuj',
    class: 9,
    height: '6ft',
    marks: 75,
    isMarried: false
}

console.log(student.marks);
student.marks = 80;
console.log(student.marks);
var myHeight = student['height']
console.log(student['height']);

console.log(Object.keys(student));
console.log(Object.values(student));

console.log(student.id);
student.id = 2;
console.log(student.id);
student['id'] = 3;
console.log(student.id);
var newId = 'id';
student[newId] = 4;
console.log(student.id);

var phone = {
    id: 1,
    name: 'onePlus',
    price: 48000,
    date: 2018,
    isBlack: true
}

var keys = Object.keys(phone);
var value = Object.values(phone);

console.log(keys);
console.log(value);

for (i = 0; i < keys.length; i++) {
    var propertyName = keys[i];
    // var propertyValue = value[i];
    var propertyValue = phone[propertyName];
    console.log(propertyValue);
}
for (var propertyName in phone) {
    // console.log(propertyName);
    var propertyValue = phone[propertyName];
    console.log(propertyValue);
}
console.log(Object.entries(phone));

function foo() {
    console.log('foo');
    bar();
}
function bar() {
    console.log('bar');
}
foo();

function oddEven(num) {
    if (num % 2 === 0) {
        console.log(num, ' is even number');
    }
    else {
        console.log(num, ' is odd number');
    }
}
oddEven(12);
oddEven(13);

function oddEven(num) {
    if (num % 2 === 0) {
        return num + ' is even number';
    }
    else {
        return num + ' is odd number';
    }
}
var num1 = oddEven(12);
var num2 = oddEven(13);
console.log(num1);
console.log(num2);

var signal = 'yellow';
if (signal === 'red') {
    console.log('red signal');
}
else if (signal === 'yellow') {
    console.log('yellow signal');
}
else {
    console.log('green signal');
}

const trafficColor = 'green';
switch (trafficColor) {
    case 'red':
        console.log('red');
        break;
    case 'yellow':
        console.log('yellow');
        break;
    default:
        console.log('green');
}

function avg(numbers) {
    for (i = 0; i < numbers.length; i++) {
        var num = 0;
        console.log(numbers[i])
        total = num + numbers[i];
        var average = total / numbers.length;
        return average;
    }
}

function multiplication(num) {
    return [num, num * 2, num * 3, num * 4, num * 6, num * 7, num * 8, num * 9, num * 10];
}
console.log(multiplication(13));

function lowercaseName(name) {
    return name.toLowerCase();
}
console.log(lowercaseName('MAHFUJ'));

function fullName(firstName, lastName) {
    return firstName + ' ' + lastName;
}
console.log(fullName('Mahfuj', 'Munna'))

function square(num) {
    return num * num;
}
console.log(square(5));

const pizza = {
    toppings: ['cheese', 'sauce', 'pepperoni'],
    crust: 'deep dish',
    serves: 2
}
console.log(pizza.toppings[2]);

function avgerageNum(nums) {
    var sum = 0;
    for (i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
        var avg = sum / nums.length;
    }
    return avg;
}
var nums = [10, 20, 30];
console.log(avgerageNum(nums));

var arr = 'hello';
console.log(arr[0]);
arr[0] = 'a'; //no effect
console.log(arr[0]);