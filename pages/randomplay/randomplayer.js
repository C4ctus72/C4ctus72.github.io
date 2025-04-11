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

//dedf1sh songs
let songs_dedf1sh = new Array()
songs_dedf1sh = ["#0 shell", "#1 progress", "#2 ripped", "#4 dunno", "#5 thirsty", "#6 frisk", "#8 regret", "#9 party", "#11 above", "#12 awake", "#13 shade", "#14 crush", "#16 salty", "#19 bless", "Splattack! (Octo)"]

let AlbumCover = document.getElementById("AlbumCover")

const covers = [dedf1sh, turquise_october, off_the_hook, squid_sisters]


function SongPicker(){
    
}
if(window.open()){
    SongPicker()
}

function SetAlbumCover(){

    Albumcover.src = dedf1sh;
}

SetAlbumCover()