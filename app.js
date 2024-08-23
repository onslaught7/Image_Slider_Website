let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');
let carouselDom = document.querySelector('.carousel');
let listItemDom = document.querySelector('.carousel .list');
let thumbnailDom = document.querySelector('.carousel .thumbnail');

nextDom.onclick = function(){
    showSlider('next');
}

prevDom.onclick = function(){
    showSlider('prev');
}

let timer = 500;
let timeout;
let autoNext = 8000;
let autoRun = setTimeout(() => {
    nextDom.click();
}, autoNext);

function showSlider(type){
    let itemSlider = document.querySelectorAll('.carousel .list .item');
    let itemThumbnail = document.querySelectorAll('.carousel .thumbnail .item');
    let lastItemPosition = itemSlider.length-1;
    console.log(itemSlider[0]);

    if(type === 'next'){
        // appendChild can also be used 
        listItemDom.append(itemSlider[0]);
        thumbnailDom.append(itemThumbnail[0]);
        carouselDom.classList.add('next');
    }else{
        listItemDom.prepend(itemSlider[lastItemPosition]);
        thumbnailDom.prepend(itemThumbnail[lastItemPosition]);
        carouselDom.classList.add('prev');
    }

    clearTimeout(timeout);
    timeout = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timer);

    clearTimeout(autoRun);
}