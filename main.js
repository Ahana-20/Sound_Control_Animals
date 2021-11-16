function start(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classify = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/WJIEikhw7/model.json",modelReady);

}

function modelReady(){
    classify.classify(gotResults);
}

function gotResults(error,results){
    if (error){
        console.error(error);
    }
    else {
        console.log(results);
        R = Math.floor(Math.random()*255)+1;
        G = Math.floor(Math.random()*255)+1;
        B = Math.floor(Math.random()*255)+1;

        document.getElementById("label").innerHTML = "I can hear : "+results[0].label;
        document.getElementById("resultAcc").innerHTML = "Accuracy is : "+(results[0].confidence*100).toFixed(2)+" % ";
        document.getElementById("label").style.color = "rgb("+R+","+G+","+B+")";
        document.getElementById("resultAcc").style.color = "rgb("+R+","+G+","+B+")";
    }
    img = document.getElementById("dog");
    img2 = document.getElementById("boi");
    img3 = document.getElementById("palmDude");
    img4 = document.getElementById("pandaaaaa");

    if (results[0].label=="Clap"){
        img3.src = "palmDudeGIf.gif";
        img.src = "dog1.png";
        img2.src = "boi1.png";
        img4.src = "pandaaaaa1.png";
    }
    else if (results[0].label=="Snap"){
        img3.src = "palmDude1.png";
        img.src = "dog1.png";
        img2.src = "boi1.png";
        img4.src = "pandaaaGif.gif";
    }
    else if (results[0].label=="Bell"){
        img3.src = "palmDude1.png";
        img.src = "dog1.png";
        img2.src = "boi1.png";
        img4.src = "pandaaaGif.gif";
     }
     else if (results[0].label=="Humm"){
        img3.src = "palmDude1.png";
        img.src = "dogGif.gif";
        img2.src = "boi1.png";
        img4.src = "pandaaaGif.png";
     }
}

