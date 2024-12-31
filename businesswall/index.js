console.log("Initializing...");
console.log("Ready!");
function GetGermanyTime() {
    const TimeInGermany = new Date();
    const GermanyHours = TimeInGermany.getHours();
    const GermanyMinutes = TimeInGermany.getMinutes();
    const GermanySeconds = TimeInGermany.getSeconds();
    document.getElementById("GermanyHours").textContent = GermanyHours;
    document.getElementById("GermanyMinutes").textContent = GermanyMinutes;
    document.getElementById("GermanySeconds").textContent = GermanySeconds;
}
function GetJapanTime(){
    const TimeInJapan = new Date;
    
}




GetGermanyTime();
setInterval(GetGermanyTime, 1000)