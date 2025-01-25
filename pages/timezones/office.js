console.log("Initializing...");
console.log("Ready!");
function TimeGrabber(Time){
    const Hours = Time.getHours().toString().padStart(2, 0);
    const Minutes = Time.getMinutes().toString().padStart(2, 0);
    const Seconds = Time.getSeconds().toString().padStart(2, 0);
    const DisplayTime = Hours + ":" + Minutes + ":" + Seconds;
    return DisplayTime;
};
function GetGermanyTime() {
    const TimeInGerman = new Date;
    document.getElementById("CurrentTimeGermany").textContent = TimeGrabber(TimeInGerman);
};
function GetJapanTime(){
    const TimeInJapan = new Date;
    document.getElementById("CurrentTimeJapan").textContent = TimeGrabber(TimeInJapan);
};
function GetUTCTime(){
    let TimeUTC = new Date;
    document.getElementById("CurrentTimeUTC").textContent = TimeGrabber(TimeUTC);
}
GetGermanyTime();
GetJapanTime();
GetUTCTime();
setInterval(GetGermanyTime, 1000);
setInterval(GetJapanTime, 1000);
setIntetval(GetUTCTime, 1000);
