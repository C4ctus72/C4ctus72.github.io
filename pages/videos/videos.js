let nonvisible_player = document.getElementById('video_player')
nonvisible_player.style.display = "none"

function toggle_visible(){
    switch (nonvisible_player.style.display) {
        case "none":
            nonvisible_player.style.display = "block"
            break;
        case "block":
            nonvisible_player.style.display = "none"
            break
        default:
            break;
    }
}