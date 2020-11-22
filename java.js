function BMI() {
    let h=document.getElementById('h').value;
    let w=document.getElementById('w').value;
    let bmi=w/(h/100*h/100);
    let bmio=(bmi.toFixed(2));

    document.getElementById("result").innerHTML="Your BMI is " + bmio;
}

let audio = new Audio('music/aerohead-path-of-the-fireflies.mp3');
function play1(){
    audio.volume = 0.03
    audio.play();
    }
    