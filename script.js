let sell = document.querySelector('#sell');
let buy = document.querySelector('#buy');
let box1 = document.querySelector('.nav-box1');
let box2 = document.querySelector('.nav-box2');
sell.addEventListener('mouseover', function () {
    box1.style.display = 'block';
})
sell.addEventListener('mouseout', function () {
    box1.style.display = 'none';
})
buy.addEventListener('mouseover', function () {
    box2.style.display = 'block';
})
buy.addEventListener('mouseout', function () {
    box2.style.display = 'none';
})