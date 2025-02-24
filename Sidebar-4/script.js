// Js to make active selected links / class
let activeIndex;

const current = window.location.href;

const allLinks = document.querySelectorAll('.sidebar-links a');

allLinks.forEach((elements) => {
    elements.addEventListener("click", function (){
        const hrefLinkClick = elements.href;

        allLinks.forEach((link) => {
            if(link.href == hrefLinkClick) {
                link.classList.add("active");
            } else{
                link.classList.remove("active");
            }
        });
    });
});

// JS to open after click the sub-links

document.addEventListener("DOMContentLoaded", function () {
    const mainItems = document.querySelectorAll('.main-item');
    mainItems.forEach((mainItem) => {
        mainItem.addEventListener('click', () => {
            mainItem.classList.toggle('main-item--open');
             // Find the sibling UL and toggle its visibility
             const submenu = mainItem.nextElementSibling;
             if (submenu) {
                 submenu.style.visibility = submenu.style.visibility === "visible" ? "hidden" : "visible";
                 submenu.style.opacity = submenu.style.opacity === "1" ? "0" : "1";
                 submenu.style.maxHeight = submenu.style.maxHeight === "25rem" ? "0" : "25rem";
             }
        });
    });
});
