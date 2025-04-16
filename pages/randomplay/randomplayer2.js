// randomplayer with objects (or maps idk)

// Infobutton
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


// HTML links
let AlbumCoverHTML = document.getElementById("AlbumCover")
let SongtitleHTML = document.getElementById("SongTitle")
let AudioHTML = document.getElementById("Audio")
let PausePlay = document.getElementById("PausePlay")

// Albumcovers
// https://splatoonwiki.org/wiki/Octo_Expansion#Music
const dedf1sh_cover = "https://cdn.wikimg.net/en/splatoonwiki/images/thumb/0/01/S2_Band_Dedf1sh.jpg/604px-S2_Band_Dedf1sh.jpg"
const turquise_october_cover = "https://cdn.wikimg.net/en/splatoonwiki/images/thumb/6/6c/S2_Band_Turquoise_October.jpg/610px-S2_Band_Turquoise_October.jpg"
const off_the_hook_cover = "https://cdn.wikimg.net/en/splatoonwiki/images/thumb/c/c6/S2_Band_Off_the_Hook.jpg/623px-S2_Band_Off_the_Hook.jpg"
const squid_sisters_cover = "https://cdn.wikimg.net/en/splatoonwiki/images/thumb/c/c8/S_Band_Squid_Sisters.jpg/605px-S_Band_Squid_Sisters.jpg"

//Audios
const shell_audio = "https://cdn.wikimg.net/en/splatoonwiki/images/f/f9/OE_0_shell.mp3"
const progress_audio = "https://cdn.wikimg.net/en/splatoonwiki/images/4/4c/OE_1_progress.mp3"
const ripped_audio = "https://cdn.wikimg.net/en/splatoonwiki/images/c/cd/OE_2_ripped.mp3"
const dunno_audio = "https://cdn.wikimg.net/en/splatoonwiki/images/7/72/OE_4_dunno.mp3"
const thirsty_audio = "https://cdn.wikimg.net/en/splatoonwiki/images/f/f7/OE_5_thirsty.mp3"
const frisk_audio = "https://cdn.wikimg.net/en/splatoonwiki/images/8/87/OE_6_frisk.mp3"
const regret_audio = "https://cdn.wikimg.net/en/splatoonwiki/images/9/9b/OE_8_regret.mp3"
const party_audio = "https://cdn.wikimg.net/en/splatoonwiki/images/2/2c/OE_9_party.mp3"
const above_audio = "https://cdn.wikimg.net/en/splatoonwiki/images/c/ce/OE_11_above.mp3"
const awake_audio = "https://cdn.wikimg.net/en/splatoonwiki/images/3/3f/OE_12_awake.mp3"
const shade_audio = "https://cdn.wikimg.net/en/splatoonwiki/images/c/c2/OE_13_shade.mp3"
const crush_audio = "https://cdn.wikimg.net/en/splatoonwiki/images/4/4a/OE_14_crush.mp3"
const salty_audio = "https://cdn.wikimg.net/en/splatoonwiki/images/8/82/OE_16_salty.mp3"
const bless_audio = "https://cdn.wikimg.net/en/splatoonwiki/images/e/e0/OE_19_bless.mp3"
const Splattack_Octo_audio = "https://cdn.wikimg.net/en/splatoonwiki/images/0/0e/OE_Splattack%21_%28Octo%29.mp3"
const Calamari_Inkarnation_audio = "https://cdn.wikimg.net/en/splatoonwiki/images/b/b5/ShowdownWithInnerAgent3.mp3"

