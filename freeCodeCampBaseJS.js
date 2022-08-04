// Basic JS freeCodeCamp

/*task 76 - Selecting from Many Options with Switch Statements*/
function caseInSwitch(val) {
    let answer = "";
    // Only change code below this line
    switch (val) {
        case 1:
            answer = "alpha"
            break;
        case 2:
            answer = "beta"
            break;
        case 3:
            answer = "gamma"
            break;
        case 4:
            answer = "delta"
            break;
        default:
    }
    // Only change code above this line
    return answer;
}

caseInSwitch(1);

/*task 77*/

function switchOfStuff(val) {
    let answer = "";
    // Only change code below this line
    switch (val) {
        case "a":
            answer = "apple"
            break;
        case "b":
            answer = "bird"
            break;
        case "c":
            answer = "cat"
            break;
        default:
            answer = "stuff"
            break;

    }
    // Only change code above this line
    return answer;
}

switchOfStuff(1);

/*task 78*/
function sequentialSizes(val) {
    let answer = "";
    // Only change code below this line
    switch (val) {
        case 1:
        case 2:
        case 3:
            answer = "Low"
            break;
        case 4:
        case 5:
        case 6:
            answer = "Mid"
            break;
        case 7:
        case 8:
        case 9:
            answer = "High"
            break;
        default:

    }
    // Only change code above this line
    return answer;
}

sequentialSizes(1);

/*task 79*/

function chainToSwitch(val) {
    let answer = "";
    // Only change code below this line

    switch (val) {
        case "bob":
            answer = "Marley"
            break;
        case 42:
            answer = "The Answer"
            break;
        case 1:
            answer = "There is no #1"
            break;
        case 99:
            answer = "Missed me by this much!"
            break;
        case 7:
            answer = "Ate Nine"
            break;
        default:
    }
    // Only change code above this line
    return answer;
}

chainToSwitch(7);

/*task 80*/
function isLess(a, b) {
    // Only change code below this line
    return a < b;
    // Only change code above this line
}

isLess(10, 15);

/*task 81*/

// Setup
function abTest(a, b) {
    // Only change code below this line

    if (a < 0 || b < 0) {
        return;
    }

    // Only change code above this line

    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2, 2);

/*task 82*/
let count = 0;

function cc(card) {
    // Only change code below this line
    switch (card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count += 1
            break;
        case 7:
        case 8:
        case 9:
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count -= 1
            break;
        default:
            return count;
    }
    console.log("current count:", count);
    if (count > 0) {
        return `${count} Bet`
    } else {
        return `${count} Hold`
    }

    // Only change code above this line
}

cc(2);
cc(3);
cc(7);
cc('K');
cc('A');

/*task 83*/
const myDog = {
    // Only change code below this line
    name: "BarkBark",
    legs: 4,
    tails: 1,
    friends: ["Cats", "Dogs"]
    // Only change code above this line
};

/*task 83*/
// Setup
const testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
};
// Only change code below this line
const hatValue = testObj.hat;      // Change this line
const shirtValue = testObj.shirt;    // Change this line

/*task 84*/
// Setup
const testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
};

// Only change code below this line
const entreeValue = testObj["an entree"];   // Change this line
const drinkValue = testObj["the drink"];    // Change this line

/*task 85*/
// Setup
const testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
};

// Only change code below this line
const playerNumber = 16;  // Change this line
const player = testObj[playerNumber];   // Change this line

/*task 86*/
// Setup
const myDog = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
};

myDog.name = "Happy Coder";
// Only change code below this line

/*task 87*/
const myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
};
myDog.bark = "woof";
/*task 88*/
// Setup
const myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"],
    "bark": "woof"
};

// Only change code below this line
delete myDog.tails;
/*task 89*/
// Setup
// Setup
function phoneticLookup(val) {
    let result = "";
    // Only change code below this line
    const lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "Frank",
    };
    result = lookup[val]
    // Only change code above this line
    return result;
}

phoneticLookup("charlie");

/*task 90*/
function checkObj(obj, checkProp) {
    // Only change code below this line
    if (obj.hasOwnProperty(checkProp)) {
        return obj[checkProp]
    }
    return "Not Found";
    // Only change code above this line
}

/*task 91*/
const myMusic = [
    {
        "artist": "Billy Joel",
        "title": "Piano Man",
        "release_year": 1973,
        "formats": [
            "CD",
            "8T",
            "LP"
        ],
        "gold": true
    },
    {
        "artist": "Billy ",
        "title": "Man",
        "release_year": 1983,
        "formats": [
            "CD",
            "8T",
            "LP"
        ]
    }
];

/*task 92*/
const myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
};

const gloveBoxContents = myStorage.car.inside["glove box"];

