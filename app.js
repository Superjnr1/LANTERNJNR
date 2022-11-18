let btn = document.getElementById('btn')
let text = document.getElementById('text')
let mountains = document.getElementById('mountains')
let header = document.querySelector('header')


window.addEventListener('scroll', function(){
    let value =  window.scrollY;
    mountains.style.top = value * 1.05 + 'px';
    text.style.marginRight = value * 4 + 'px';
    text.style.marginTop = value * 1.5 + 'px';
    btn.style.marginTop = value * 1.5 + 'px';
    header.style.top = value * 0.5 + 'px';
    
})

