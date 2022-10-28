'use strict';

document.addEventListener('DOMContentLoaded', function() {
    const itemContainer = document.querySelectorAll('.pastry_item-container'),
          itemContainerDescOpenButton = document.querySelectorAll('.pastry_item_desc-open_btn'),
          itemContainerBuyButton = document.querySelectorAll('.pastry_item-container_button');

    const itemContainerBody = document.querySelectorAll('.pastry_item-container_body'),
          itemContainerFooter = document.querySelectorAll('.pastry_item-container_footer'),
          itemContainerRect = document.querySelectorAll('.pastry_item-rect');

    //Buy item window
    const buyItemWindow = document.querySelector('.pastry_item_buy_window'),
          buyItemWindowItemImg = document.querySelector('.pastry_item_buy-window_img'),
          buyItemWindowItemName = document.querySelector('.pastry_item_buy-window_name'),
          buyItemWindowItemDescription = document.querySelector('.pastry_item_buy-window_desc');

    
    //Items data base
    const itemDataBase = {
        nuts: {
            //Nuts with apple
            appleNuts: {
                isActive: false,
                name: 'apple nuts',
                desc: 'this is the description of the apple nuts',
                img: 'images/header/nuts_apple.png',
                size: {
                    small: false,
                    large: false,
                },
                quantity: {
                    5: false,
                    9: false,
                    12: false,
                    35: false,
                    50: false,
                    80: false,
                },
                price: {
                    smallNutsPrices: {
                        5: 2.49,
                        9: 3.99,
                        12: 4.99,
                        35: 13.90,
                        50: 19.60,
                        80: 29.30,
                    },
                    largeNutsPrices: {
                        5: 2.99,
                        9: 4.79,
                        12: 5.99,
                        35: 16.90,
                        50: 23.60,
                        80: 36.30,
                    },
                },
            },

            //Nuts with bounty
            bountyNuts: {
                isActive: false,
                name: 'bounty nuts',
                desc: 'this is the description of the bounty nuts',
                img: 'images/header/nuts_bounty.png',
                size: {
                    small: false,
                    large: false,
                },
                quantity: {
                    5: false,
                    9: false,
                    12: false,
                    35: false,
                    50: false,
                    80: false,
                },
                price: {
                    smallNutsPrices: {
                        5: 2.49,
                        9: 3.99,
                        12: 4.99,
                        35: 13.90,
                        50: 19.60,
                        80: 29.30,
                    },
                    largeNutsPrices: {
                        5: 2.99,
                        9: 4.79,
                        12: 5.99,
                        35: 16.90,
                        50: 23.60,
                        80: 36.30,
                    },
                },
            },

            //Nuts with choc
            chocNuts: {
                isActive: false,
                name: 'choclate nuts',
                desc: 'this is the description of the chochlate nuts',
                img: 'images/header/nuts_choc.png',
                size: {
                    small: false,
                    large: false,
                },
                quantity: {
                    5: false,
                    9: false,
                    12: false,
                    35: false,
                    50: false,
                    80: false,
                },
                price: {
                    smallNutsPrices: {
                        5: 2.49,
                        9: 3.99,
                        12: 4.99,
                        35: 13.90,
                        50: 19.60,
                        80: 29.30,
                    },
                    largeNutsPrices: {
                        5: 2.99,
                        9: 4.79,
                        12: 5.99,
                        35: 16.90,
                        50: 23.60,
                        80: 36.30,
                    },
                },
            },

            //Nuts with twix
            twixNuts: {
                isActive: false,
                name: 'twix nuts',
                desc: 'this is the description of the twix nuts',
                img: 'images/header/nuts_twix.png',
                size: {
                    small: false,
                    large: false,
                },
                quantity: {
                    5: false,
                    9: false,
                    12: false,
                    35: false,
                    50: false,
                    80: false,
                },
                price: {
                    smallNutsPrices: {
                        5: 2.49,
                        9: 3.99,
                        12: 4.99,
                        35: 13.90,
                        50: 19.60,
                        80: 29.30,
                    },
                    largeNutsPrices: {
                        5: 2.99,
                        9: 4.79,
                        12: 5.99,
                        35: 16.90,
                        50: 23.60,
                        80: 36.30,
                    },
                },
            },
        },
    };

    //To buy buttons
        
    //Buy apple nuts
    const buyAppleNutsButton = document.querySelector('[data-buy-apple-nuts]');

    buyAppleNutsButton.addEventListener('click', function() {
        //Set img
        buyItemWindowItemImg.src = '';
        buyItemWindowItemImg.src = itemDataBase.nuts.appleNuts.img;

        //Set name
        buyItemWindowItemName.innerHTML = itemDataBase.nuts.appleNuts.name;

        //Set desc
        buyItemWindowItemDescription.innerHTML = itemDataBase.nuts.appleNuts.desc;

        //Set apple nuts as active
        for (let key in itemDataBase.nuts) {
            itemDataBase.nuts[key].isActive = false;
        };

        itemDataBase.nuts.appleNuts.isActive = true;

        console.log(itemDataBase);
    });

    //Buy bounty nuts
    const buyBountyNutsButton = document.querySelector('[data-buy-bounty-nuts]');

    buyBountyNutsButton.addEventListener('click', () => {
        //Set img
        buyItemWindowItemImg.src = '';
        buyItemWindowItemImg.src = itemDataBase.nuts.bountyNuts.img;

        //Set name
        buyItemWindowItemName.innerHTML = itemDataBase.nuts.bountyNuts.name;

        //Set desc
        buyItemWindowItemDescription.innerHTML = itemDataBase.nuts.bountyNuts.desc;

        //Set apple nuts as active
        for (let key in itemDataBase.nuts) {
            itemDataBase.nuts[key].isActive = false;
        };

        itemDataBase.nuts.bountyNuts.isActive = true;

        console.log(itemDataBase);
    });


    //Buy choclate nuts
    const buyChocNutsButton = document.querySelector('[data-buy-choc-nuts]');
    
    buyChocNutsButton.addEventListener('click', () => {
        //Set img
        buyItemWindowItemImg.src = '';
        buyItemWindowItemImg.src = itemDataBase.nuts.chocNuts.img;

        //Set name
        buyItemWindowItemName.innerHTML = itemDataBase.nuts.chocNuts.name;

        //Set desc
        buyItemWindowItemDescription.innerHTML = itemDataBase.nuts.chocNuts.desc;

        //Set apple nuts as active
        for (let key in itemDataBase.nuts) {
            itemDataBase.nuts[key].isActive = false;
        };

        itemDataBase.nuts.chocNuts.isActive = true;

        console.log(itemDataBase);
    });


    //Buy twix nuts
    const buyTwixNutsButton = document.querySelector('[data-buy-twix-nuts]');

    buyTwixNutsButton.addEventListener('click', () => {
        //Set img
        buyItemWindowItemImg.src = '';
        buyItemWindowItemImg.src = itemDataBase.nuts.twixNuts.img;

        //Set name
        buyItemWindowItemName.innerHTML = itemDataBase.nuts.twixNuts.name;

        //Set desc
        buyItemWindowItemDescription.innerHTML = itemDataBase.nuts.twixNuts.desc;

        //Set apple nuts as active
        for (let key in itemDataBase.nuts) {
            itemDataBase.nuts[key].isActive = false;
        };

        itemDataBase.nuts.twixNuts.isActive = true;
    });

    //Price
    const buyWindowPriceOnPage = document.querySelector('.pastry_item_buy-window_price');

    //Quantity
    const quantitySelectButtons = document.querySelectorAll('.pastry_item_quantity-button');

    //Buy window buttons
    
        //Size select buttons
        const sizeSelectButtons = document.querySelectorAll('.pastry_item_size-button'),
              sizeSelectSmallButton = document.querySelector('[data-pastry_item-size_s]'),
              sizeSelectLargeButton = document.querySelector('[data-pastry_item-size_l]');

        const sizeSelectModalWindow = document.querySelector('.choose-size_modal-window');

        //Remove 'must select' if button was pressed
        sizeSelectButtons.forEach( item => {
            item.addEventListener('click', e => {
                if (e.target.classList.contains('must-select-button')) {
                    sizeSelectButtons.forEach( item => {
                        item.classList.remove('must-select-button');
                    });
                }
            });
        });

        sizeSelectSmallButton.addEventListener('click', e => {
            //If large nuts button was pressed before
            if (sizeSelectLargeButton.classList.contains('selected-button')) {
                sizeSelectLargeButton.classList.remove('selected-button');

                //Searching if any amount button was pressed
                quantitySelectButtons.forEach( item => {
                    if (item.classList.contains('selected-button')) {
                        //Searching for current active nut
                        for (let key in itemDataBase.nuts) {
                            if (itemDataBase.nuts[key].isActive) {
                                //Changing price depends on new size
                                for (let targetPrice in itemDataBase.nuts[key].price.smallNutsPrices) {
                                    if (item.innerHTML === targetPrice) {
                                        buyWindowPriceOnPage.innerHTML = `${itemDataBase.nuts[key].price.smallNutsPrices[targetPrice]}$`;
                                    }
                                }
                            }
                        }
                    }
                });
            }

            //Animation of the button
            e.target.classList.add('selected-button');

            //Nuts animation
            buyItemWindowItemImg.classList.remove('l-nuts');
            buyItemWindowItemImg.classList.add('s-nuts');

            //Setting size property into data base
            for (let key in itemDataBase.nuts) {
                if (itemDataBase.nuts[key].isActive) {
                    itemDataBase.nuts[key].size.large = false;
                    itemDataBase.nuts[key].size.small = true;
                };
            };
        });

        sizeSelectLargeButton.addEventListener('click', e => {
            //If small nuts button was pressed before
            if (sizeSelectSmallButton.classList.contains('selected-button')) {
                sizeSelectSmallButton.classList.remove('selected-button');

                //Searching if any amount button was pressed
                quantitySelectButtons.forEach( item => {
                    if (item.classList.contains('selected-button')) {
                        //Searching for current active nut
                        for (let key in itemDataBase.nuts) {
                            if (itemDataBase.nuts[key].isActive) {
                                //Changing price depends on new size
                                for (let targetPrice in itemDataBase.nuts[key].price.largeNutsPrices) {
                                    if (item.innerHTML === targetPrice) {
                                        buyWindowPriceOnPage.innerHTML = `${itemDataBase.nuts[key].price.largeNutsPrices[targetPrice]}$`;
                                    }
                                }
                            }
                        }
                    }
                });
            }

            //Animation of the button
            e.target.classList.add('selected-button');

            //Nuts animation
            buyItemWindowItemImg.classList.remove('s-nuts');
            buyItemWindowItemImg.classList.add('l-nuts');

            //Setting size property into data base
            for (let key in itemDataBase.nuts) {
                if (itemDataBase.nuts[key].isActive) {
                    itemDataBase.nuts[key].size.small = false;
                    itemDataBase.nuts[key].size.large = true;
                };
            };
        });

        //Quantity select buttons event
        quantitySelectButtons.forEach( (item) => {
            item.addEventListener('click', e => {
                //Open modal window if any size buttons was not pressed
                if (!sizeSelectModalWindow.classList.contains('modal-open')) {
                    let wasPressed = false;

                    sizeSelectButtons.forEach( item => {
                        if (item.classList.contains('selected-button')) {
                            wasPressed = true;
                        };
                    });
    
                    if (!wasPressed) {
                        sizeSelectModalWindow.classList.remove('hidden');
                        let scrolled = buyItemWindow.scrollTop;
                        
                        let sizeSelectModalWindowStartPosition = -sizeSelectModalWindow.offsetHeight + scrolled,
                            sizeSelectModalWindowFinalPosition = sizeSelectModalWindowStartPosition + 70;
    
                        let timerId = setTimeout( function move() {
                            if (sizeSelectModalWindowStartPosition < sizeSelectModalWindowFinalPosition) {
                                sizeSelectModalWindowStartPosition += 2;
                                sizeSelectModalWindow.style.top = sizeSelectModalWindowStartPosition + 'px';
                                timerId = setTimeout( move, 5);
    
                            } else {
                                clearInterval(timerId);
                            }
                        }, 5);
    
                        sizeSelectModalWindow.classList.add('modal-open');
                    }

                    //If modal window was already open
                } else {
                    sizeSelectModalWindow.classList.add('size-select_modal-window_already-open');

                    setTimeout( function() {
                        sizeSelectModalWindow.classList.remove('size-select_modal-window_already-open');
                    }, 500);
                }

                //Searching for active item and changing price
                for (let key in itemDataBase.nuts) {
                    if (itemDataBase.nuts[key].isActive) {
                        //If nuts are small
                        if (itemDataBase.nuts[key].size.small) {
                            //Searching for the price for this amount
                            for (let targetPrice in itemDataBase.nuts[key].price.smallNutsPrices) {
                                if (e.target.innerHTML === targetPrice) {

                                    quantitySelectButtons.forEach( item => {
                                        item.classList.remove('selected-button');
                                    });
                    
                                    e.target.classList.add('selected-button'); 

                                    //Removing all the other quantities
                                    for (let nutsQuantity in itemDataBase.nuts[key].quantity) {
                                        itemDataBase.nuts[key].quantity[nutsQuantity] = false;
                                    };

                                    //Set target quantity
                                    for (let nutsQuantity in itemDataBase.nuts[key].quantity) {
                                        if (e.target.innerHTML === nutsQuantity) {
                                            itemDataBase.nuts[key].quantity[nutsQuantity] = true;
                                        }
                                    }

                                    buyWindowPriceOnPage.innerHTML = `${itemDataBase.nuts[key].price.smallNutsPrices[targetPrice]}$`;

                                    console.log(itemDataBase.nuts[key].quantity);
                                }
                            }
                        //If nuts are large  
                        } else if (itemDataBase.nuts[key].size.large) {
                            for (let targetPrice in itemDataBase.nuts[key].price.largeNutsPrices) {
                                if (e.target.innerHTML === targetPrice) {
                                    quantitySelectButtons.forEach( item => {
                                        item.classList.remove('selected-button');
                                    });
                    
                                    e.target.classList.add('selected-button');

                                    //Removing all the other quantities
                                    for (let nutsQuantity in itemDataBase.nuts[key].quantity) {
                                        itemDataBase.nuts[key].quantity[nutsQuantity] = false;
                                    };

                                    //Set target quantity
                                    for (let nutsQuantity in itemDataBase.nuts[key].quantity) {
                                        if (e.target.innerHTML === nutsQuantity) {
                                            itemDataBase.nuts[key].quantity[nutsQuantity] = true;
                                        }
                                    }

                                    buyWindowPriceOnPage.innerHTML = `${itemDataBase.nuts[key].price.largeNutsPrices[targetPrice]}$`;

                                    console.log(itemDataBase.nuts[key].quantity);
                                }
                            }
                        //If nuts size is not selected
                        } else {
                            sizeSelectButtons.forEach( item => {
                                item.classList.add('must-select-button');
                            });
                        }
                    }
                }

            });
        });

        //Confirm button
        const buyWindowConfirmButton = document.querySelector('[data-confirm-button]');

        //Back button
        const buyWindowBackButton = document.querySelector('[data-back-button]');

        

    //Item description open and close animation     
    itemContainerDescOpenButton.forEach( (item, i) => {
        item.addEventListener('click', function() {

            //If button was presed to open 
            if (!item.classList.contains('opened')) {
                //Rect animation start
                itemContainerRect[i].classList.remove('rect-animation_backwards');
                itemContainerRect[i].classList.add('rect-animation_forwards');
                item.classList.add('pastry_item_desc-open_btn_opened');

                itemContainerBody[i].classList.remove('element-disappear');
                itemContainerFooter[i].classList.remove('element-disappear');

                setTimeout( () => {
                    //Rect animation stop
                    itemContainerRect[i].classList.remove('rect-animation_forwards');

                    //Remove 'hidden' class
                    itemContainerBody[i].classList.remove('hidden');
                    itemContainerFooter[i].classList.remove('hidden');

                    //Animation
                    itemContainerBody[i].classList.add('element-appear');
                    itemContainerFooter[i].classList.add('element-appear');
                } , 1000);

                item.classList.add('opened');

            } else {
                item.classList.remove('opened');
                item.classList.remove('pastry_item_desc-open_btn_opened');

                itemContainerBody[i].classList.remove('element-appear');
                itemContainerFooter[i].classList.remove('element-appear');

                itemContainerBody[i].classList.add('element-disappear');
                itemContainerFooter[i].classList.add('element-disappear');

                setTimeout( function() {
                    itemContainerBody[i].classList.add('hidden');
                    itemContainerFooter[i].classList.add('hidden');
                    itemContainerRect[i].classList.add('rect-animation_backwards');
                }, 500);
            }
        });
    });


    //Buy window open
    itemContainerBuyButton.forEach( (item) => {
        item.addEventListener('click', () => {
            //If window was closed
            if (!buyItemWindow.classList.contains('buy-modal-window_opened')) {
                //Calc window position
                buyItemWindow.style.top = document.documentElement.scrollTop + 'px';

                //Disable body from scrolling
                this.body.style.overflow = 'hidden';
                buyItemWindow.style.overflow = 'scroll';
                
                buyItemWindow.classList.remove('pastry_item_buy_window-animation_backwards');
                buyItemWindow.classList.add('pastry_item_buy_window-animation_forwards');

                buyItemWindow.classList.add('buy-modal-window_opened');
            }
        });
    });

    //Buy window close
    buyWindowBackButton.addEventListener('click', () => {
        this.body.style.overflow = 'scroll';

        buyItemWindow.classList.remove('pastry_item_buy_window-animation_forwards');
        buyItemWindow.classList.add('pastry_item_buy_window-animation_backwards');

        buyItemWindow.classList.remove('buy-modal-window_opened');

        //Removing all size parametrs 
        sizeSelectButtons.forEach( item => {
            item.classList.remove('must-select-button');
            item.classList.remove('selected-button');
        });

        for (let key in itemDataBase.nuts) {
            itemDataBase.nuts[key].isActive = false;
            itemDataBase.nuts[key].size.large = false;
            itemDataBase.nuts[key].size.small = false;

            for (let targetPrice in itemDataBase.nuts[key].quantity) {
                itemDataBase.nuts[key].quantity[targetPrice] = false;
            }
        };

        //Removing scale from img
        buyItemWindowItemImg.classList.remove('l-nuts');
        buyItemWindowItemImg.classList.remove('s-nuts');

        //Removing choosen amount and price
        quantitySelectButtons.forEach( item => {
            item.classList.remove('selected-button');
        });

        buyWindowPriceOnPage.innerHTML = '';

        //Removing all the quantities
        for (let key in itemDataBase.nuts) {
            for (let quantity in itemDataBase.nuts[key].quantity) {
                itemDataBase.nuts[key].quantity[quantity] = false;
            }
        };

        if (sizeSelectModalWindow.classList.contains('modal-open')) {
            closeModalWindow();
        };
    });

    //Modal window close

        //On click
        sizeSelectModalWindow.addEventListener('click', closeModalWindow);

        //When buy item window is being scrolled
        buyItemWindow.addEventListener('scroll', closeModalWindow);

        //When size select button is pressed
        sizeSelectButtons.forEach( item => {
            item.addEventListener('click', closeModalWindow);
        });

        function closeModalWindow() {
            if (sizeSelectModalWindow.classList.contains('modal-open')) {
                sizeSelectModalWindow.classList.add('size-select_modal-window_close');

                setTimeout( function() {
                    sizeSelectModalWindow.classList.remove('size-select_modal-window_close');
                    sizeSelectModalWindow.style.top = - (sizeSelectModalWindow.offsetHeight + buyItemWindow.scrollTop + 50) + 'px';
                    sizeSelectModalWindow.classList.add('hidden');
                }, 500);

                sizeSelectModalWindow.classList.remove('modal-open');
            }
        };
});