/*task 93*/
const myPlants = [
    {
        type: "flowers",
        list: [
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        type: "trees",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }
];

const secondTree = myPlants[1].list[1];
/*task 94*/
// Setup
const recordCollection = {
    2548: {
        albumTitle: 'Slippery When Wet',
        artist: 'Bon Jovi',
        tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
        albumTitle: '1999',
        artist: 'Prince',
        tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
        artist: 'Robert Palmer',
        tracks: []
    },
    5439: {
        albumTitle: 'ABBA Gold'
    }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
    if (prop !== 'tracks' && value !== "") {
        records[id][prop] = value;
    } else if (prop === "tracks" && records[id].hasOwnProperty("tracks") === false) {
        records[id][prop] = [value];
    } else if (prop === "tracks" && value !== "") {
        records[id][prop].push(value);
    } else if (value === "") {
        delete records[id][prop];
    }
    return records;
}

updateRecords(recordCollection, 5439, 'artist', 'ABBA');
/*task 95*/
// Setup
const myArray = [];

let i = 5

while (i >= 0) {
    myArray.push(i);
    i--;
}
// Only change code below this line
const myArray = [];

let i = 5

while (i >= 0) {
    myArray.push(i);
    i--;
}
/*task 96*/
// Setup
const myArray = [];

for (let i = 1; i < 6; i++){
    myArray.push(i);
}
// Only change code below this line
/*task 97*/
// Setup
const myArray = [];
for (let i = 1; i < 10; i+=2) {
    myArray.push(i);
}
// Only change code below this line
/*task 98*/
// Setup
const myArray = [];
for (let i = 9; i > 0; i -=2) {
    myArray.push(i);
}
// Only change code below this line
/*task 99*/
// Setup
const myArr = [2, 3, 4, 5, 6];
let total = 0
for (let i = 0; i < myArr.length; i++) {
    total += myArr[i];
}
// Only change code below this line
/*task 100*/
function multiplyAll(arr) {
    let product = 1;
    // Only change code below this line
    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j <arr[i].length; j++){
            product *= arr[i][j];
        }
    }
    // Only change code above this line
    return product;
}
multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

/*task 101*/
// Setup
const myArray = [];
let i = 10;

// Only change code below this line
do {
    myArray.push(i);
    i++;
} while (i < 10);

/*task 102*/
function sum(arr, n) {
    // Only change code below this line
    if ( n <= 0) {
        return 0;
    } else {
        return sum(arr, n - 1) + arr[ n - 1 ]
    }
    // Only change code above this line
}
/*task 103*/
// Setup
const contacts = [
    {
        firstName: "Akira",
        lastName: "Laine",
        number: "0543236543",
        likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
        firstName: "Harry",
        lastName: "Potter",
        number: "0994372684",
        likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
        firstName: "Sherlock",
        lastName: "Holmes",
        number: "0487345643",
        likes: ["Intriguing Cases", "Violin"],
    },
    {
        firstName: "Kristian",
        lastName: "Vos",
        number: "unknown",
        likes: ["JavaScript", "Gaming", "Foxes"],
    },
];

function lookUpProfile(name, prop) {
    // Only change code below this line

    for (let i = 0; i < contacts.length; i++) {
        if (contacts[i].firstName === name) {
            if (contacts[i].hasOwnProperty(prop)) {
                return contacts[i][prop];
            } else {
                return "No such property";
            }
        }
    }
    return "No such contact";

    // Only change code above this line
}

lookUpProfile("Akira", "likes");
/*task 103*/
function randomFraction() {

    // Only change code below this line

    return Math.random(0);

    // Only change code above this line
}

/*task 104*/
function randomWholeNum() {

    // Only change code below this line

    return Math.floor(Math.random() * 10);
}
/*task 105*/
function randomRange(myMin, myMax) {
    // Only change code below this line
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
    // Only change code above this line
}
/*task 106*/
function convertToInteger(str) {
    return parseInt(str);
}
convertToInteger("56");
/*task 107*/
function convertToInteger(str) {
    return parseInt(str, 2)
}

convertToInteger("10011");
/*task 108*/
function checkEqual(a, b) {
    return a === b ? "Equal" : "Not Equal";
}

checkEqual(1, 2);
/*task 108*/
function checkSign(num) {
    return num > 0 ? "positive"
        : num === 0 ? "zero"
            : num < 0 ? "negative" : null;
}

checkSign(10);

/*task 109*/
// Only change code below this line
function countdown(n) {
    if (n < 1) {
        return [];
    } else {
        const countArray = countdown(n -1);
        countArray.unshift(n);
        return countArray;
    }
    return;
}
// Only change code above this line

