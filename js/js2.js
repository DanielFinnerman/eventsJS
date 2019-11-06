window.addEventListener("mousemove", moved);
function moved(event) {
    const count = document.body.childElementCount;
    const box = document.createElement('div');
    box.className = "trail";
    box.style.left = event.clientX + "px";
    box.style.top = event.clientY + "px";
    document.body.appendChild(box);
    if (count > 10) {
        document.body.removeChild(document.body.childNodes[2]); //node[1] is h1 which i want to keep
    }
}