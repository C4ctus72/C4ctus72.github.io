console.log("Initializing...");
console.log("Ready!");
function GetGermanyTime() {
    const TimeInGerman = new Date;
    const HoursInGermany = TimeInGerman.getHours().toString().padStart(2, 0);
    const MinutesInGermany = TimeInGerman.getMinutes().toString().padStart(2, 0);
    const SecondsInGermany = TimeInGerman.getSeconds().toString().padStart(2, 0);
    Time = HoursInGermany + ":" + MinutesInGermany + ":" + SecondsInGermany;
    document.getElementById("CurrentTimeGermany").textContent = Time;
};
function GetJapanTime(){
    const TimeInJapan = new Date;
    document.getElementById("CurrentTimeJapan").textContent;
};


GetGermanyTime();
GetJapanTime();
setInterval(GetGermanyTime, 1000);