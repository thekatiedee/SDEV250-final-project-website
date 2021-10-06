// this calculates the dates elapsed when the button is clicked
function calculateDaysElapsed() {
    var dateToday = new Date();
    var selectedDate = document.getElementById('inputtedDate').value;
    // new date of today
    selectedDateFormatted = new Date(selectedDate);
    var difference = 0;
    var totalDays = 0;
    // multiplication 1000, 60, 60, 24 is to get it out of millisecond format
    // if the date is bigger than the selected date,
    if (dateToday > selectedDateFormatted) {
        difference = dateToday - selectedDateFormatted;
        totalDays = difference / (1000 * 60 * 60 * 24)
        //if the date is smaller than the selected date
    } else {
        difference = selectedDateFormatted - dateToday;
        totalDays = difference / (1000 * 60 * 60 * 24) 
    }
    //to two decimal places
    totalDaysFixed = totalDays.toFixed(2);


    // print to the page
    document.getElementById('printElapsed').innerHTML = totalDaysFixed + ' days have elapsed.'

}