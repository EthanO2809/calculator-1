let display = document.getElementById('screen');

const erase = () => {
    display.value = '';
}

const show = (n) => {
    display.value += n;
}

const calc = () => {
    display.value = eval(display.value);
}