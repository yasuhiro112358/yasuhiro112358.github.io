'use strict';

{
    const overlay = document.querySelector('.overlay');
    const overlayMain = document.querySelector('.overlay-main');


    const open = document.getElementById('open');

    open.addEventListener('click', () => {
        overlay.classList.add('show');
        overlayMain.classList.add('show');
        open.classList.add('hide');
    });
    
    
    const close = document.getElementById('close');
    
    close.addEventListener('click', () => {
        overlay.classList.remove('show');
        overlayMain.classList.remove('show');
        open.classList.remove('hide');
    });

    
    // ウィンドウの幅が６００に達するとshowクラスをremoveするコードを書きたい
    

}