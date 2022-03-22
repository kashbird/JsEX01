// const myHead = document.querySelector('h1');
// myHead.textContent = 'Hello World 첫번째 만드는 자바스크립트';

// document.body.innerHTML ='<h2>안녕하세요</h2>';

const blueBtn = document.querySelector('.btn_blue');
blueBtn.addEventListener('click', function () {
    document.body.classList.toggle('changeBlue');
});

const redBtn = document.querySelector('.btn_red');
redBtn.addEventListener('click', function () {
    document.body.classList.toggle('changeRed');
});

const purpleBtn = document.querySelector('.btn_purple');
purpleBtn.addEventListener('click', function () {
    document.body.classList.toggle('changePurple');
});