const checkImg = document.querySelector('#checkImg');
const inputList = document.querySelector('#inputList');
const circle_hover = document.querySelectorAll('#circle_hover');

function verifChar() {
    checkImg.src = 'images/round.svg';
    if (inputList.value.length >= 5) {
        checkImg.src = '/images/tick.svg';
    }
    else{
        checkImg.src = '/images/round.svg';
    }
}

circle_hover.forEach(element => {
    element.addEventListener('mouseover', ()=>{
        element.src = '/images/tick.svg';
    })
    element.addEventListener('mouseout', ()=>{
        element.src = '/images/round.svg';
    })
});
