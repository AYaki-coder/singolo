//Header
window.onload = function () {
    console.log('Hi,Lena!');
    addLinksClickHandler();
    document.addEventListener('scroll', onScroll);
    addTagsClickHandler();
    addGalleryClickHandler();
}



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


//Portfolio
 

const addTagsClickHandler = () => {

    document.querySelector('.portfolio__tag-box').addEventListener('click', (e) => {
        if (e.target.classList.contains('portfolio__tag')) {
            let clickedTag = e.target;
            removeSelectedTag();
            selectClickedTag(clickedTag);
            //прицепить перетассовку картинок
        }
    })
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
    if (e.target.classList.contains('portfolio__pics')) {
        let clickedPic = e.target;
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





