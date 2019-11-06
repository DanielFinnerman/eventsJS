let balloon = document.querySelector('p');
let fontSize = 40;
let fontUnit = "px";

function Resizing(font,percent) {

    fontSize += fontSize * percent;
    font.style.fontSize = fontSize + fontUnit;

}

const resize = (event) => {
    if (event.key === 'ArrowUp') {
        event.preventDefault();
        Resizing(balloon,0.1);

    } else if (event.key === 'ArrowDown') {
        event.preventDefault();
        if (fontSize > 10) {
        Resizing(balloon,-0.1);}
        else {
            fontSize = 10;
        }

    }

    if (fontSize > 175) {
        balloon.textContent= '💥 RÄJÄHTI';
        document.removeEventListener('keydown', resize);

    }
};
Resizing(balloon,0);

document.addEventListener('keydown', resize);