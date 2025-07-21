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

const bg_gifs = [
    "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMGU0MmlmOWNrNWRxaHp5YXhhdWUxd2Q1ZHR6NXBpZTNscDFxaWIwOCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/oSYflamt3IEjm/giphy.gif",
  "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExOWh3YXNnYmdwd2w2cTA4YWV2eTY2aDR4dWxmb25iMXU4MjFudGUxNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oEduOOq2VZhvNfZ6w/giphy.gif",
  "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExODAwOHZiczhkc3Z1ZmUzc2dzY29mY2VxYWw0MnJ0bHM1aWl4ZmEyciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/kTiUjFPgAPajFWQurI/giphy.gif",
  "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExajNybG0yMmpreGRudnNmZmJzdTVhY2huc2t2N2xtdThzM21xM2kyZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/7NOypWcjs4ANA86Cmn/giphy.gif",
  "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcmd5czhwNmpxM3Z0ZjI1dXVzNDA0dnJyc2VtNHdxNjJ5eWxhdmFoZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/CLWkv55ZlUJHO/giphy.gif",
  "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZDllcGtrZm02bXo4dm95bTI2Mzc3c3g4dWExYjFrNWE4YmcxYWRiMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/cOzK12kNVHoiOLYX6P/giphy.gif",
  "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExOWI5NWlhOTJiODdwMWdyM3BjNTBlc2xhZGR6NmFuNnRncDkxc2ZvbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26FeUjF88goLxusOQ/giphy.gif"
];
function bg_random(x,y) {
  const randomIndex = Math.floor(Math.random() * 7);
  const randombg = bg_gifs[randomIndex];
  console.log(randombg);
  document.getElementById("html").style.backgroundImage = 'url(' + randombg + ')';
}
bg_random(1,2);