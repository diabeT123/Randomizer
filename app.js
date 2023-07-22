let menuButton = document.querySelector('.menu__button');
let menuBurger = document.querySelector('.menu__burger');
let headerNav = document.querySelector('.header__nav');
let numbersResult = document.querySelector('.numbers__result');

menuButton.addEventListener('click', function(){
    menuButton.classList.toggle('menu__button-open');
    headerNav.classList.toggle('header__nav-open');
})



let from = document.querySelector('.from')
let to = document.querySelector('.to')

const randomNumber = () =>{
    let range = Number(document.querySelector('.number__range').value)
    let maxValue = Number(to.value);
    let minValue = Number(from.value);
    let result = 0;
    for (let count = 0; count < range; count++)
    {   
        result = (Math.random() * (maxValue-minValue) + minValue).toFixed(0) + ' ' + `${result}`;
        numbersResult.innerHTML = result;
    }

}

document.querySelector('.numbers__button').addEventListener('click', function(){

    randomNumber();

})

let rangeSliderValue = document.querySelector('.numbers__count-value');

const showSliderValue = () =>{

    rangeSliderValue.innerHTML = document.querySelector('.number__range').value;

}
document.querySelector('.number__range').oninput = showSliderValue;







