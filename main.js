x = 0;
y = 0;
draw_circle = "";
draw_rect = "";

var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start(){
    document.getElementById("status").innerHTML = "$yst3m Ts List3ning, Pl3ase $p3ak";
    recognition.start();
}

recognition.onresult = function(event){

    console.log(event);

    var content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "Th3 $peech Ha$ B33n R3cognised A$ : " +content;
    if(content =="circle"){
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Th3 Circl3 I$ B33n Drawn";
        draw_circle = "set";
    }
    if(content =="rectangle"){
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Th3 R3ctangl3 I$ B33n Drawn";
        draw_rect = "set";
    }
}

function setup(){
    canvas = createCanvas(900, 600);
}

function draw(){
    if(draw_circle =="set"){
        radius = Math.floor(Math.random() * 100);
        circle(x,y,radius);
        document.getElementById("status").innerHTML = "Th3 Circl3 Ha$ B33n Drawn";
        draw_circle = "";
    }
    if(draw_rect =="set"){
        rect(x,y,70,50);
        document.getElementById("status").innerHTML = "Th3 R3ctangl3 Ha$ B33n Drawn";
        draw_rect = "";
    }
}