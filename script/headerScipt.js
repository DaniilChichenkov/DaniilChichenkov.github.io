'use strict';

document.addEventListener('DOMContentLoaded', function() {
    const headerImgFrames = document.querySelectorAll('.header_img-frame');

    //Frame counter
    let frameCounter = 0;

    let timerId = setTimeout( function openFrame() {
        //If it is last frame
        if (frameCounter == headerImgFrames.length - 1) {
            //Hide current frame
            headerImgFrames[frameCounter].classList.remove('show-frame');
            headerImgFrames[frameCounter].classList.add('hide-frame');

            //Show first frame
            frameCounter = 0;

            headerImgFrames[frameCounter].classList.remove('hide-frame');
            headerImgFrames[frameCounter].classList.add('show-frame');

            timerId = setTimeout( openFrame, 4000);

        } else {
            //Hide current frame
            headerImgFrames[frameCounter].classList.remove('show-frame');
            headerImgFrames[frameCounter].classList.add('hide-frame');

            //Show current frame
            headerImgFrames[frameCounter + 1].classList.remove('hide-frame');
            headerImgFrames[frameCounter + 1].classList.add('show-frame');

            frameCounter++;

            //Recursion
            timerId = setTimeout( openFrame, 4000);
        }
    }, 4000);
});