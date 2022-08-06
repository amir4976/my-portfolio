let $ = document

let body = $.body
let text = $.getElementById('letsWORK')

let backgroundArrey = [
    './img/header/ben-kolde-bs2Ba7t69mM-unsplash.jpg',
    './img/header/carlos-muza-hpjSkU2UYSU-unsplash.jpg',
    './img/header/charles-forerunner-3fPXt37X6UQ-unsplash.jpg',
    './img/header/hunters-race-MYbhN8KaaEc-unsplash.jpg',
    './img/header/john-schnobrich-FlPc9_VocJ4-unsplash.jpg',
    './img/header/scott-graham-5fNmWej4tAA-unsplash.jpg',
    './img/header/sean-pollock-PhYq704ffdA-unsplash.jpg',
    './img/header/toa-heftiba-FV3GConVSss-unsplash.jpg',
    './img/header/tyler-franta-iusJ25iYu1c-unsplash.jpg',
    './img/header/nordwood-themes-kRNZiGKtz48-unsplash.jpg',
    './img/header/yulia_dubyna-EfSlWRmVqq4-unsplash.jpg',
    './img/header/ilya-pavlov-OqtafYT5kTw-unsplash.jpg',
]


let header = $.querySelector('.header')

setInterval(function(){
    let random = Math.floor(Math.random()*backgroundArrey.length)
    console.log(random);
header.style.background = 'url('+backgroundArrey[random]+')'
header.style.backgroundSize = 'cover'
header.style.backgroundposation = 'center'

},5000)




window.addEventListener('scroll',function (){
    let value =window.scrollY-4000
    text.style.left=value+"px"


    let valuethoe =window.scrollY
    console.log(valuethoe);
 
})

let hover=$.querySelector('.hover')
let hover1=$.querySelector('.hover1')
let hover2=$.querySelector('.hover2')






function about(){
window.scrollTo(0,966)
}function simple(){
window.scrollTo(0,1970)
}function smedia(){
window.scrollTo(0,2934)
}
