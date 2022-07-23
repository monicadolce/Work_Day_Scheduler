// Display current date using Moment.js.
var today = moment().format("MMM DD, YYYY");
$("#currentDay").text(today);

// The setItem() method using key name and value updates local storage.
var container = $(".container").click(function (event) {

    if (event.target.nodeName === "I") {

        var buttonId = event.target.attributes[0].nodeValue;
        var inputValue = $("." + buttonId).val()
        localStorage.setItem(buttonId, inputValue);
    }
})

// The getItem() method returns key value in local storage.
$(".9am").val(localStorage.getItem("9am"));
$(".10am").val(localStorage.getItem("10am"));
$(".11am").val(localStorage.getItem("11am"));
$(".12pm").val(localStorage.getItem("12pm"));
$(".1pm").val(localStorage.getItem("1pm"));
$(".2pm").val(localStorage.getItem("2pm"));
$(".3pm").val(localStorage.getItem("3pm"));
$(".4pm").val(localStorage.getItem("4pm"));
$(".5pm").val(localStorage.getItem("5pm"));

// The each() method allows to loop through elements in the JQuery collection; 'this' is a keyword and refers to the element.
$(".entry-item").each(function (event) {
    console.log(this);
// The data() method attaches data to DOM elements.
    var blockTime = $(this).data("time")
    console.log(blockTime);
// Moment.js formats the hour into 24-hour format.
    var currentTime = moment().format("HH");
    console.log(currentTime);
// If and else statement to display color coded time blocks
    if (currentTime > blockTime) {
// The addClass() method adds class names to the selected elements.
        $(this).addClass("past")
    } else if (currentTime == blockTime) {
        $(this).addClass("present")
    } else {

        $(this).addClass("future")
    }
})



