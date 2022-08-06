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
/*9*/
/*10*/
/*11*/
/*12*/
/*13*/
/*14*/
/*15*/
/*16*/
/*17*/
/*18*/
/*19*/
/*20*/
/*21*/
/*22*/