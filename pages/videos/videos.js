const jit_button = document.getElementById("jit_button")
const shade_button = document.getElementById("shade_button")

let jit_player = document.getElementById("jit_player")
let shade_player = document.getElementById("shade_player")

jit_player.style.display = "none"
shade_player.style.display = "none"

function toggle_player(x){
    switch(x.style.display){
        case "none":
            x.style.display = "block"
            break
        case "block":
            x.style.display = "none"
            break
        default:
            break
    }
}