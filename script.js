const mode = document.querySelector('.dark-light__mode');
const html = document.querySelector('html');

mode.addEventListener('click', (event) => {
    console.log(html);
    html.classList.toggle('dark-mode');
});