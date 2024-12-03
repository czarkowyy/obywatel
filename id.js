

var time = document.querySelector(".time_text");
var params = new URLSearchParams(window.location.search);

document.addEventListener('click', () => {
  document.querySelector("body").requestFullscreen();
})

var firstname = params.get("firstname");
var surname = params.get("surname");
var image = params.get("image");

function hideAddressBar(){
  if(document.documentElement.scrollHeight<window.outerHeight/window.devicePixelRatio)
    document.documentElement.style.height=(window.outerHeight/window.devicePixelRatio)+'px';
  setTimeout(window.scrollTo(1,1),0);
}
window.addEventListener("load",function(){hideAddressBar();});
window.addEventListener("orientationchange",function(){hideAddressBar();});

let webManifest = {
  "name": "",
  "short_name": "",
  "theme_color": "#f5f6fb",
  "background_color": "#f5f6fb",
  "display": "standalone"
};

window.addEventListener(
    "touchmove",
    function (event) {
      if (event.scale !== 1) {
        event.preventDefault();
        event.stopImmediatePropagation();
      }
    },
    { passive: false }
  );

let manifestElem = document.createElement('link');
manifestElem.setAttribute('rel', 'manifest');
manifestElem.setAttribute('href', 'data:application/manifest+json;base64,' + btoa(JSON.stringify(webManifest)));
document.head.prepend(manifestElem);


document.querySelector(".surname").innerHTML = surname.toUpperCase();
document.querySelector(".firstname").innerHTML = firstname.toUpperCase();
document.querySelector(".id_own_image").style.backgroundImage = "url('" + image + "')";

const czas = document.querySelector('.czas');

setInterval(() => {
    const now = new Date();
    const hour = now.getHours() < 10 ? `0${now.getHours()}` : now.getHours();
    const minute = now.getMinutes() < 10 ? `0${now.getMinutes()}` : now.getMinutes();
    const second = now.getSeconds() < 10 ? `0${now.getSeconds()}` : now.getSeconds();
    const month = (now.getMonth()+1) < 10 ? `0${now.getMonth()+1}` : now.getMonth()+1;
    const timeString = `Czas: ${hour}:${minute}:${second} ${now.getDate()}.${month}.${now.getFullYear()}`;
    document.querySelector('.czas').innerHTML = timeString;
    czas.innerHTML = timeString;
}, 1000);

setInterval(() => {
    const sukadziwkakurwa = document.getElementById('sukadziwkakurwa');

    const date = new Date();
    const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
    const month = (date.getMonth()+1) < 10 ? `0${date.getMonth()+1}` : date.getMonth()+1;
    const year = date.getFullYear();
    sukadziwkakurwa.innerHTML = `${day}.${month}.${year}`;
}, 1000);
