const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burguerMenu = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
burguerMenu.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu (){
    const isAsideClose = aside.classList.contains('inactive');

    if (!isAsideClose){
        aside.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu () {
    const isAsideClose = aside.classList.contains('inactive');

    if (!isAsideClose) {
        aside.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');

    
}

function toggleCarritoAside() {
    const ismobileMenuClose = mobileMenu.classList.contains('inactive');
    
    if (!ismobileMenuClose) {
        mobileMenu.classList.add('inactive');
    }
     aside.classList.toggle('inactive');

   
}