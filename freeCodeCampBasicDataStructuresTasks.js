/*Task 1*/
let yourArray = [
    "string", 2, true, null, "string"
]
/*Task 2*/
let myArray = ["a", "b", "c", "d"];
// Only change code below this line
myArray[1] = "anything"
// Only change code above this line
console.log(myArray);

/*Task 3*/
function mixedNumbers(arr) {
    // Only change code below this line
    arr.push(7, 'VIII', 9);
    arr.unshift('I', 2, 'three');
    // Only change code above this line
    return arr;
}

console.log(mixedNumbers(['IV', 5, 'six']));

/*Task 4*/
function popShift(arr) {
    let popped = arr.pop();
    let shifted = arr.shift();
    return [shifted, popped];
}

console.log(popShift(['challenge', 'is', 'not', 'complete']));
/*Task 5*/
const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// Only change code below this line
arr.splice(1, 4);
// Only change code above this line
console.log(arr);

/*Task 6*/
function htmlColorNames(arr) {
    // Only change code below this line
    arr.splice(0, 2, 'DarkSalmon', 'BlanchedAlmond')
    // Only change code above this line
    return arr;
}

console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));

/*Task 7*/
function forecast(arr) {
    // Only change code below this line
    const newArr = arr.slice(2, 4);
    return newArr;
}

// Only change code above this line
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));

/*Task 8*/
function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
        // Only change code below this line
        newArr.push([...arr])
        // Only change code above this line
        num--;
    }
    return newArr;
}

console.log(copyMachine([true, false, true], 2));

/*Task 9*/
function spreadOut() {
    let fragment = ['to', 'code'];
    let sentence = ['learning', ...fragment, 'is', 'fun']
    return sentence;
}

console.log(spreadOut());

/*Task 10*/
function quickCheck(arr, elem) {
    // Only change code below this line

    if (arr.indexOf(elem) >= 0) {
        return true;
    }
    return false;

    // Only change code above this line
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));

/*Task 11*/
function filteredArray(arr, elem) {
    let newArr = [];
    // Only change code below this line

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].indexOf(elem) == -1) {
            newArr.push(arr[i]);
        }
    }

    // Only change code above this line
    return newArr;
}

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));
/*Task 12*/
let myNestedArray = [
    // Only change code below this line
    ['unshift', false, 1, 2, 3, 'complex', 'nested'],
    ['loop', 'shift', 6, 7, 1000, ['deep']],
    ['concat', false, true, 'spread', [['deeper']]],
    ['mutate', 1327.98, 'splice', 'slice', [[['deepest']]],
        ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth']
        // Only change code above this line
    ]];
/*Task 13*/
let foods = {
    apples: 25,
    oranges: 32,
    plums: 28
};

// Only change code below this line
foods.bananas = 13;
foods.grapes = 35;
foods.strawberries  = 27;
// Only change code above this line

console.log(foods);
/*Task 14*/
let userActivity = {
    id: 23894201352,
    date: 'January 1, 2017',
    data: {
        totalUsers: 51,
        online: 42
    }
};

// Only change code below this line
userActivity.data.online = 45;
// Only change code above this line

console.log(userActivity);
/*Task 15*/
let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
};

function checkInventory(scannedItem) {
    // Only change code below this line
    return foods[scannedItem];
    // Only change code above this line
}

console.log(checkInventory("apples"));
/*Task 16*/
let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
};

// Only change code below this line
delete foods.oranges;
delete foods.plums;
delete foods.strawberries ;
// Only change code above this line

console.log(foods);
/*Task 17*/
function isEveryoneHere(userObj) {
    // Only change code below this line

    return ["Alan", "Jeff", "Sarah", "Ryan"].every(name =>
        userObj.hasOwnProperty(name)
    );

    // Only change code above this line
}

console.log(isEveryoneHere(users));
/*Task 18*/

function countOnline(usersObj) {
    // Only change code below this line
    let result = 0;
    for (let user in usersObj) {
        if (usersObj[user].online === true) {
            result++;
        }
    }
    return result;
    // Only change code above this line
}
/*Task 19*/
function getArrayOfUsers(obj) {
    // Only change code below this line
    return Object.keys(obj)
    // Only change code above this line
}

console.log(getArrayOfUsers(users));
/*Task 20*/
function addFriend(userObj, friend) {
    // Only change code below this line
    userObj.data.friends.push(friend)
    return userObj.data.friends
    // Only change code above this line
}

console.log(addFriend(user, 'Pete'));