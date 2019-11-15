// Creating a div Container for Element
var div=document.createElement("div"); 
div.className="container"

//Countdown text
countedownText=document.createTextNode("CountDown");

//The Counter div with default value as 5
counter=document.createElement("div")
counter.id="counter"
counter.innerHTML="5"

// the div for Sec which is type 
type=document.createElement("div")
type.innerHTML="Sec"


//appending the child to Container div Created above
div.appendChild(countedownText)
div.appendChild(counter)
div.appendChild(type)

//find the reference to the Google logo on "google.com" which has Id as "hplogo"
logo=document.getElementById("main")

// inserting our div container just above the logo
logo.insertBefore(div, logo.childNodes[0]); 

//default sec value one extra sec to delay as Dom render take nerly one Sec so title start with no. 4.
//so we are using 6 to make it start with 5
seconds=6

// Update the count down every 1 second by using window.interval function with 1000ms which is 1sec as second parameter
var x = window.setInterval(function() {
    seconds--;
    document.getElementById("counter").innerHTML = seconds; //finding reference to div with counter div
    document.title=seconds;  //changing the title to current seconds as well

    //if the timer reaches to 0 we redirect to news.google.com
    if (seconds == 1) {
        window.location="https://news.google.com/"
        clearInterval(x);
    }
}, 1000);


