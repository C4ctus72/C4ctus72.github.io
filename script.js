const a = document.querySelector('a')
let changethis = document.getElementsByClassName('pointer')

a.addEventListener('mouseover', () => {
    changethis.innerText = ">"
})

let main = document.getElementById('cool-people');
let openclose = document.getElementById('open-close');
main.style.display = "none"

function ddm(){
    switch (main.style.display) {
        case "none":
            main.style.display = "block"
            openclose.innerText = "[v]"
            break;
        case "block":
            main.style.display = "none"
            openclose.innerText = "[>]"

            break;
        default:
            break;
    }
}