'use strict';

document.addEventListener('DOMContentLoaded', function() {
    //Link rect 
    const navLinksWithMenu = document.querySelectorAll('[data-menu-open_link]'),
          navLinksWithMenuUnderRect = document.querySelectorAll('[data-menu-contains_rect]');

    //Link rect visibility animation  
    
        //Appear
        navLinksWithMenu.forEach( (item, i) => {
            item.addEventListener('mouseenter', () => {
                linkUnderRectAppear(i);
            });
        });


        function linkUnderRectAppear(i) {
            if (navLinksWithMenuUnderRect[i].classList.contains('hovereffect')) {
                if (navLinksWithMenuUnderRect[i].classList.contains('link_rect_disappear')) {
                    navLinksWithMenuUnderRect[i].classList.remove('link_rect_disappear');
                }
    
                navLinksWithMenuUnderRect[i].classList.add('link_rect_appear');
            }
        };

        //Disappear
        navLinksWithMenu.forEach( (item, i) => {
            item.addEventListener('mouseleave', () => {
                linkUnderRectDisappear(i);
            });
        })

        function linkUnderRectDisappear(i) {
            if (navLinksWithMenuUnderRect[i].classList.contains('hovereffect')) {
                if (navLinksWithMenuUnderRect[i].classList.contains('link_rect_appear')) {
                    navLinksWithMenuUnderRect[i].classList.remove('link_rect_appear');
                };
    
                navLinksWithMenuUnderRect[i].classList.add('link_rect_disappear');
            };
        };

    
    //Link inner menu open and close
    const navLinkInnerMenu = document.querySelectorAll('.nav_link_inner-menu'),
          navLinkInnerMenuHidingRect = document.querySelectorAll('.nav_link_inner-menu_link-container_hiding-rect');

    //Hiding rect move
    navLinksWithMenu.forEach( (item, i) => {
        item.addEventListener('click', e => {

            //Remove hidden class or add
            if (navLinkInnerMenu[i].classList.contains('hidden')) {
                navLinkInnerMenu[i].classList.remove('hidden');
                navLinkInnerMenu[i].classList.add('link-menu_appear');

            } else {
                navLinkInnerMenu[i].classList.remove('link-menu_appear');
                navLinkInnerMenu[i].classList.add('link-menu_disappear');

                setTimeout( function() {
                    navLinkInnerMenu[i].classList.add('hidden');
                    navLinkInnerMenu[i].classList.remove('link-menu_disappear');
                }, 300);
            }

            if (!item.classList.contains('openLink')) {
            
                //Under link rect move
                linkUnderRectMoveForwards(i);
                navLinksWithMenuUnderRect[i].classList.remove('hovereffect');
    
                //Hiding rect move
                setTimeout( function() {
                    hidingMenuRectMoveForwards(i);
                }, 100);
    
                item.classList.add('openLink');

            } else {
                //Under link rect move
                linkUnderRectMoveBackwards(i);
                navLinksWithMenuUnderRect[i].classList.add('hovereffect');
                
                //Menu hiding rect move
                hidingMenuRectMoveBackwards(i);

                item.classList.remove('openLink');
            }
        });
    });

    //Under link rect move forwards
    function linkUnderRectMoveForwards(i) {
        //Rect move
        const rectPathToGo = navLinkInnerMenu[i].offsetHeight + 20;

        let rectPathCounter = 0;

        let timerId = setTimeout( function move() {
            if (rectPathCounter < rectPathToGo) {
                rectPathCounter += 2;
                navLinksWithMenuUnderRect[i].style.top = rectPathCounter + 'px';
                timerId = setTimeout( move, 5);

            } else {
                clearInterval(timerId);
            }
        }, 5);
    };

    //Under link rect move backwards
    function linkUnderRectMoveBackwards(i) {
        //Rect move
        const rectPathToGo = 0;

        let rectPathCounter = navLinkInnerMenu[i].offsetHeight + 20;

        let timerId = setTimeout( function move() {
            if (rectPathCounter > rectPathToGo) {
                rectPathCounter -= 2;
                navLinksWithMenuUnderRect[i].style.top = rectPathCounter + 'px';
                timerId = setTimeout( move, 5);

            } else {
                clearInterval(timerId);
            }
        }, 5)
    };

    //Menu hiding rect move forwards
    function hidingMenuRectMoveForwards(i) {
        //Rect move
        const rectPathToGo = navLinkInnerMenu[i].offsetHeight;

        let rectPathCounter = 0;

        let timerId = setTimeout( function move() {
            if (rectPathCounter < rectPathToGo) {
                rectPathCounter += 2;
                navLinkInnerMenuHidingRect[i].style.top = rectPathCounter + 'px';
                timerId = setTimeout( move, 5);

            } else {
                clearInterval(timerId);
            }
        }, 5);
    };

    //Menu hiding rect move backwards
    function hidingMenuRectMoveBackwards(i) {
        //Rect move
        const rectPathToGo = 0;

        let rectPathCounter = navLinkInnerMenu[i].offsetHeight;

        let timerId = setTimeout( function move() {
            if (rectPathCounter > rectPathToGo) {
                rectPathCounter -= 2;
                navLinkInnerMenuHidingRect[i].style.top = rectPathCounter + 'px';
                timerId = setTimeout( move, 5);

            } else {
                clearInterval(timerId);
            }
        }, 5);
    };


    //Lang buttons
    const engLang = document.querySelectorAll('[data-eng]'),
          estLang = document.querySelectorAll('[data-est]'),
          rusLang = document.querySelectorAll('[data-rus]');

    //Move to estonian language page
    estLang.forEach( (item) => {
        item.addEventListener('click', e => {
            window.location = '/public/prizeEst/index.html';
        });
    });


    //Burger menu
    const burgerMenuOpenButton = document.querySelector('.nav_burger-menu_open-button'),
          burgerMenuCloseButton = document.querySelector('.burger-menu_close-button'),
          burgerMenu = document.querySelector('.burger-menu');

        //Burger menu open
        function openBurgerMenu() {
                //Button animation
                burgerMenuOpenButton.classList.add('burger-menu_open-animation');
                setTimeout( function() {
                    burgerMenuOpenButton.classList.remove('burger-menu_open-animation');
                }, 600);

                //Preventing body from scroll while menu is open
                document.documentElement.style.overflow = 'hidden';

                //Burger menu margin top setting
                const burgerMenuMarginTop = document.documentElement.scrollTop;
                burgerMenu.style.top = burgerMenuMarginTop + 'px';

                //Burger menu position
                burgerMenu.classList.remove('burger-menu_slide-close_animation');
                burgerMenu.classList.add('burger-menu_slide-open_animation');

                burgerMenu.classList.add('opened');
        }
        
        //Burger menu close
        function closeBurgerMenu() {
            //Button animation
            burgerMenuCloseButton.classList.add('burger-menu_close-animation');
            setTimeout( function() {
                burgerMenuCloseButton.classList.remove('burger-menu_close-animation');
            }, 600);

            //Enable body to scroll
            document.documentElement.style.overflow = 'scroll';

            burgerMenu.classList.remove('burger-menu_slide-open_animation');
            burgerMenu.classList.add('burger-menu_slide-close_animation');

            burgerMenu.classList.remove('opened');
        };


    burgerMenuOpenButton.addEventListener('click', openBurgerMenu);

    burgerMenuCloseButton.addEventListener('click', closeBurgerMenu);


    //Burger menu link inner menu 
    const burgerMenuLinksWithMenu = document.querySelectorAll('[data-burger-link_menu]'),
          burgerMenuLinksMenu = document.querySelectorAll('.burger-menu_link_menu');

    burgerMenuLinksWithMenu.forEach( (item, i) => {
        item.addEventListener('click', () => {
            //If inner menu is closed
            if (burgerMenuLinksMenu[i].classList.contains('hidden')) {
                burgerMenuLinksMenu[i].classList.remove('hidden');
                burgerMenuLinksMenu[i].classList.remove('burger-menu_link-menu_disappear');
                burgerMenuLinksMenu[i].classList.add('burger-menu_link-menu_appear');

             //If inner menu is open
            } else {
                burgerMenuLinksMenu[i].classList.remove('burger-menu_link-menu_appear');
                burgerMenuLinksMenu[i].classList.add('burger-menu_link-menu_disappear');
                setTimeout( function() {
                    burgerMenuLinksMenu[i].classList.add('hidden');
                }, 500);
            }
        });
    });

    //Open pastry
    const openPastryPage = document.querySelectorAll('[data-open-pastry-page]');

    openPastryPage.forEach( item => {
        item.addEventListener('click', e => {
            window.location = 'pages/products_pastry.html';
        });
    });

    //Open about
    const openAboutPage = document.querySelectorAll('[data-open-about-page]');

    openAboutPage.forEach( item => {
        item.addEventListener('click', e => {
            window.location = 'pages/about.html';
        });
    });
});