let playingsong = document.getElementById("playingsong")
let player = document.getElementById("player")
if (playingsong.checked == true) {}
const nightlight = {
    name: "Nightlight",
    artist: "Saruky",
    link: "https://www.youtube.com/watch?v=iHEL3iHdu2A",
    source: "https://hactuss.github.io/script/songs/Nightlight (Menu Music) - FNF_ Hotline 024 (The Medley Update) [ ezmp3.cc ].mp3"

}
const heliocentri_city = {
    name: "Heliocentri City",
    artist: "Splatoon",
    link: "https://www.youtube.com/watch?v=R9EhyQ4lMf8",
    source: "https://hactuss.github.io/script/songs/Heliocentri City - Splatoon 3 OST.mp3",
}

const list = [heliocentri_city, nightlight]
function pickrandom() {
    const random = list[Math.floor(Math.random() * list.length)];
    playingsong.textContent = random.name + " by " +  random.artist;
    playingsong.href = random.link;
    player.src = random.source;
}
pickrandom()