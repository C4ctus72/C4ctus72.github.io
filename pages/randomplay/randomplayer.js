let info_button = document.getElementById("info")
info.style.display = "block"
function toggle_message(x) {
    switch (x.style.display) {
      case "none":
        x.style.display = "block";
        break;
      case "block":
          x.style.display = "none"
          break;
          default:
        break;
    }
}

// Albumcovers
// https://splatoonwiki.org/wiki/Octo_Expansion#Music
const dedf1sh = "https://cdn.wikimg.net/en/splatoonwiki/images/thumb/0/01/S2_Band_Dedf1sh.jpg/604px-S2_Band_Dedf1sh.jpg"
const turquise_october = "https://cdn.wikimg.net/en/splatoonwiki/images/thumb/6/6c/S2_Band_Turquoise_October.jpg/610px-S2_Band_Turquoise_October.jpg"
const off_the_hook = "https://cdn.wikimg.net/en/splatoonwiki/images/thumb/c/c6/S2_Band_Off_the_Hook.jpg/623px-S2_Band_Off_the_Hook.jpg"
const squid_sisters = "https://cdn.wikimg.net/en/splatoonwiki/images/thumb/c/c8/S_Band_Squid_Sisters.jpg/605px-S_Band_Squid_Sisters.jpg"
let AlbumCoverHTML = document.getElementById("AlbumCover")
const covers = [dedf1sh, turquise_october, off_the_hook, squid_sisters]
let SongtitleHTML = document.getElementById("SongTitle")
// Song titles
// https://splatoonwiki.org/wiki/Octo_Expansion#Music
let songs_dedf1sh, songs_off_the_hook, songs_turquoise_october, songs_squid_sisters, every_song = new Array()
songs_dedf1sh = ["#0 shell", "#1 progress", "#2 ripped", "#4 dunno", "#5 thirsty", "#6 frisk", "#8 regret", "#9 party", "#11 above", "#12 awake", "#13 shade", "#14 crush", "#16 salty", "#19 bless", "Splattack! (Octo)"]
songs_off_the_hook = ["Nasty Majesty", "Shark Bytes", "Here Comes Ultimate Doom", "Fly Octo Fly ~ Ebb & Flow (Octo)", "Into the Light", "Ebb&FlowDemo.frsh (Sketch)", "#$@%* Dudes Be #$@%* Sleepin' (Live)"]
songs_turquoise_october = ["Octoling Rendezvous"]
songs_squid_sisters = ["Calamari Inkantation (Inner Agent 3)"]

every_song = [songs_dedf1sh, songs_off_the_hook, songs_turquoise_october, songs_squid_sisters]

function getrandom(max = 0, min = every_song.flat().length){
  SongtitleHTML.textContent = every_song.flat()[Math.floor(Math.random() * (max - min) + min)]
  setcover(songs_dedf1sh, dedf1sh)
  setcover(songs_off_the_hook, off_the_hook)
  setcover(songs_turquoise_october, turquise_october)
  setcover(songs_squid_sisters, squid_sisters)
}

function setcover(songs, artist){
  if(songs.includes(SongtitleHTML.textContent)){
    AlbumCoverHTML.src = artist
  }
}

getrandom()