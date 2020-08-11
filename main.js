let fillerText;
let interactableVids;

window.onload = () => {
    randomizeFillerSize();
    flashingLive();
    onVideoEnd();
}

function onVideoEnd() {
    const mainVid = document.querySelector("#top-main-i-video");
    mainVid.children[0].onended = () => {
        nextVideo();
    }
}

function randomizeFillerSize() {
    fillerText = document.querySelectorAll(".filler-text");
    for(const filler of fillerText) {
        const charNum = filler.parentElement.clientWidth / 50;
        filler.innerHTML = '#'.repeat(getRandomInt(30, 40 +charNum));
        filler.style.fontSize = (getRandomArbitrary(0.6, 1.5)) + "em";
    }

}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function nextVideo() {
    interactableVids = document.querySelectorAll(".i-video-container");
    const vids = [...interactableVids];
    console.log(vids);
    const vidSources = vids.map(a => a.children[0].currentSrc);
    console.log(vidSources);
    let i = 1;
    for(vid of vids) {
        vid.children[0].src = vidSources[i];
        i = i < vidSources.length - 1 ? i+=1 : 0;
    }
    playVideo();
}

function playVideo() {
    const mainVid = document.querySelector("#top-main-i-video");
    mainVid.children[0].play();
}

function flashingLive() {
    const liveLogo = document.querySelector("#live-logo");
    setInterval(() => {
        console.log('live');
        liveLogo.style.visibility = liveLogo.style.visibility === 'hidden' ? 'visible' : 'hidden';
    }, 500);
}