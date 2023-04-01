function displayTime (){
var dateTime = new Date();
var hrs = dateTime.getHours();
var min = dateTime.getMinutes();
var sec = dateTime.getSeconds();
var session = document.getElementById("session");

if (hrs >=12){
    session.innerHTML = "PM"
}


document.getElementById("hours").innerHTML = hrs;
document.getElementById("minuite").innerHTML = min;
document.getElementById("second").innerHTML = sec;

}
setInterval(displayTime, 10);