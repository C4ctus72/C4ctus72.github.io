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
const covers = [dedf1sh, turquise_october, off_the_hook, squid_sisters]
let AlbumCoverHTML = document.getElementById("AlbumCover")
let SongtitleHTML = document.getElementById("SongTitle")
let AudioHTML = document.getElementById("Audio")
// Song titles
// https://splatoonwiki.org/wiki/Octo_Expansion#Music
let songs_dedf1sh, songs_off_the_hook, songs_turquoise_october, songs_squid_sisters, every_song = new Array()
songs_dedf1sh_sting = ["#0 shell", "#1 progress", "#2 ripped", "#4 dunno", "#5 thirsty", "#6 frisk", "#8 regret", "#9 party", "#11 above", "#12 awake", "#13 shade", "#14 crush", "#16 salty", "#19 bless", "Splattack! (Octo)"]
songs_off_the_hook_string = ["Nasty Majesty", "Shark Bytes", "Here Comes Ultimate Doom", "Fly Octo Fly ~ Ebb & Flow (Octo)", "Into the Light", "Ebb&FlowDemo.frsh (Sketch)", "#$@%* Dudes Be #$@%* Sleepin' (Live)"]
songs_turquoise_october_string = ["Octoling Rendezvous"]
songs_squid_sisters_string = ["Calamari Inkantation (Inner Agent 3)"]



const shell = "https://cdn.wikimg.net/en/splatoonwiki/images/f/f9/OE_0_shell.mp3"
const progress = "https://cdn.wikimg.net/en/splatoonwiki/images/4/4c/OE_1_progress.mp3"
const ripped = "https://cdn.wikimg.net/en/splatoonwiki/images/c/cd/OE_2_ripped.mp3"
const dunno = "https://cdn.wikimg.net/en/splatoonwiki/images/7/72/OE_4_dunno.mp3"
const thirsty = "https://cdn.wikimg.net/en/splatoonwiki/images/f/f7/OE_5_thirsty.mp3"
const frisk = "https://cdn.wikimg.net/en/splatoonwiki/images/8/87/OE_6_frisk.mp3"
const regret = "https://cdn.wikimg.net/en/splatoonwiki/images/9/9b/OE_8_regret.mp3"
const party = "https://cdn.wikimg.net/en/splatoonwiki/images/2/2c/OE_9_party.mp3"
const above = "https://cdn.wikimg.net/en/splatoonwiki/images/c/ce/OE_11_above.mp3"
const awake = "https://cdn.wikimg.net/en/splatoonwiki/images/3/3f/OE_12_awake.mp3"
const shade = "https://cdn.wikimg.net/en/splatoonwiki/images/c/c2/OE_13_shade.mp3"
const salty = "https://cdn.wikimg.net/en/splatoonwiki/images/8/82/OE_16_salty.mp3"
const bless = "https://cdn.wikimg.net/en/splatoonwiki/images/e/e0/OE_19_bless.mp3"
const Splattack_Octo = "https://cdn.wikimg.net/en/splatoonwiki/images/0/0e/OE_Splattack%21_%28Octo%29.mp3"

const Calamari_Inkarnation = "https://cdn.wikimg.net/en/splatoonwiki/images/b/b5/ShowdownWithInnerAgent3.mp3"


every_song_string = [songs_dedf1sh_string, songs_off_the_hook_string, songs_turquoise_october_string, songs_squid_sisters_string]

function getrandom(max = 0, min = every_song.flat().length){
  SongtitleHTML.textContent = every_song.flat()[Math.floor(Math.random() * (max - min) + min)]
  setcover(songs_dedf1sh, dedf1sh)
  setcover(songs_off_the_hook, off_the_hook)
  setcover(songs_turquoise_october, turquise_october)
  setcover(songs_squid_sisters, squid_sisters)
}

function setcover(songs, artist, songlist){
  if(songs.includes(SongtitleHTML.textContent)){
    AlbumCoverHTML.src = artist
    AudioHTML.src = songlist
  }
}

getrandom()