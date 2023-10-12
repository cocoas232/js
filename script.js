const button = document.querySelector('#button');
const text = document.querySelector('#text');

button.addEventListener('click', function (){
    text.classList.toggle('accord-text-active')
    text2.classList.add('accord-text-active-2')
    text3.classList.add('accord-text-active-3')
    text4.classList.add('accord-text-active-4')
});

const button2 = document.querySelector('#button-2');
const text2 = document.querySelector('#text-2');

button2.addEventListener('click', function (){
    text.classList.add('accord-text-active')
    text2.classList.toggle('accord-text-active-2')
    text3.classList.add('accord-text-active-3')
    text4.classList.add('accord-text-active-4')
});

const button3 = document.querySelector('#button-3');
const text3 = document.querySelector('#text-3');

button3.addEventListener('click', function (){
    text.classList.add('accord-text-active')
    text2.classList.add('accord-text-active-2')
    text3.classList.toggle('accord-text-active-3')
    text4.classList.add('accord-text-active-4')
});

const button4 = document.querySelector('#button-4');
const text4 = document.querySelector('#text-4');

button4.addEventListener('click', function (){
    text.classList.add('accord-text-active')
    text2.classList.add('accord-text-active-2')
    text3.classList.add('accord-text-active-3')
    text4.classList.toggle('accord-text-active-4')
});


