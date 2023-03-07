var text = 0;
while (text < 5) {
    // text = text + 1;
    // text += 1;
    console.log(text);
    text++;
    console.log('text shown');
}

var number = 1;
while (number <= 10) {
    console.log(number);
    number++;
}

var number = 0;
while (number <= 10) {
    console.log(number);
    number = number + 2;
}

var number = 1;
while (number <= 10) {
    console.log(number);
    number = number + 2;
}

for (i = 0; i <= 5; i++) {
    console.log(i);
}

for (i = 0; i <= 10; i += 2) {
    console.log(i);
}

var numbers = [10, 11, 12, 13, 14, 15, 16];
for (i = 0; i < numbers.length; i++) {
    console.log(numbers[i])
}

for (i = 0; i <= 10; i++) {
    if (i > 5) {
        break;
    }
    console.log(i);
}

var words = ['while', 'for', 'break', 'continue'];
for (i = 0; i < words.length; i++) {
    var word = words[i];
    if (word == 'break') {
        break;
    }
    console.log(word);
}

var numbers = [1, 2, 3, 4, 5, 6, 7];
for (i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    if (number > 5) {
        break;
    }
    console.log(number);
}

var numbers = [12, 25, 14, 37, 22, 19, 17, 28];
for (i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    if (number > 20) {
        continue;
    }
    console.log(number);
}

var num = 5;
while (num >= 1) {
    console.log(num);
    num--;
}

for (i = 5; i >= 1; i--) {
    console.log(i);
}

var fruits = ['Apple', 'Banana', 'Orange'];
var bananaIndex = fruits.indexOf('Banana');
console.log(bananaIndex);
fruits[bananaIndex] = 'Mango';
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.push('Watermelon');
console.log(fruits);

var num1 = 70;
var num2 = 80;
var num3 = 75;
if (num1 > num2) {
    if (num1 > num3) {
        console.log('num1 is largest');
    }
    else {
        console.log('num3 is largest');
    }
}
else {
    if (num2 > num3) {
        console.log('num2 is largest');
    }
    else {
        console.log('num3 is largest');
    }
}

var side1 = 9;
var side2 = 8;
var side3 = 9;
if (side1 == side2 || side2 == side3 || side1 == side3) {
    console.log('isosceles');
}
var i = 0;
for (i = 0; i < 5; i++) { };
console.log(i);

var marks = [13, 15, 14, 20, 18];
for (var i = 0; i < marks.length; i++) {
    if (marks[i] >= 15) {
        continue;
    }
    console.log(marks[i]);
};

var numbers = [10, 20, 30];
console.log(numbers[3])