// some styling stuff
const img = document.querySelector("img");
img.draggable = false;

//Time stuff
const options = {
  hours: "2-digit",
  minutes: "2-digit",
  seconds: "2-digit",
}
const optionstwo = {
  hours: "2-digit"
}

var DateVar = new Date();
const timezoneClient = Intl.DateTimeFormat().resolvedOptions().timeZone
const timezonede = "Europe/Berlin";
const timezonejp = "Asia/Tokyo";
const timezoneca = "America/Toronto";
const timezoneNY = "America/New_York";
const timezoneLA = "America/Los_Angeles";
const timezonefr = "Europe/Paris";
const timezonech = "Asia/Shanghai";

//Print 2 screen
function print(HtmlElement, timezone) {
  document.getElementById(HtmlElement).textContent =
      DateVar.toLocaleTimeString(undefined, { timeZone: timezone, options })
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


checkdaylight(timezonede, "Germany", "Germany");
checkdaylight(timezonejp, "Japan", "Japan");
checkdaylight(timezoneca, "Canada", "Canada");
checkdaylight(timezoneLA, "Los-Angeles", "Los-Angeles");
checkdaylight(timezoneNY, "NYC", "NYC");
checkdaylight(timezonefr, "Paris", "Paris");
checkdaylight(timezonech, "Shanghai", "Shanghai");

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

  checkdaylight(timezonede, "Germany", "Germany");
  checkdaylight(timezonejp, "Japan", "Japan");
  checkdaylight(timezoneca, "Canada", "Canada");
  checkdaylight(timezoneLA, "Los-Angeles", "Los-Angeles");
  checkdaylight(timezoneNY, "NYC", "NYC");
  checkdaylight(timezonefr, "Paris", "Paris");
  checkdaylight(timezonech, "Shanghai", "Shanghai");
  }, 1000);