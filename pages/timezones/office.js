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


const timezonede = "Europe/Berlin";
const timezonejp = "Asia/Tokyo";
const timezoneca = "America/Toronto";
const timezoneNY = "America/New_York";
const timezoneLA = "America/Los_Angeles";
const timezonefr = "Europe/Paris";
const timezonech = "Asia/Shanghai";
const timezoneUTC = "UTC";

console.log(DateVar.toLocaleDateString(undefined, {timeZone: timezoneUTC, ...options}));

//Print 2 screen
function print(HtmlElement, timezone) {
  document.getElementById(HtmlElement).textContent =
      DateVar.toLocaleTimeString(undefined, { timeZone: timezone, ...options })
}

print("CurrentTimeGermany", timezonede);
print("CurrentTimeJapan", timezonejp);
print("CurrentTimeCanada", timezoneca);
print("CurrentTimeLA", timezoneLA);
print("CurrentTimeParis", timezonefr);
print("CurrentTimeShanghai", timezonech);
print("CurrentTimeNYC", timezoneNY);
//print("CurrentTimePhiladelphia",timezoneUTC);

setInterval(() => {
  DateVar = new Date();
  print("CurrentTimeGermany", timezonede);
  print("CurrentTimeJapan", timezonejp);
  print("CurrentTimeCanada", timezoneca);
  print("CurrentTimeLA", timezoneLA);
  print("CurrentTimeParis", timezonefr);
  print("CurrentTimeShanghai", timezonech);
  print("CurrentTimeNYC", timezoneNY);
  //print("CurrentTimePhiladelphia", timezoneUTC);
  }, 1000);