let colorInterval;

function changeBackgroundColor() {
    document.body.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 80%)`;
}

function startBackgroundAnimation() {
    colorInterval = setInterval(changeBackgroundColor, 1000);
}

function stopBackgroundAnimation() {
    clearInterval(colorInterval);
}

function Surprise() {
   
    document.querySelector('.surprise_btn').classList.add('hidden'); 
    document.getElementById('surpriseSection').classList.remove('hidden');

   
    startBackgroundAnimation();

    
    const song = document.getElementById("song");
    song.loop = true; 
    song.play().then(() => {
        console.log("Music started!");
    }).catch(error => {
        console.log("Auto-play blocked. User needs to interact first.", error);
    });
}


document.getElementById("disk").addEventListener("click", function() {
    const song = document.getElementById("song");
    if (song.paused) {
        song.play();
        startBackgroundAnimation();
        this.classList.add("rotate");
    } else {
        song.pause();
        stopBackgroundAnimation();
        this.classList.remove("rotate");
    }
});

