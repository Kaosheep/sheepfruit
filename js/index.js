const icona = document.getElementById('icona');
const icon = document.getElementById('icon')
let newy = document.getElementById('new');
let activityy = document.getElementById('activity');
let shopy = document.getElementById('shop');
let contacty = document.getElementById('contact');

window.addEventListener('scroll', function() {
    if((newy.getBoundingClientRect().top - window.innerHeight)<=-100){
        one.src = icona.src
    }else{
        one.src = icon.src
    }
    if((activityy.getBoundingClientRect().top - window.innerHeight)<=-100){
        two.src = icona.src
    }else{
        two.src = icon.src
    }
    if((shopy.getBoundingClientRect().top - window.innerHeight)<=-100){
        three.src = icona.src
    }else{
        three.src = icon.src
    }
    if((contacty.getBoundingClientRect().top - window.innerHeight)<=-100){
        four.src = icona.src
    }else{
        four.src = icon.src
    }
});


window.addEventListener('scroll', ()=>{
    if(document.documentElement.scrollTop>window.innerHeight){
        monav.style.top = '0px'
    }else{
        monav.style.top = '-100%'
    }
    });
let wrap = document.querySelector('.wrap')
let paralogo = document.getElementById('paralogo');
let floor = document.getElementById('floor');
let moun = document.getElementById('moun');
let cl= document.getElementById('cl');
let cr = document.getElementById('cr');
window.addEventListener("scroll",()=>{
    let value = window.scrollY;
    paralogo.style.marginTop = value*1.3 + 'px'
    moun.style.bottom = value*-0.2 + 'px'
    cl.style.left = value* -0.5 + 'px'
    cr.style.right = value* -0.5 + 'px'
})
window.addEventListener("mousemove",(e)=>{
    let x = (window.innerWidth - e.pageX)/98;
    let y = (window.innerHeight- e.pageY)/100;
    cl.style.transform = `translate(${x}px , ${y}px)`;
    cr.style.transform = `translate(-${x}px , -${y}px)`
})
window.addEventListener("scroll",()=>{
    if(document.documentElement.scrollTop>30 ){
    document.querySelector('.fa-angles-down').style.opacity = '0'    
    }else{document.querySelector('.fa-angles-down').style.opacity = '1' }
})

//--------------------------------------------------------------------


