const button = document.querySelector('#button');
const text = document.querySelector('#text');

button.addEventListener('click', function (){
    text.classList.toggle('accord-text-active')
});

const button2 = document.querySelector('#button-2');
const text2 = document.querySelector('#text-2');

button2.addEventListener('click', function (){  
    text2.classList.toggle('accord-text-active-2')
});

const button3 = document.querySelector('#button-3');
const text3 = document.querySelector('#text-3');

button3.addEventListener('click', function (){
    text3.classList.toggle('accord-text-active-3')
});

const button4 = document.querySelector('#button-4');
const text4 = document.querySelector('#text-4');

button4.addEventListener('click', function (){
    text4.classList.toggle('accord-text-active-4')
});