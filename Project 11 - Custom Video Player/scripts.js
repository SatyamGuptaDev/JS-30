const video = document.querySelector('video');
const toggle = document.querySelector('.toggle');
const volume = document.querySelector('.volume');
const speed = document.querySelector('.speed');
const progress = document.querySelector('.progress');
const progressBar = document.querySelector('.progress__filled');
const skip_ten = document.querySelector('[data-skip="-10"]');
const skip_twentyfive = document.querySelector('[data-skip="25"]');
const player = document.querySelector('.player');

function togglePlay() {
    if(video.classList.contains('play')){
        video.classList.remove('play');
        video.pause();
        toggle.innerHTML = '►';
    }
    else{
        video.classList.add('play');
        video.play();
        toggle.innerHTML = '❚ ❚';
    }
}

function skipTen(){
    video.currentTime = video.currentTime-10;
}
function skipTF(){
    video.currentTime += 25;
}

function volumeChange(){
    video.volume = this.value;
}
function speedChange(){
    video.playbackRate = this.value;
}

function scrub(e){
    const scrubTime = (e.offsetX/progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}

function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}
progressBar.style.flexBasis = '0.01%';
//EventListeners

toggle.addEventListener('click',togglePlay);
video.addEventListener('click',togglePlay);


skip_ten.addEventListener('click', skipTen);
skip_twentyfive.addEventListener('click', skipTF);

volume.addEventListener('change', volumeChange);
speed.addEventListener('change', speedChange);

video.addEventListener("dblclick", function() {
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.mozRequestFullScreen) {
      video.mozRequestFullScreen();
    } else if (video.webkitRequestFullscreen) {
      video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) {
      video.msRequestFullscreen();
    }
});




window.addEventListener('keydown', function(event) {
    if (event.keyCode === 32) {
        if(video.classList.contains('play')){
            video.classList.remove('play');
            video.pause();
            toggle.innerHTML = '►';
        }
        else{
            video.classList.add('play');
            video.play();
            toggle.innerHTML = '❚ ❚';
        }
    }
    if(event.keyCode === 70){
        if (video.requestFullscreen) {
            video.requestFullscreen();
          } else if (video.mozRequestFullScreen) {
            video.mozRequestFullScreen();
          } else if (video.webkitRequestFullscreen) {
            video.webkitRequestFullscreen();
          } else if (video.msRequestFullscreen) {
            video.msRequestFullscreen();
        }
    }
});


let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);
video.addEventListener('timeupdate', handleProgress);