const jit_button = document.getElementById("jit_button")
const shade_button = document.getElementById("shade_button")
let jit_player = document.getElementById("jit_player")
let shade_player = document.getElementById("shade_player")
jit_player.style.display = "none"
shade_player.style.display = "none"


function toggle_jit(){
    switch (jit_player.style.display) {
        case "none":
            jit_player.style.display = "block"
            break;

        case "block":
            jit_player.style.display = "none"

        default:
            break;
    }
}

function toggle_shade(){
    switch (shade_player.style.display) {
        case "none":
            shade_player.style.display = "block"
            break;

        case "block":
            shade_player.style.display = "none"

        default:
            break;
    }
}