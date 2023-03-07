const text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corrupti?';
if (text.toLowerCase().indexOf('dolor') !== -1) {
    console.log('dolor exists');
}

// const text = 'Today is saturday';
console.log(text.startsWith('Today'));
console.log(text.startsWith('today'));
console.log(text.startsWith('T'));

// const text = 'Today is saturday';
console.log(text.endsWith('saturday'));
console.log(text.endsWith('Saturday'));
console.log(text.endsWith('y'));

// const text = 'The quick brown fox jumps over the lazy dog.';
const split1 = text.split(' ');
console.log(split1);
console.log(split1[3]);
const split2 = text.split('');
console.log(split2);
console.log(split2[8]);
const split3 = text.split();
console.log(split3);

// const text = 'The quick brown fox jumps over the lazy dog.';
// let index = 5;
console.log(`Using an index of ${index} the item returned is ${text.at(index)}`);
index = -4;
console.log(`Using an index of ${index} the item returned is ${text.at(index)}`);

const array1 = [5, 12, 8, 130, 44];
let index = 2;
console.log(`Using an index of ${index} the item returned is ${array1.at(index)}`);
index = -2;
console.log(`Using an index of ${index} item returned is ${array1.at(index)}`);

const paragraph = 'when we when we';
console.log(paragraph.lastIndexOf('we')); 13
console.log(paragraph.lastIndexOf('when')); 8

// const greeting = '   Hello world!   ';
console.log(greeting);
console.log(greeting.trim());

// const greeting = '   Hello world!   ';
console.log(greeting);
console.log(greeting.trimStart());

// const greeting = '   Hello world!   ';
console.log(greeting);
console.log(greeting.trimEnd());

console.log(Math.pow(2, 3));

console.log(Math.abs(-10));
console.log(Math.abs(10.5));

console.log(Math.round(5.49));
console.log(Math.round(5.50));
console.log(Math.round(5.51));

console.log(Math.random());
console.log(Math.round((Math.random() * 100)));

console.log(Math.ceil(4.3)); 5

console.log(Math.floor(3.7)); 3

console.log(Math.min(1, 2, 3));

console.log(Math.max(1, 2, 3));

console.log(Math.PI);

// let first = 5;
// let second = 7;
console.log(first, second);
const temp = first;
first = second;
second = temp;
console.log(first, second);

let first = 5;
let second = 7;
console.log(first, second);
[first, second] = [second, first];
console.log(first, second);

const num1 = 84;
const num2 = 99;
const num3 = 77;

function maxNumber(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return num1;
    }
    else if (num2 > num1 && num2 > num3) {
        return num2;
    }
    else {
        return num3;
    }
}
console.log(maxNumber(1, 2, 3));

function minNumber(num1, num2, num3) {
    if (num1 < num2 && num1 < num3) {
        return num1;
    }
    else if (num2 < num1 && num2 < num3) {
        return num2;
    }
    else {
        return num3;
    }
}
console.log(minNumber(1, 2, 3));

function maxNum(num1, num2, num3) {
    return Math.max(num1, num2, num3);
}
console.log(maxNum(2, 3, 4));

function minNum(num1, num2, num3) {
    return Math.min(num1, num2, num3);
}
console.log(minNum(2, 3, 4));

function maxInArray(heights) {
    // console.log(heights);
    let largest = heights[0];
    for (let i = 0; i < heights.length; i++) {
        const element = heights[i];
        if (element > largest) {
            largest = element;
        }
    }
    return largest;
}
// const heights = [167, 190, 120, 165, 137];
const tallest = maxInArray(heights);
console.log(tallest);

function minInArray(heights) {
    let smallest = heights[0];
    for (let i = 0; i < heights.length; i++) {
        const element = heights[i];
        if (element < smallest) {
            smallest = element;
        }
    }
    return smallest;
}
const heights = [167, 190, 120, 165, 137];
const shortest = minInArray(heights);
console.log(shortest);

function reversedString(text) {
    let reversed = '';
    // for (let i = 0; i < text.length; i++) {
    for (let i = text.length - 1; i >= 0; i--) {
        const element = text[i];
        reversed += element;
    }
    return reversed;
}
// const str = 'ab cd ef gh uvw xyz';
console.log(reversedString(str));

function wordReversed(text) {
    const words = str.split(' ');
    // console.log(words);
    const reversedStr = words.reverse();
    // console.log(reversedStr);
    const reversedStrJoin = reversedStr.join(' ');
    // console.log(reversedStrJoin);
    return reversedStrJoin;
}
// const str = 'he is a good person';
console.log(wordReversed(str));

function wordReversed(str) {
    const words = str.split(' ');
    let reverse = [];
    for (let i = words.length - 1; i >= 0; i--) {
        const element = words[i];
        reverse.push(element);
    }
    // console.log(reverse);
    const reversedJoin = reverse.join(' ');
    return reversedJoin;
}
const str = 'he is a good person';
console.log(wordReversed(str));

const fibo = [0, 1];
for (let i = 2; i <= 10; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2]
}
console.log(fibo);