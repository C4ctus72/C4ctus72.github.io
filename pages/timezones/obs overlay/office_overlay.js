const img = document.querySelector("img");
img.draggable = false;
const options = {
    hours: "2-digit",
    minutes: "2-digit",
    seconds: "2-digit",
};
let DateVar = new Date();
const timezonede = "Europe/Berlin";
function print(HtmlElement, timezone) {
    document.getElementById(HtmlElement).textContent = DateVar.toLocaleTimeString(
        undefined,
        { timeZone: timezone, ...options }
    )
}
print("CurrentTimeGermany", timezonede);
setInterval(() => {
    DateVar = new Date();
    print("CurrentTimeGermany", timezonede);
}, 1000);