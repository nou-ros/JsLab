// here most video methods, properties and events are simple manupulated by js

// 1
const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

// 3
// play and pause video
function toggleVideoStatus(){
    // return true;
    if(video.paused)
    {
        video.play();
    }else{
        video.pause();
    }
}

// 4
// update play/pause icon
function updatePlayIcon(){
    // return true;
    if(video.paused){
        play.innerHTML = '<i class="fa fa-play-circle fa-2x"></i>';
    }
    else{
        play.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
    }
    
}

// 6
// update progress & timestamp
function updateProgress()
{
    // return true;
    // console.log(video.currentTime);
    // console.log(video.duration);

    progress.value = (video.currentTime/video.duration) * 100;


    //Get minutes
    let mins = Math.floor(video.currentTime/60)
    if(mins<10)
    {
        mins = '0' + String(mins);
    }

    //Get secs
    let secs = Math.floor(video.currentTime%60);
    if(secs<10){
        secs = '0' + String(secs);
    }

    timestamp.innerHTML = `${mins}:${secs}`;
}

// 7
// set video time to progress
function setVideoProgress()
{
    // return true;
    video.currentTime =+ (progress.value* video.duration)/100;
}


// 5
// stop video 
function stopVideo()
{
    // set video time to 0 and pause it
    video.currentTime = 0;
    video.pause();
}


// 2
//Event listeners
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);


play.addEventListener('click', toggleVideoStatus);

stop.addEventListener('click', stopVideo);

progress.addEventListener('change', setVideoProgress);