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
    arr.splice(0,2, 'DarkSalmon','BlanchedAlmond')
    // Only change code above this line
    return arr;
}

console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));
/*Task 7*/
function forecast(arr) {
    // Only change code below this line
    const newArr = arr.slice(2,4);
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
/*Task 11*/
/*Task 12*/
/*Task 13*/
/*Task 14*/
/*Task 15*/
/*Task 16*/
/*Task 17*/
/*Task 18*/
/*Task 19*/
/*Task 20*/