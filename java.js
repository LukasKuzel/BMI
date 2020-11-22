function BMI() {
    var h=document.getElementById('h').value;
    var w=document.getElementById('w').value;
    var bmi=w/(h/100*h/100);
    var bmio=(bmi.toFixed(2));

    document.getElementById("result").innerHTML="Your BMI is " + bmio;
}

var audio = new Audio('music/aerohead-path-of-the-fireflies.mp3');
function play1(){
    audio.volume = 0.03
    audio.play();
    }
    