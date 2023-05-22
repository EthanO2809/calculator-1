let display = document.getElementById('screen');
const point = document.querySelector('.dot')
const check = []

const erase = () => {
    display.value = '';
}

const show = (n) => {
    display.value += n;
}

const calc = () => {
    display.value = eval(display.value);
}

const del = () => {
   display.value = display.value.slice(0, -1);
}

point.addEventListener('click',(e)=>{
    if (check.includes('.')){
        return;
    }else{
        check.push('.');
        display.value += '.'
    }
})