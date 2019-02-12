"use strict";
// Uses strict mode.
/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 4

   Countdown Clock for Ticket Ordering
   Author: Ryan Wahl
   Date:  2.12.19

   Filename:   ph_clock.js     

*/
// The minsLeft variable stores the number of minutes left.
var minsLeft = 30;
// The secsLeft variable stores the number of seconds left.
var secsLeft = 0;

// The timeLeft variable stores the total time left in seconds.
var timeLeft = minsLeft * 60 + secsLeft;

// Run the countDown() function every second. (Stored in the clockID variable);
var clockID = setInterval("countDown()", 1000);

// Defines a new function named countDown
function countDown() {
    // Calculates the number of minutes left and sets it.
    minsLeft = Math.floor(timeLeft / 60);
    // Calculates the number of seconds left and sets it.
    secsLeft = timeLeft - (60 * minsLeft);
    // Adds a zero in front of the minutes if there are less than 10.
    var minsString = addLeadingZero(minsLeft);
    // Adds a zero in front of the seconds if there are less that 10.
    var secsString = addLeadingZero(secsLeft);
    // Gets the element with the id of minutes and sets the text content to the minutes string.
    document.getElementById("minutes").textContent = minsString;
    // Gets the element with the id of seconds and sets the text content to the seconds string.
    document.getElementById("seconds").textContent = secsString;
    // Runs the checkTimer() function.
    checkTimer();
    // Subtracts one from the time left.
    timeLeft--;
}

// The stop clock function
function stopClock() {
    // Adds in a Order Expired message at the end of the TimeHead element.
    document.getElementById('TimeHead').insertAdjacentHTML('beforeend', "<br />(Order Expired)");
    // Stops the time Interval stored in the clockID variable. (Defined on line 24).
    clearInterval(clockID);
}

/* ------------------------------------------------- */


/* The checkTimer() function tests whether there is any time left to make the
   ticket order. If the time left is 0, the stopClock() function is run;
   otherwise nothing happens and the program continues to run. */

function checkTimer() {
    if (timeLeft === 0) stopClock();
}


/* The addLeadingZero() function adds a leading zero to values which are less than 10 */

function addLeadingZero(num) {
    var numStr = (num < 10) ? ("0" + num) : "" + num;
    return numStr;
}