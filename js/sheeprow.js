let sheeprow = document.querySelector('.sheeprow');
let colwidth = document.querySelector('.newcol').offsetWidth;
let view = document.querySelector('.view');
let leftbtn = document.querySelector('.btngroup .fa-arrow-left');
let rightbtn = document.querySelector('.btngroup .fa-arrow-right');

view.style.width = (parseInt(Math.floor(document.querySelector('.sheeprow').offsetWidth/colwidth) * colwidth))+'px';

resizes();

function resizes(){
    view.style.width = (parseInt(Math.floor(document.querySelector('.sheeprow').offsetWidth/colwidth) * colwidth))+'px';
}

window.addEventListener("resize", resizes);



let cols = [...view.children];

let pview = Math.round(view.offsetWidth/colwidth);

cols.slice(-pview).reverse().forEach(col=>{
    view.insertAdjacentHTML("afterbegin",col.outerHTML);
})
cols.slice(0, pview).forEach(col=>{
    view.insertAdjacentHTML("beforeend",col.outerHTML);
})

let timeoutIds;

let autoplays = () => {
    timeoutIds = setTimeout(() => {
        view.scrollLeft += colwidth;
        autoplays(); // 呼叫自身以實現循環
    }, 3500);
}
autoplays();

let infinitescrolls = () =>{
    if(view.scrollLeft == 0){
        view.style.scrollBehavior = 'auto'
        view.scrollLeft = view.scrollWidth - (2 * view.offsetWidth);
        view.style.scrollBehavior = 'smooth'
    }else if(Math.ceil(view.scrollLeft) == view.scrollWidth - view.offsetWidth){
        view.style.scrollBehavior = 'auto'
        view.scrollLeft = view.offsetWidth;
        view.style.scrollBehavior = 'smooth'
    }
    clearTimeout(timeoutIds);
    autoplays();
}

let isScrolling = false;


leftbtn.addEventListener('click', () => {
    if (!isScrolling) {
        clearTimeout(timeoutIds);    
        isScrolling = true;
        view.scrollLeft -= colwidth;
        autoplays();
        setTimeout(() => {
            isScrolling = false;
        }, 500);
    }
});

rightbtn.addEventListener('click', () => {
    if (!isScrolling) {
        clearTimeout(timeoutIds);    
        isScrolling = true;
        view.scrollLeft += colwidth;
        autoplays();
        setTimeout(() => {
            isScrolling = false;
        }, 500);
    }
});


view.addEventListener("scroll",infinitescrolls);
sheeprow.addEventListener("mouseenter",()=>clearTimeout(timeoutIds));
sheeprow.addEventListener("mouseleave",autoplays);