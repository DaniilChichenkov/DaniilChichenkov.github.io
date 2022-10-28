'use strict';

document.addEventListener('DOMContentLoaded', function() {
    const aboutImg = document.querySelectorAll('.about_img'),
          aboutName = document.querySelectorAll('.about_person-name'),
          aboutDesc = document.querySelectorAll('.about_person-desc');

    document.addEventListener('scroll', e => {
        //Img appear
        aboutImg.forEach( (item, i) => {
            if (item.getBoundingClientRect().top <= document.documentElement.clientHeight) {
                if (i % 2 == 0 || i == 0) {
                    if (item.classList.contains('invisible')) {
                        item.classList.remove('invisible');
                        item.classList.add('text_animation-left');
                    }
                } else if (i == 1 || i % 2 == 1) {
                    if (item.classList.contains('invisible')) {
                        item.classList.remove('invisible');
                        item.classList.add('text_animation-right');
                    }
                }
            }
        });

        //Name appear
        aboutName.forEach( (item, i) => {
            if (item.getBoundingClientRect().top <= document.documentElement.clientHeight) {
                if (i % 2 == 0 || i == 0) {
                    if (item.classList.contains('invisible')) {
                        item.classList.remove('invisible');
                        item.classList.add('text_animation-left');
                    }
                } else if (i == 1 || i % 2 == 1) {
                    if (item.classList.contains('invisible')) {
                        item.classList.remove('invisible');
                        item.classList.add('text_animation-right');
                    }
                }
            }
        });

        //Desc appear
        aboutDesc.forEach( (item, i) => {
            if (item.getBoundingClientRect().top <= document.documentElement.clientHeight) {
                if (i % 2 == 0 || i == 0) {
                    if (item.classList.contains('invisible')) {
                        item.classList.remove('invisible');
                        item.classList.add('text_animation-left');
                    }
                } else if (i == 1 || i % 2 == 1) {
                    if (item.classList.contains('invisible')) {
                        item.classList.remove('invisible');
                        item.classList.add('text_animation-right');
                    }
                }
            }
        });
    });
});