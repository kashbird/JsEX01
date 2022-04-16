// const myHead = document.querySelector('h1');
// myHead.textContent = 'Hello World 첫번째 만드는 자바스크립트';

// document.body.innerHTML ='<h2>안녕하세요</h2>';

const btnBg = document.querySelector('.btn_bg');
btnBg.addEventListener('click', function () {
    document.body.classList.toggle('changeBlue');
});

