/*1*/
// Only change code below this line
const tea4TeamFCC = getTea(40)
// Only change code above this line
/*2*/
const tea4GreenTeamFCC = getTea(prepareGreenTea, 27);
const tea4BlackTeamFCC = getTea(prepareBlackTea, 13);
/*3*/

const tabsBeforeIndex = this.tabs.splice(0, index); // Get the tabs before the tab
const tabsAfterIndex = this.tabs.splice(1, index +2); // Get the tabs after the tab

this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // Join them together
/*4*/
const newFixedValue = fixedValue +1
return newFixedValue
/*5*/
// The global variable
let fixedValue = 4;

// Only change code below this line
function incrementer(fixedValue) {
    return fixedValue + 1;

    // Only change code above this line
}
/*6*/
// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add(bookList, bookName) {
    const newBookList = [...bookList];
    newBookList.push(bookName);
    return newBookList;

    // Change code above this line
}

// Change code below this line
function remove(bookList, bookName) {
    const newBookList1 = [...bookList];
    const book_index = newBookList1.indexOf(bookName);
    if (book_index >= 0) {

        newBookList1.splice(book_index, 1);
        return newBookList1;

        // Change code above this line
    }
}
/*7*/
// Only change code below this line
const ratings = watchList.map(item => ({
    title: item.Title,
    rating: item.imdbRating,
}));

/*8*/
// The global variable
const s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback) {
    const newArray = [];
    // Only change code below this line
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i]));
    }
    // Only change code above this line
    return newArray;
};

const new_s = s.myMap(function(item) {
    return item * 2;
});
/*9*/
// Only change code below this line

const filteredList1 = watchList.map((item) => ({
    title: item.Title,
    rating: item.imdbRating,
}));

const filteredList = filteredList1.filter( item => item.rating > 8.0)
// Only change code above this line
/*10*/
// The global variable
const s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback) {
    // Only change code below this line
    const newArray = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i]) === true) {
            newArray.push(this[i]);
        }}
    // Only change code above this line
    return newArray;
};

const new_s = s.myFilter(function(item) {
    return item % 2 === 1;
});
/*11*/
function sliceArray(anim, beginSlice, endSlice) {
    // Only change code below this line
    const newArr = anim.slice(beginSlice, endSlice)
    return newArr
    // Only change code above this line
}

const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
sliceArray(inputAnim, 1, 3);
/*12*/
function nonMutatingSplice(cities) {
    // Only change code below this line
    return cities.slice(0, 3);

    // Only change code above this line
}

const inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
nonMutatingSplice(inputCities);
/*13*/
function nonMutatingConcat(original, attach) {
    // Only change code below this line

    const newArr = original.concat(attach);
    return newArr
    // Only change code above this line
}

const first = [1, 2, 3];
const second = [4, 5];
nonMutatingConcat(first, second);
/*14*/
function nonMutatingPush(original, newItem) {
    // Only change code below this line
    const newArr = original.concat(newItem);
    return newArr;

    // Only change code above this line
}

const first = [1, 2, 3];
const second = [4, 5];
nonMutatingPush(first, second);
/*15*/
/*16*/
/*17*/
/*18*/
/*19*/
/*20*/
/*21*/
/*22*/