const sounds = ['chirp', 'rain', 'plane', 'wave'];

sounds.forEach((sound) => {
    const btn = document.createElement("button");
    btn.classList.add('btn');
    btn.innerText = sound;
    btn.addEventListener('click', () => {
        // this will stop the ongoing song 
        stopSongs();
        document.getElementById(sound).play();
    });
    document.getElementById('buttons').appendChild(btn);
})

function stopSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound);

        song.pause();
        song.currentTime = 0;
    });
}