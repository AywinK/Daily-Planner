
console.log("initial test");

// display current day at top of the calender when user opens planner
(function () { // immediately invoked function expression
    console.log("tests current day function IIFE")
    var currentDayEl = $("#currentDay");
    var currentDay = moment().format("dddd Do MMMM YYYY");
    currentDayEl.text(currentDay);
    // adds initial timeblocks generatation here
}());

function getSchedule() {
    return JSON.parse(localStorage.getItem("schedule")) || [];
};

function savesSchedule(arr) {
    localStorage.setItem("schedule", JSON.stringify("arr"));
}

var startOfBusiness = moment("09", "hh").format("h a");
startOfBusiness = 9;
console.log(startOfBusiness);
var endOfBusiness = moment("17", "hh").format("h a");
endOfBusiness = 17;
console.log(endOfBusiness);

var timeblockEl = $("#container");
var timeblockHourArr = [];

for (var i = startOfBusiness; i <= endOfBusiness; i++) {

    timeblockHourArr.push((moment(`${i}`, "h").format("hha")));
    console.log(timeblockHourArr);
    timeblockEl.append("<div></div>");

}

timeblockEl.children().addClass("time-block row d-flex mb-2")

var timeblockArr = $("#container .time-block");
timeblockArr.each(function (index) {
    console.log(index);
    $(this).append(`
    <p>
        ${timeblockHourArr[index]}
    </p>
    <textarea></textarea>
    <button>
    <i></i>
     </button>
    `)
})

timeblockArr.children("p").addClass("hour pt-3 pr-2 pl-5 m-0");
timeblockArr.children("textarea").addClass("flex-grow-1 m-0");
timeblockArr.children("button").addClass("saveBtn")
timeblockArr.children("button").children("i").addClass("fa-solid fa-floppy-disk pr-4")