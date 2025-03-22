function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);

    let nameday = getDayName(today.getDay());
    let day = today.getDate();
    let month = getMonthName(today.getMonth());
    let year = today.getFullYear();

    document.getElementById("clock").textContent = h + ":" + m + ":" + s;
    document.getElementById("date").textContent = nameday + " - " + month + " " + day + ", " + year;
    setTimeout(startTime, 1000);
}

function checkTime(i){
    if (i<10) {
        i = "0" + i;
    }
    return i;
}

function getDayName(day){
    switch(day){
        case 0:
            return "Sunday";
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
    }

}

function getMonthName(month){
    switch(month){
        case 0:
            return "January";
        case 1:
            return "February";
        case 2:
            return "March";
        case 3:
            return "April";
        case 4:
            return "May";
        case 5:
            return "June";
        case 6:
            return "July";
        case 7:
            return "August";
        case 8:
            return "September";
        case 9:
            return "October";
        case 10:
            return "November";
        case 11:
            return "December";
    }
}

export { startTime }