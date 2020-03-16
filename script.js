//Header
window.onload = function () {
    console.log('Hi,Lena!');
    addLinksClickHandler();
    addTagsClickHandler();
    addGalleryClickHandler();
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
    console.log(links);
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





