// Display current date using Moment.js
var today = moment().format("MMM DD, YYYY");
$("#currentDay").text(today);

// The setItem() method using key name and value updates local storage
var container = $(".container").click(function (event) {

    if (event.target.nodeName === "I") {

        var buttonId = event.target.attributes[0].nodeValue;
        var inputValue = $("." + buttonId).val()
        localStorage.setItem(buttonId, inputValue);
    }
})

// The getItem() method returns key value in local storage
$(".9am").val(localStorage.getItem("9am"));
$(".10am").val(localStorage.getItem("10am"));
$(".11am").val(localStorage.getItem("11am"));
$(".12pm").val(localStorage.getItem("12pm"));
$(".1pm").val(localStorage.getItem("1pm"));
$(".2pm").val(localStorage.getItem("2pm"));
$(".3pm").val(localStorage.getItem("3pm"));
$(".4pm").val(localStorage.getItem("4pm"));
$(".5pm").val(localStorage.getItem("5pm"));

// 
$(".entry-item").each(function (event) {
    console.log(this);
    var blockTime = $(this).data("time")
    console.log(blockTime);
    var currentTime = moment().format("HH");
    console.log(currentTime);
    if (currentTime > blockTime) {
        $(this).addClass("past")
    } else if (currentTime == blockTime) {
        $(this).addClass("present")
    } else {

        $(this).addClass("future")
    }
})



