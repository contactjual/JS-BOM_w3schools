// JavaScript Window- The Browser Object Model
const widht = document.getElementById('para1')
const height = document.getElementById('para2')
const avilableWidht = document.getElementById('para3')
const avilableHeight = document.getElementById('para4')
const colorDepth = document.getElementById('para5')
const pixelDepth = document.getElementById('para6')

widht.innerText = 'Window width' + window.innerWidth;
height.innerText = 'Window height' + window.innerHeight;

let newWindow;
function openWindow() {
    newWindow = window.open('https://www.google.com/');
}
function closeWindow() {
    newWindow.close();
}




// JavaScript screen- The Browser Object Model
avilableWidht.innerText = 'screen available height' + screen.availWidth;
avilableHeight.innerText = 'screen available height' + screen.availHeight;
colorDepth.innerText = 'screen colorDepth' + screen.colorDepth;
pixelDepth.innerText = 'screen pixelDepth ' + screen.pixelDepth;




// JavaScript Window Location
const para7 = document.getElementById('para7')
const para8 = document.getElementById('para8')
const para9 = document.getElementById('para9')
const para10 = document.getElementById('para10')
const para11 = document.getElementById('para11')
const para12 = document.getElementById('para12')
const para13 = document.getElementById('para13')
const para14 = document.getElementById('para14')
const para15 = document.getElementById('para15')
const para16 = document.getElementById('para16')


para7.innerText = 'href' + window.location.href;
para8.innerText = 'href' + window.location.hostname;
para9.innerText = 'href' + window.location.pathname;
para10.innerText = 'href' + window.location.protocol;





// JavaScript Popup Boxes
// function alert() {
//     Window.alert('Hello')
// }
// function confirm() {
//     Window.confirm('Hello')
// }
// function prompt() {
//     Window.prompt('Hello')
// }




// JavaScript Cookies

function setName(nAme, vAlue, exDate) {
    const d = new Date();
    d.setTime(d.getTime() + exDate * 24 * 60 * 60 * 1000);
    let expires = "expires=" + d.toUTCString();

    document.cookie = nAme + '=' + vAlue + '; ' + expires + ': ' + 'path=/'
}


function getName(nAme) {

    // name=Jual; username=contactjual

    let nam = nAme + '=';
    const cookieArrya = document.cookie.split(';');

    for (i = 0; i < cookieArrya.length; i++) {
        let cookiePart = cookieArrya[i];

        while (cookiePart.charAt(0) === ' '){
            cookiePart = cookiePart.substring('1')
        }

        if (cookiePart.indexOf(nam) === 0){
            return cookiePart.substring(nam.length);
        }
    }

    return '';


}