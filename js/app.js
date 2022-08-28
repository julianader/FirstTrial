const menuLinks = document.querySelector('.navbar_menu');
const navLogo = document.querySelector('#navbar_logo');



//show active menu when scrolling
const highlightMenu = () =>{
    const elem = document.querySelector('.highlight');
    const aboutMenu = document.querySelector('#about-page');
    const servicesMenu = document.querySelector('#services-page');
    let scrollPos = window.scrollY;
    console.log(scrollPos);
    
    //add 'highlight' class to my menu items
    if (window.innerWidth > 960 && scrollPos < 600){
        aboutMenu.classList.remove('highlight');
        return;
    } else if (window.innerWidth > 960 && scrollPos < 1400){
        aboutMenu.classList.add('highlight');
        servicesMenu.classList.remove('highlight');
        return;
    }  else if (window.innerWidth > 960 && scrollPos < 2345){
        servicesMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        return;
    }
    
    if ((elem && window.innerWidth < 960 && scrollPos < 600) || elem){
        elem.classList.remove('highlight');
    }
};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);