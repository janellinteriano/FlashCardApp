function gameButton(){
    /* here is our timer of 30 seconds */
    var timeleft = 1;
    var downloadTimer = setInterval(function(){
        /* when the timer runs out, reset time */
        if(timeleft <= 0){
            clearInterval(downloadTimer);
            /* will display "time's up" when timer is finished */
            document.getElementById("countdown").innerHTML = "time's up!"
        }
        else{
            /* when timer is still running */
            document.getElementById("countdown").innerHTML = timeleft
        }
        /* means timer is counting down by 1 */
        timeleft -= 1
        /* speed of timer is 1300 */
    }, 1300)
}
