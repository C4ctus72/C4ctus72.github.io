// const a = document.querySelector('a')
// let changethis = document.getElementsByClassName('pointer')

// a.addEventListener('mouseover', () => {
//     changethis.innerText = ">"
// })

let cool_people = document.getElementById("cool-people");
let openclose_cp = document.getElementById("open-close");
//cool_people.style.display = "none";

function ddm(x) {
  switch (x.style.display) {
    case "none":
      x.style.display = "block";
      openclose_cp.innerText = "[v]";
      break;
    case "block":
      x.style.display = "none";
      openclose_cp.innerText = "[>]";
      break;
    default:
      break;
  }
}
function theme() {
  location.replace("/pages/17/17.html");
}
