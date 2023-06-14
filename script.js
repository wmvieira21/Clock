const mode = document.querySelector('.dark-light__mode');
const pointerHour = document.querySelector('.pointer.hour');
const html = document.querySelector('html');

mode.addEventListener('click', (event) => {
    html.classList.toggle('dark-mode');
    
});

let count = 30;
setInterval(() => {
    pointerHour.style.transform = `translate(-50%, -50%) rotate(${360}deg)`;
}, 1000);