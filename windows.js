// window mouse drag movement

const window_div = document.getElementById('window');
const window_header_div = document.getElementById('window_header');

const mouse = {
    x: 0,
    y: 0,
    startX: 0,
    startY: 0,
    isDown: false
};

window_header_div.addEventListener('mousedown', function (event) {
    mouse.isDown = true;
    mouse.startX = event.pageX - window_div.offsetLeft;
    mouse.startY = event.pageY - window_div.offsetTop;
});

window_header_div.addEventListener('mouseup', function () {
    mouse.isDown = false;
});

window_header_div.addEventListener('mousemove', function (event) {
    if (mouse.isDown) {
        mouse.x = event.pageX - window_div.offsetLeft;
        mouse.y = event.pageY - window_div.offsetTop;
        const dx = mouse.x - mouse.startX;
        const dy = mouse.y - mouse.startY;
        window_div.style.left = `${window_div.offsetLeft + dx}px`;
        window_div.style.top = `${window_div.offsetTop + dy}px`;
        // prevent  the window from being dragged outside of the screen
        if (window_div.offsetLeft < 0) {
            window_div.style.left = 0;
        }
        if (window_div.offsetTop < 0) {
            window_div.style.top = 0;
        }
        if (window_div.offsetLeft + window_div.offsetWidth > window.innerWidth) {
            window_div.style.left = `${window.innerWidth - window_div.offsetWidth}px`;
        }
        if (window_div.offsetTop + window_div.offsetHeight > window.innerHeight) {
            window_div.style.top = `${window.innerHeight - window_div.offsetHeight}px`;
        }
    }
});

// centralize the window
window_div.style.left = `${(window.innerWidth - window_div.offsetWidth) / 2}px`;
window_div.style.top = `${(window.innerHeight - window_div.offsetHeight) / 2}px`;


// Clock

const clock = document.getElementById('clock');

function updateClock() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const am_pm = hours >= 12 ? 'PM' : 'AM';
    clock.innerText = `${hours}:${minutes}:${seconds} ${am_pm}`;
}

setInterval(updateClock, 1000);


// Start button

const start_button = document.getElementById('start_button');

const start_menu = document.getElementById('start_menu');

start_button.addEventListener('click', function () {
    console.log('start button clicked');
    // toggle display hidden or absolute
    if (start_menu.style.display === 'none') {
        start_menu.style.display = 'block';
    }
    else {
        start_menu.style.display = 'none';
    }
});

start_menu.style.display = 'none';