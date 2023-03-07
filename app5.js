function inchToFeet(inch) {
    return inch / 12;
}
console.log(inchToFeet(60));

function milesToKm(miles) {
    return miles * 1.60934;
}
console.log(milesToKm(10));

function centimetreToMeter(cm) {
    return cm * 0.01;
}
console.log(centimetreToMeter(465));

function kgTogm(kg) {
    return kg * 1000;
}
console.log(kgTogm(3));

function hourToMinutes(hour) {
    return hour * 60;
}
console.log(hourToMinutes(4));

function minutesToSeconds(minute) {
    return minute * 60;
}
console.log(minutesToSeconds(10));

function evenOrOdd(num) {
    if (num % 2 === 0) {
        return true;
    }
    else {
        return false
    }
}
console.log(evenOrOdd(7), evenOrOdd(8));

// ✅ The year must be evenly divisible by 4;
// ❌ If the year can also be evenly divided by 100, it is not a leap year, unless...;
// ✅ The year is also evenly divisible by 400. Then it is a leap year.


function leapYear(year) {
    if (year % 100 === 0 && year % 400 === 0) {
        console.log(year + ' is leap year');
    }
    else if (year % 4 === 0 && year % 100 === 0) {
        console.log(year + ' is not leap year');
    }
    else if (year % 4 === 0 || year % 400 === 0) {
        console.log(year + ' is leap year');
    }
    else {
        console.log(year + ' is not leap year');
    }
}

leapYear(1800); // not leap year
leapYear(1900); // not leap year
leapYear(2000); // leap year
leapYear(2100); // not leap year
leapYear(2200); // not leap year
leapYear(2300); // not leap year
leapYear(2400); // leap year
leapYear(2020); // leap year
leapYear(2021); // not leap year
leapYear(2022); // not leap year
leapYear(2023); // not leap year
leapYear(2024); // leap year

// ✅ The year must be evenly divisible by 4;
// ❌ If the year can also be evenly divided by 100, it is not a leap year, unless...;
// ✅ The year is also evenly divisible by 400. Then it is a leap year.

function arrayOfLeapYear(year) {
    let leapYearArray = [];
    let notLeapYearArray = [];
    let bothArray = [];
    for (i = 0; i < year.length; i++) {
        if ((year[i] % 4 === 0 && year[i] % 100 !== 0) || (year[i] % 100 === 0 && year[i] % 400 === 0) || (year[i] % 4 === 0 && year[i] % 400 === 0)) {
            leapYearArray.push(year[i]);
        }
        else if ((year[i] % 4 === 0 && year[i] % 100 === 0) || (year[i] % 4 !== 0)) {
            notLeapYearArray.push(year[i]);
        }
    }
    bothArray.push(leapYearArray);
    bothArray.push(notLeapYearArray);
    return bothArray;
}
const year = [1800, 1900, 2000, 2100, 2200, 2300, 2400, 2500, 2600, 2700, 2800, 2900, 3000, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030, 2031, 2032];
console.log(arrayOfLeapYear(year));

let numbers = [5, 7, 8, 10, 45, 30];
const oddNumbers = [];
function sumOfOddNumbers(numbers) {
    let sum = 0;
    // don't use const i = 0; because value of i keeps changing (i++)
    for (let i = 0; i < numbers.length; i++) {
        // didn't use sum = 0; here because it would reset the value of sum = 0; in every iteration
        // sum += numbers[i]; --> sum of all array elements (exclude if condition bellow)
        if (numbers[i] % 2 === 1) {
            sum += numbers[i];
            // oddNumbers.push(numbers[i]); // array of odd numbers
        }
        // didn't use return here because it would return in first iteration.
    }
    return sum;
}
console.log(sumOfOddNumbers(numbers));

function factorialOfNum(num) {
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
        factorial *= i;
    }
    return factorial;
}
console.log(factorialOfNum(5));

// reverse way (5, 4, 3, 2, 1)
function factorialReverseWay(number) {
    let factorial = 1;
    for (let i = number; i >= 1; i--) {
        factorial *= i;
    }
    return factorial;
}
console.log(factorialReverseWay(5));

// while loop factorial
function factorialWhileLoop(number) {
    let factorial = 1;
    let i = 1;
    while (i <= number) {
        factorial *= i;
        i++;
    }
    return factorial;
}
console.log(factorialWhileLoop(5));

// while loop reverse factorial
function factorialWhileLoopReverse(number) {
    let factorial = 1;
    let i = number;
    while (i >= 1) {
        // console.log(i);
        factorial *= i;
        i--;
    }
    return factorial;
}
console.log(factorialWhileLoopReverse(5));