songs_dedf1sh_sting = ["#0 shell", "#1 progress", "#2 ripped", "#4 dunno", "#5 thirsty", "#6 frisk", "#8 regret", "#9 party", "#11 above", "#12 awake", "#13 shade", "#14 crush", "#16 salty", "#19 bless", "Splattack! (Octo)"]
songs_off_the_hook_string = ["Nasty Majesty", "Shark Bytes", "Here Comes Ultimate Doom", "Fly Octo Fly ~ Ebb & Flow (Octo)", "Into the Light", "Ebb&FlowDemo.frsh (Sketch)", "#$@%* Dudes Be #$@%* Sleepin' (Live)"]
songs_turquoise_october_string = ["Octoling Rendezvous"]
songs_squid_sisters_string = ["Calamari Inkantation (Inner Agent 3)"]





const songs = {
    //Dedf1sh songs
    "1": {
        name: "#0 shell",
        artist: "Dedf1sh",
        audio: shell_audio
    },
    "2": {
        name: "#1 progress",
        artist: "Dedf1sh",
        audio: progress_audio
    },
    "3": {
        name: "#2 ripped",
        artist: "Dedf1sh",
        audio: ripped_audio
    },
    "4": {
        name: "#4 dunno",
        artist: "Dedf1sh",
        audio:dunno_audio
    },
    "5": {
        name: "#5 thirsty",
        artist: "Dedf1sh",
        audio:thirsty_audio
    },
    "6": {
        name: "#6 frisk",
        artist: "Dedf1sh",
        audio:frisk_audio
    },
    "7": {
        name: "#8 regret",
        artist: "Dedf1sh",
        audio:regret_audio
    },
    "8": {
        name: "#9 party",
        artist: "Dedf1sh",
        audio:party_audio
    },
    "9": {
        name: "#11 above",
        artist: "Dedf1sh",
        audio:above_audio
    },
    "10": {
        name: "#12 awake",
        artist: "Dedf1sh",
        audio:awake_audio
    },
    "11": {
        name: "#13 shade",
        artist: "Dedf1sh",
        audio:shade_audio
    },
    "12": {
        name: "#14 crush",
        artist: "Dedf1sh",
        audio:crush_audio
    },
    "13": {
        name: "#16 salty",
        artist: "Dedf1sh",
        audio:salty_audio
    },
    "14": {
        name: "#19 bless",
        artist: "Dedf1sh",
        audio:bless_audio
    },
    "15": {
        name: "Splattack! (Octo)",
        artist: "Dedf1sh",
        audio:Splattack_Octo_audio
    },
    // Off The Hook songs
    "16": {
        name: "Nasty Majesty",
        artist: "Off The Hook",
    },
    "17": {
        name: "Shark Bytes",
        artist: "Off The Hook"
    },
    "18": {
        name: "Here Comes Ultimate Doom",
        artist: "Off The Hook"
    },
    "19": {
        name: "Fly Octo Fly ~ Ebb & Flow (Octo)",
        artist: "Off The Hook"
    },
    "20": {
        name: "Into the Light",
        artist: "Off The Hook"
    },
    "21": {
        name: "Ebb&FlowDemo.frsh (Sketch)",
        artist: "Off The Hook"
    },
    "22": {
        name: "#$@%* Dudes Be #$@%* Sleepin' (Live)",
        artist: "Off The Hook"
    },
    "23": {
        name: "Octoling Rendezvous",
        artist: "Turquoise October"
    },
    "24": {
        name: "Calamari Inkantation (Inner Agent 3)",
        artist: "Squid Sisers"
    }
}
function pickrandom(min = 0, max = 15){
    const randomsong = songs[Math.floor(Math.random() * (max - min) + min)]
    SongtitleHTML.textContent = randomsong.name
    
    switch (randomsong.artist){
        default:
            break
        case "Dedf1sh":
            AlbumCoverHTML.src = dedf1sh_cover
            break
        case "Off The Hook":
            AlbumCoverHTML.src = off_the_hook_cover
            break
        case "Turquoise October":
            AlbumCoverHTML.src = turquise_october_cover
            break
        case "Squid Sisers":
            AlbumCoverHTML.src = squid_sisters_cover
            break
    }
    AudioHTML.src = randomsong.audio
    AudioHTML.play()
}
pickrandom()