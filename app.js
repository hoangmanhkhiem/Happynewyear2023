var fut = new Date("jan 12, 2023 13:29:00").getTime()
let x = setInterval(function stime(){
    var now = new Date().getTime()
    var D = fut - now
    var days = Math.floor(D/(1000*60*60*24))
    var hours = Math.floor(D/(1000*60*60))
    var minutes = Math.floor(D/(1000*60))
    var seconds = Math.floor(D/(1000))
    hours %=24
    minutes %=60
    seconds %=60
    document.getElementById("days").innerText = days
    document.getElementById("hours").innerText = hours
    document.getElementById("minutes").innerText = minutes
    document.getElementById("seconds").innerText = seconds

    if(D<0){
        clearInterval(x);
        window.location.href="intro.html"
    }
}, 0.1);
