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
    const HoursInJapan = TimeInJapan.getHours().toString().padStart(2, 0);
    const MinutesInJapan = TimeInJapan.getMinutes().toString().padStart(2, 0);
    const SecondsInJapan = TimeInJapan.getSeconds().toString().padStart(2, 0);
    Time = HoursInJapan + ":" + MinutesInJapan + ":" + SecondsInJapan;
    document.getElementById("CurrentTimeJapan").textContent = Time;
};


GetGermanyTime();
GetJapanTime();
setInterval(GetGermanyTime, GetJapanTime, 1000);