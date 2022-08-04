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