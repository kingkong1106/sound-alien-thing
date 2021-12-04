function start_classification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/Ot7fHu0V6/model.json',modelReady);

}
function modelReady()
{
    classifier.classify(gotResults);
}
function gotResults(error, results)
{
    console.log('gotResult');
    if(error)
    {
        console.error(error);
    }else{
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;
        document.getElementById("result-label").innerHTML = 'I can hear - ' + results[0].label;
        document.getElementById("result_confidence").innerHTML = 'accuracy - ' + (results[0].confidence*100).toFixed(2) + "%";
        document.getElementById("result-label").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_r + ")";
        document.getElementById("result-confidence").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_r + ")";
        img1 = document.getElementById('alien_1');
        img2 = document.getElementById('alien_2');
        img3 = document.getElementById('alien_3');
        img4 = document.getElementById('alien_4');
    if(results[0].label == "Alarm"){
        img1.src = 'aliens-01.gif';
        img2.src = 'aliens-02.png';
        img3.src = 'aliens-03.png';
        img4.src = 'aliens-04.png';
    }else if(results[0].label == "Bell tower"){
        img1.src = 'aliens-01.png';
        img2.src = 'aliens-02.gif';
        img3.src = 'aliens-03.png';
        img4.src = 'aliens-04.png';
    }else if(results[0].label == "Harp"){
        img1.src = 'aliens-01.png';
        img2.src = 'aliens-02.png';
        img3.src = 'aliens-03.gif';
        img4.src = 'aliens-04.png';
    }else if(results[0].label == "Silk"){
        img1.src = 'aliens-01.png';
        img2.src = 'aliens-02.png';
        img3.src = 'aliens-03.png';
        img4.src = 'aliens-04.gif';
    }else{
        img1.src = 'aliens-01.gif';
        img2.src = 'aliens-02.gif';
        img3.src = 'aliens-03.gif';
        img4.src = 'aliens-04.gif';
    }

    


        }
}
