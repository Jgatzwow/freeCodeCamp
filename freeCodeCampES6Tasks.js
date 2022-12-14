/*task 1*/
function checkScope() {
    let i = 'function scope';
    if (true) {
        let i = 'block scope';
        console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
}

/*task 2*/
const s = [5, 7, 2];

function editInPlace() {
    // Only change code below this line
    s.sort();
    // Using s = [2, 5, 7] would be invalid

    // Only change code above this line
}

editInPlace();

/*task 3*/
function freezeObj() {
    const MATH_CONSTANTS = {
        PI: 3.14
    };
    // Only change code below this line
    Object.freeze(MATH_CONSTANTS);

    // Only change code above this line
    try {
        MATH_CONSTANTS.PI = 99;
    } catch (ex) {
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}

const PI = freezeObj();

/*task 4*/
const magic = () => new Date();
/*task 5*/
const myConcat = (arr1, arr2) => arr1.concat(arr2);
console.log(myConcat([1, 2], [3, 4, 5]));
/*task 6*/
// Only change code below this line
const increment = (number = 1, value = 1) => number + value;
// Only change code above this line
/*task 7*/
const sum = (...args) => {
    return args.reduce((a, b) => a + b, 0);
}
/*task 8*/
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];  // Change this line

console.log(arr2);
/*task 9*/
const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
};

// Only change code below this line
const {today, tomorrow} = HIGH_TEMPERATURES;
// Only change code above this line
/*task 10*/
const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
};

// Only change code below this line
const {today: highToday, tomorrow: highTomorrow} = HIGH_TEMPERATURES;
// Only change code above this line
/*task 11*/
const LOCAL_FORECAST = {
    yesterday: {low: 61, high: 75},
    today: {low: 64, high: 77},
    tomorrow: {low: 68, high: 80}
};

// Only change code below this line

const {today: {low: lowToday}} = LOCAL_FORECAST;
const {today: {high: highToday}} = LOCAL_FORECAST;

// Only change code above this line
/*task 12*/
let a = 8, b = 6;
// Only change code below this line
[a, b] = [b, a]
/*task 13*/
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function removeFirstTwo(list) {
    // Only change code below this line
    const [a, b, ...arr] = list; // Change this line
    // Only change code above this line
    return arr;
}

const arr = removeFirstTwo(source);
/*task 14*/
const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};

// Only change code below this line
const half = ({max, min}) => (max + min) / 2.0;
// Only change code above this line
/*task 15*/
const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
    // Only change code below this line
    const failureItems = [];
    for (let i = 0; i < 3; i++) {
        failureItems.push(`<li class="text-warning">${result.failure[i]}</li>`)
    }
    // Only change code above this line

    return failureItems;
}

const failuresList = makeList(result.failure);
/*task 16*/
const createPerson = (name, age, gender) => {
    // Only change code below this line
    return {
        name,
        age,
        gender
    };
    // Only change code above this line
};
/*task 17*/
// Only change code below this line
const bicycle = {
    gear: 2,
    setGear(newGear) {
        this.gear = newGear;
    }
};
// Only change code above this line
bicycle.setGear(3);
console.log(bicycle.gear);
/*task 18*/
// Only change code below this line
class Vegetable {
    constructor(name) {
        this.name = name;

    }
}
// Only change code above this line

const carrot = new Vegetable('carrot');
console.log(carrot.name); // Should display 'carrot'
/*task 19*/
// Only change code below this line
class Thermostat {
    constructor(fahrenheit) {
        this.fahrenheit = fahrenheit;
    }

    get temperature() {
        return (5 / 9) * (this.fahrenheit - 32);
    }

    set temperature(celsius) {
        this.fahrenheit = (celsius * 9.0) / 5 + 32;
    }
}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
/*task 20*/
<script type="module" src="index.js"></script>

/*task 21*/
export const uppercaseString = (string) => {
    return string.toUpperCase();
}

export const lowercaseString = (string) => {
    return string.toLowerCase()
}
/*task 22*/
import {uppercaseString, lowercaseString} from "./string_functions.js"
// Only change code above this line

uppercaseString("hello");
lowercaseString("WORLD!");
/*task 23*/
import * as stringFunctions from "./string_functions.js"
// Only change code above this line

stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");
/*task 24*/
export default function subtract(x, y) {
    return x - y;
}
/*task 25*/
import subtract from "./math_functions.js"
// Only change code above this line

subtract(7,4);
/*task 26*/
const makeServerRequest = new Promise((resolve, reject) => {

});
/*task 27*/
const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer represents a response from a server
    let responseFromServer;

    if(responseFromServer) {
        resolve("We got the data")
    } else {
        reject("Data not received")
    }
});
/*task 28*/
const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer is set to true to represent a successful response from a server
    let responseFromServer = true;

    if(responseFromServer) {
        resolve("We got the data");
    } else {
        reject("Data not received");
    }
});
makeServerRequest.then(result => {
    console.log(result);
});
/*task 29*/
const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer is set to false to represent an unsuccessful response from a server
    let responseFromServer = false;

    if(responseFromServer) {
        resolve("We got the data");
    } else {
        reject("Data not received");
    }
});

makeServerRequest.then(result => {
    console.log(result);
});
makeServerRequest.catch(error => {
    console.log(error)
});
