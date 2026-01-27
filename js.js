function showSurprise() {
    document.getElementById("surprise").style.display = "block";
    document.getElementById("bgMusic").play();
}
music.volume = 0.4;

function toggleMusic() {
    const music = document.getElementById("bgMusic");
    music.paused ? music.play() : music.pause();
}
