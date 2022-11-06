const circle = document.querySelector('#circle');

let rotateValue = circle.style.transform;
let rotatePosition;

let details = [
    {id: 1, text: "Aga Bala", img: "images/agabala_detail.png", appstore: "https://apps.apple.com/us/app/aga-bala/id1548189656", googleplay: "https://play.google.com/store/apps/details?id=com.EKOGames.AgaBala"},
    {id: 2, text: "Easy Useful Wallet", img: "images/mywallet_detail.png", appstore: "https://apps.apple.com/az/app/easy-useful-wallet/id1548000262", googleplay: "https://play.google.com/store/apps/developer?id=Elkhan+Mursali"},
    {id: 3, text: "Space War", img: "images/spacewar_detail.png", appstore: "https://apps.apple.com/us/app/space-war-6/id1561462670", googleplay: "https://play.google.com/store/apps/details?id=com.EKOGames.SpaceWar"},
    {id: 4, text: "Drive Me Nuts", img: "images/drivemenuts_detail.png", appstore: "https://play.google.com/store/apps/details?id=com.EKOGames.DriveMeNuts", googleplay: "https://play.google.com/store/apps/details?id=com.EKOGames.DriveMeNuts"}
]
let currentId = 1;
let detailText = document.getElementById('appHeader');
let detailImage = document.getElementById('appImage');
let appstore = document.getElementById('appstore');
let googleplay = document.getElementById('googleplay');

circle.addEventListener('click', function(){
    //circle.classList.toggle('circle-active');
    rotateDisc();
    updateDetails();
});

function rotateDisc(){
    rotatePosition = rotateValue + "rotate(90deg)";
    circle.style.transform = rotatePosition;
    rotateValue = rotatePosition;
}

function updateDetails(){
    detailText.innerHTML = getNextDetailText();
    detailImage.src = details[currentId].img;
    appstore.href = details[currentId].appstore;
    googleplay.href = details[currentId].googleplay;
    currentId++;
    // reset
    if(currentId == details.length){
        currentId = 0;
    }
}

function getNextDetailText(){
    return details[currentId].text;
}
