"use strict";
// Exercise 3:  Write a program that checks if a given number is positive, negative, or zero.
function checkNum(num) {
    if (num >= 1) {
        console.log("Its a positive number");
    }
    else if (num < 0) {
        console.log("its a negative number");
    }
    else {
        (num = 0);
        console.log("Zero");
    }
}
// Test the function
checkNum(22);
checkNum(-22);
checkNum(0);
