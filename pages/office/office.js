// some styling stuff
const img = document.querySelector("img");
img.draggable = false;

// Settings menu
let settingsmenu = document.getElementById("settingsmenu");
settingsmenu.style.display = "none";

function settingsmenuon(x){
  x.style.display = "block";
}
function settingsmenuoff(x){
  x.style.display = "none";
}

//Time stuff
const options = {
  weekday: "short",
  hours: "2-digit",
  minutes: "2-digit",
  seconds: "2-digit",
}

let DateVar = new Date();
// const timezoneClient = Intl.DateTimeFormat().resolvedOptions().timeZone
const timezonede = "Europe/Berlin";
const timezonejp = "Asia/Tokyo";
const timezoneca = "America/Toronto";
const timezoneNY = "America/New_York";
const timezoneLA = "America/Los_Angeles";
const timezonefr = "Europe/Paris";
const timezonech = "Asia/Shanghai";
const timezoneen = "Europe/London";

//Print 2 screen
function print(HtmlElement, timezone) {
  document.getElementById(HtmlElement).textContent =
      DateVar.toLocaleTimeString(undefined, { timeZone: timezone, ...options })
}

function checkdaylight(timezone, HTMLDay, HTMLNight){
  let daytime = document.getElementById(HTMLDay + "-Day");
  let nighttime = document.getElementById(HTMLNight + "-Night");
  let testdate = DateVar.toLocaleTimeString(undefined, {timeZone: timezone, hour:'2-digit', minute:'2-digit', second:'2-digit'});
  let nightstart = '21:00:00';
  let nightend = '06:00:00';
  if (nightstart >= testdate && nightend <= testdate) {
    daytime.style.display = "block";
    nighttime.style.display = "none";
  }else{
    daytime.style.display = "none";
    nighttime.style.display = "block";
  }
}
// function toggle_Indicator(){
//   let IndicatorVar = document.getElementsByClassName("User_indicator");
//   IndicatorVar.style.display = "none";
//   console.log(IndicatorVar);
//   if (IndicatorVar.style.display == "block"){
//     IndicatorVar.style.display = "none";
//   }
//   else{
//     IndicatorVar.style.display = "block";
//   }
// }

function checkdaylighteverything() {
  checkdaylight(timezonede, "Germany", "Germany");
  checkdaylight(timezonejp, "Japan", "Japan");
  checkdaylight(timezoneca, "Canada", "Canada");
  checkdaylight(timezoneLA, "Los-Angeles", "Los-Angeles");
  checkdaylight(timezoneNY, "NYC", "NYC");
  checkdaylight(timezonefr, "Paris", "Paris");
  checkdaylight(timezonech, "Shanghai", "Shanghai");
  checkdaylight(timezoneen, "London", "London");
}
checkdaylighteverything()
function printeverything() {
  print("CurrentTimeGermany", timezonede);
  print("CurrentTimeJapan", timezonejp);
  print("CurrentTimeCanada", timezoneca);
  print("CurrentTimeLA", timezoneLA);
  print("CurrentTimeParis", timezonefr);
  print("CurrentTimeShanghai", timezonech);
  print("CurrentTimeNYC", timezoneNY);
  print("CurrentTimeEngland", timezoneen);
//print("CurrentTimePhiladelphia",timezoneUTC);
}
printeverything()
setInterval(() => {
  DateVar = new Date();
  printeverything()
  checkdaylighteverything()
  }, 1000);