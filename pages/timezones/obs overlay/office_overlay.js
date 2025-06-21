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
//Print 2 screen
function print(HtmlElement, timezone) {
    document.getElementById(HtmlElement).textContent = DateVar.toLocaleTimeString(
        undefined,
        { timeZone: timezone, ...options }
    );
}
print("CurrentTimeGermany", timezonede);
setInterval(() => {
    DateVar = new Date();
    print("CurrentTimeGermany", timezonede);
}, 1000);
