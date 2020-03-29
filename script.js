
window.onload = function () {
    console.log('Hi,Lena!');
    addLinksClickHandler();
    document.addEventListener('scroll', onScroll);
    addPhone1ClickHandler();
    addPhone2ClickHandler();
    addTagsClickHandler();
    addGalleryClickHandler();
}


//Header
function onScroll(){

    const curPos = window.scrollY;
    const section = document.querySelectorAll('.fabulous_spike');
    const links = document.querySelectorAll('.navigation-link');

    section.forEach((el) =>{
        el.getAttribute('id');

        if((el.parentNode.offsetTop + el.offsetTop) <= curPos && (el.parentNode.offsetTop + el.parentNode.offsetHeight) > curPos){
            links.forEach((a) =>{
                a.classList.remove('link_selected');
                if( el.getAttribute('id') === a.getAttribute('href').substring(1)){
                a.classList.add('link_selected');  
                }
            })
        }
    })

    if (curPos == (document.documentElement.scrollHeight - document.documentElement.clientHeight)){
        links.forEach((a) =>{
            a.classList.remove('link_selected');

        })
        links[links.length-1].classList.add('link_selected');
    
    }

}
const addLinksClickHandler = () => {

    document.querySelector('.site-header__navigation').addEventListener('click', (e) => {
        if (e.target.classList.contains('navigation-link')) {
            let clickedLink = e.target;
            removeSelectedLink();
            selectClickedLink(clickedLink);
        }
    })
}

const removeSelectedLink = () => {
    let links = document.querySelectorAll('.site-header__navigation .navigation-link');
    links.forEach((link) => {

        link.classList.remove('link_selected');

    })
}
const selectClickedLink = (clickedLink) => {

    clickedLink.classList.add('link_selected');
}

//Slider
function addPhone1ClickHandler(){

    let phone = document.querySelector('.phone-vertical');
    let Screen = document.querySelector('.screen-1');
    turnOnOffScreen(phone,Screen);

}

function addPhone2ClickHandler(){

    let phone = document.querySelector('.phone-horizontal');
    let Screen = document.querySelector('.screen-2');
    turnOnOffScreen(phone,Screen);

}

function turnOnOffScreen(phone,Screen){
    phone.addEventListener('click', (e) =>{
       

       if(Screen.classList.contains('turned-off')){
           Screen.classList.remove('turned-off');
       } else {
       Screen.classList.add('turned-off');
    }
    })
}


let items = document.querySelectorAll('.slider__slide');
let currentItem = 0;
let isEnabled = true;

function changeCurrentItem (n){
    currentItem = (n + items.length) % items.length;
}

function hideItem(direction){
    isEnabled = false;
    items[currentItem].classList.add(direction);
    items[currentItem].addEventListener('animationend', function(){
        this.classList.remove('slide_active', direction);
    })
}

function showItem(direction){
    isEnabled = false;
    items[currentItem].classList.add('slide_next', direction);
    items[currentItem].addEventListener('animationend', function(){
        this.classList.remove('slide_next', direction);
        this.classList.add('slide_active');
        isEnabled = true;
    })
}

function previousItem(n){
    hideItem('to_right');
    changeCurrentItem(n - 1);
    showItem('from_left');
}
function nextItem(n){
    hideItem('to_left');
    changeCurrentItem(n + 1);
    showItem('from_right');
}

document.querySelector('.button_left').addEventListener('click', function() {
    if(isEnabled){
        previousItem(currentItem);
    }
});
document.querySelector('.button_right').addEventListener('click', function() {
    if(isEnabled){
        nextItem(currentItem);
    }
});





//Portfolio
 

const addTagsClickHandler = () => {

    document.querySelector('.portfolio__tag-box').addEventListener('click', (e) => {
        if (e.target.classList.contains('portfolio__tag')) {
            let clickedTag = e.target;
            removeSelectedTag();
            selectClickedTag(clickedTag);
            mainShuffle();
        }
    })
}

function  shuffleImages(arr) {
    let j, temp;
    for (let i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i));
        temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
    }
    return arr;
}

const mainShuffle = () => {
    const ImageBoxes = document.querySelectorAll('.portfolio__pics');
    let BoxesArr = [];
    const ParentBox = document.querySelector('.portfolio__album');
    for (let i = 0; i < ImageBoxes.length; i++){
        BoxesArr[i] =  ImageBoxes[i].cloneNode(true);
         }
    shuffleImages(BoxesArr);

    ParentBox.innerHTML = '';
    for (let i = 0; i < ImageBoxes.length; i++){
        ParentBox.append(BoxesArr[i]) ;
    }
}

const removeSelectedTag = () => {
    let tags = document.querySelectorAll('.portfolio__tag-box .portfolio__tag');
    tags.forEach( (tag) => {
        tag.classList.remove('tag_selected');
    })
}
const selectClickedTag = (clickedTag) => {
    clickedTag.classList.add('tag_selected');
}

const addGalleryClickHandler = () => {

    document.querySelector('.portfolio__album').addEventListener('click', (e) =>{
    if (e.target.classList.contains('portfolio__image')) {
        let clickedPic = e.target.parentNode;
        removeSelectedPic();
        selectClickedPic(clickedPic);
    }
 })
}

const  removeSelectedPic = () => {

    let pics = document.querySelectorAll('.portfolio__album .portfolio__pics');
    console.log(pics);
    pics.forEach( (pic) => {
      pic.classList.remove('pic_selected');

    })

}

const  selectClickedPic = (clickedPic) => {

    clickedPic.classList.add('pic_selected');
}
 //Get a Quote
 

//  const button = document.querySelector('.submit-button');
 const Close_Button = document.getElementById('close-btn');

 

 document.forms[0].addEventListener('submit', (event) =>{
     event.preventDefault();
     const subject = document.getElementById('subject').value.toString();
     const description = document.getElementById('description').value.toString();
     document.getElementById('subject-result').innerText = subject == '' ? 'No subject' : `Subject: ${subject}`;
     document.getElementById('description-result').innerText = description == '' ? 'No description' : `Description: ${description}`;
     document.getElementById('form-message').classList.remove('hidden');


 });

 Close_Button.addEventListener('click', () =>{
    document.getElementById('subject-result').innerText = '';
    document.getElementById('description-result').innerText ='';
    document.getElementById('form-message').classList.add('hidden');
    document.forms[0].reset();



 });







