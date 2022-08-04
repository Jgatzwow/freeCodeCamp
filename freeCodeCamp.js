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

/*task 77 - Selecting from Many Options with Switch Statements*/

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