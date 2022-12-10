
console.log("initial test");

// display current day at top of the calender when user opens planner
(function () { // immediately invoked function expression
    console.log("tests current day function IIFE")
    var currentDayEl = $("#currentDay");
    var currentDay = moment().format("dddd Do MMMM YYYY");
    currentDayEl.text(currentDay);
}());