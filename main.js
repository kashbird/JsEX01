// const myHead = document.querySelector('h1');
// myHead.textContent = 'Hello World 첫번째 만드는 자바스크립트';

// document.body.innerHTML ='<h2>안녕하세요</h2>';

const clr = ['changeBlue', 'changeRed', 'changePurple', 'changeImg']
const active = ['activeBlue', 'activeRed'];

const blueBtn = document.querySelector('.btn_blue');
blueBtn.addEventListener('click', function() {
    document.body.classList.remove(...clr);
    document.body.classList.add('changeBlue');
    blueBtn.classList.add('activeBlue');   
})

const redBtn = document.querySelector('.btn_red');
redBtn.addEventListener('click', function () {
    document.body.classList.remove(...clr);
    document.body.classList.add('changeRed');
    redBtn.classList.add('activeRed');
});

const purpleBtn = document.querySelector('.btn_purple');
purpleBtn.addEventListener('click', function () {
    document.body.classList.remove(...clr);
    document.body.classList.add('changePurple');
    purpleBtn.classList.add('activepurple');
});

const imgBtn = document.querySelector('.btn_img');
const btns = document.querySelector('.bg_img');
imgBtn.addEventListener('click', function () {
    document.body.classList.remove(...clr);
    btns.classList.toggle('bg_img--show');
    imgBtn.classList.add('activeImg');
});

const resetBtn = document.querySelector('.btn_reset');
resetBtn.addEventListener('click', function() {
    document.body.classList.remove(...clr);
});

