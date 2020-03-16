//Header
window.onload = function () {
    console.log('Hi,Lena!');
    addLinksClickHandler();
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
//Get a Quote





