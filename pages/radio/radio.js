const jit_button = document.getElementById("jit_button");
const shade_button = document.getElementById("shade_button");
const octo_canyon_button = document.getElementById("octo_canyon_button");
const rough_button = document.getElementById("rough_button");

let jit_player = document.getElementById("jit_player");
let shade_player = document.getElementById("shade_player");
let octo_canyon_player = document.getElementById("octo_canyon_player");
let rough_player = document.getElementById("rough_player");

jit_player.style.display = "none";
shade_player.style.display = "none";
octo_canyon_player.style.display = "none";
rough_player.style.display = "none";

function toggle_player(x) {
  switch (x.style.display) {
    case "none":
      x.style.display = "block";
      break;
    case "block":
      x.style.display = "none";
      break;
    default:
      break;
  }
}
//random
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