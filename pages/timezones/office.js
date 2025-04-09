// some styling stuff
const img = document.querySelector("img");
img.draggable = false;

//Time stuff
const options = {
  hours: "2-digit",
  minutes: "2-digit",
  seconds: "2-digit",
};

let DateVar = new Date();

const timezonede = "Europe/Berlin"
const timezonejp = "Asia/Tokyo"
const timezoneca = "America/Toronto"
const timezoneLA = "America/Los_Angeles"
//Print 2 screen
function print(HtmlElement, timezone){
    document.getElementById(HtmlElement).textContent = DateVar.toLocaleTimeString(undefined, { timeZone: timezone, ...options, })
}

print("CurrentTimeGermany", timezonede)
print("CurrentTimeJapan", timezonejp)
print("CurrentTimeCanada", timezoneca)
print("CurrentTimeLA", timezoneLA)

setInterval(() => {
    DateVar = new Date()
    print("CurrentTimeGermany", timezonede)
    print("CurrentTimeJapan", timezonejp)
    print("CurrentTimeCanada", timezoneca)
    print("CurrentTimeLA", timezoneLA)
},  1000);