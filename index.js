var blackColor= document.getElementById("color-1");
var redColor= document.getElementById("color-2");
var purpleColor= document.getElementById("color-3");
var pinkColor= document.getElementById("color-4");
var blueColor = document.getElementById("color-5");
var watchImage=document.getElementById("watch");

var dateTime= document.getElementById("time");
var timeText= document.getElementById("time-text");
var heartRate= document.getElementById("heart-rate");
var rateHeart= document.getElementById("heartRate");

blackColor.addEventListener('click',function(){
    watchImage.src='./images/black.png';
    watchImage.alt="smart-watch-black";
});

redColor.addEventListener('click',function(){
    watchImage.src='./images/red.png';
    watchImage.alt="smart-watch-red";
});

purpleColor.addEventListener('click',function(){
    watchImage.src='./images/purple.png';
    watchImage.alt="smart-watch-purple";
});

pinkColor.addEventListener('click',function(){
    watchImage.src='./images/pink.png';
    watchImage.alt="smart-watch-pink";
});

blueColor.addEventListener('click',function(){
    watchImage.src='./images/blue.png';
    watchImage.alt="smart-watch-blue";
});

dateTime.addEventListener('click',function(){
    rateHeart.style.display="none";
    timeText.style.display = "block";
    timeText.innerHTML= Time();
    timeText.innerHTML = "The time is being displayed!!";
  });

heartRate.addEventListener('click',function(){
    timeText.style.display = "none";
    rateHeart.style.display = "block";
    rateHeart.innerHTML="THE HEART RATE IS: "+89;
});

function Time() {
    // Creating object of the Date class
    var date = new Date();
    // Get current hour
    var hour = date.getHours();
    // Get current minute
    var minute = date.getMinutes();
    // Get current second
    var second = date.getSeconds();
    // Variable to store AM / PM
    var period = "";
    // Assigning AM / PM according to the current hour
    if (hour >= 12) {
    period = "PM";
    } else {
    period = "AM";
    }
    // Converting the hour in 12-hour format
    if (hour == 0) {
    hour = 12;
    } else {
    if (hour > 12) {
    hour = hour - 12;
    }
    }
    // Updating hour, minute, and second
    // if they are less than 10
    hour = update(hour);
    minute = update(minute);
    second = update(second);
    // Adding time elements to the div
    document.getElementById("digital-clock").innerText = hour + " : " + minute + " : " + second + " " + period;
    // Set Timer to 1 sec (1000 ms)
    setTimeout(Time, 1000);
   }
    // Function to update time elements if they are less than 10
    // Append 0 before time elements if they are less than 10
   function update(t) {
    if (t < 10) {
    return "0" + t;
    }
    else {
    return t;
    }
   }
   Time();
  