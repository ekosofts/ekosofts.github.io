const circle = document.querySelector('#circle');

let rotateValue = circle.style.transform;
let rotatePosition;

circle.addEventListener('click', function() {
    //circle.classList.toggle('circle-active');
    rotatePosition = rotateValue + "rotate(90deg)";
    circle.style.transform = rotatePosition;
    rotateValue = rotatePosition;
});