

// ------------------------------ FUNCTION - on initial page load ------------------------------
// display current day at top of the calender when user opens planner and runs functions to generate timeblocks and display information from local storage
(function () { // immediately invoked function expression
    console.log("tests current day function IIFE")
    $("#feedback").hide();
    var currentDayEl = $("#currentDay");
    var currentDay = moment().format("dddd Do MMMM YYYY");
    currentDayEl.text(currentDay);
    // adds initial timeblocks generatation here
    generateHTMLTimeblocks();
    loadsSchedule();
}());

// ------------------------------ GLOBAL FUNCTIONS ------------------------------
// obtains schedule from local storage
function getSchedule() {
    return JSON.parse(localStorage.getItem("schedule")) || [];
};

// saves schedule to local storage
function savesSchedule(arr) {
    localStorage.setItem("schedule", JSON.stringify(arr));
}

// dynamically creates timeblocks in hourly increments which are styled based on current time within the container
function generateHTMLTimeblocks() {
    var startOfBusiness = moment("09", "hh").format("h a");
    startOfBusiness = 9;
    var endOfBusiness = moment("17", "hh").format("h a");
    endOfBusiness = 17;

    var timeblockEl = $("#container");
    var timeblockHourArr = [];

    for (var i = startOfBusiness; i <= endOfBusiness; i++) {

        timeblockHourArr.push((moment(`${i}`, "h").format("hha")));
        timeblockEl.append("<div></div>");

    }

    timeblockEl.children().addClass("time-block row d-flex mb-2")

    var timeblockArr = $("#container .time-block");
    timeblockArr.each(function (index) {
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
    timeblockArr.children("textarea").addClass("flex-grow-1 m-0 description");
    timeblockArr.children("textarea").attr({
        "rows": "3",
        "cols": "10"
    })
    timeblockArr.children("button").addClass("saveBtn")
    timeblockArr.children("button").children("i").addClass("fa-solid fa-floppy-disk pr-4")

    timeblockArr.each(function (index) {
        $(this).children(".saveBtn").data("ScheduleIndex", index);
        console.log($(this).children(".saveBtn").data("ScheduleIndex"));
    });

    var currentHour = moment().format("hha");

    timeblockArr.each(function (index) {
        var isPresentHour = (timeblockHourArr[index] === currentHour);
        var isPast = (moment(timeblockHourArr[index], "hha").isBefore() && !isPresentHour);
        var isFuture = (moment(timeblockHourArr[index], "hha").isAfter());

        switch (true) {
            case (isPast):
                $(this).children("textarea").addClass("past").removeClass("present future");
                break
            case (isFuture):
                $(this).children("textarea").addClass("future").removeClass("present past");
                break
            default:
                $(this).children("textarea").addClass("present").removeClass("past future");
        }

    })

};

// provides user with feedback when save button is pressed
function givesFeedback(userInput) {
    if (userInput.trim()) {
        $("#feedback").text(`Added to local storage - ${userInput}`).fadeIn(1000).fadeOut(4000);
    } else {
        $("#feedback").text("Timeblock cleared").fadeIn(1000).fadeOut(4000);
    }
};

// adds schedule timeblock events from local storage to the dynamically generated HTML timeblock elements
function loadsSchedule() {
    var schedule = getSchedule();
    console.log(schedule);
    var textareaEl = $(".time-block textarea")
    textareaEl.each(function (index) {
        if (schedule[index]) {
            $(this).val(`${schedule[index].trim()}`)
        }
    })
};

// ------------------------------ ALL EVENT LISTENERS ------------------------------
// event listener for each save button press - updates the respective timeblock when save button on the app is pressed
$("button").click(function () {
    var schedule = getSchedule();
    // console.log(schedule);
    var userInput = $(this).prev("textarea").val();
    var index = $(this).data("ScheduleIndex");
    console.log(userInput);
    console.log(index);
    schedule[index] = userInput;
    console.log(schedule);
    savesSchedule(schedule);
    givesFeedback(userInput);
})