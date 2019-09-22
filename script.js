"use strict";

class Modal{
    constructor(_page){
        this.page = _page;
    }

    aparecerModal(){
        return this.page.style.display = 'block';
    }

    desparecerModal(){
        return this.page.style.display = 'none';
    }
}

const components = {
    btnModal: window.document.querySelector('.btn-modal'),
    btnModal2: window.document.querySelector('.btn-modal2'),
    btnModal3: window.document.querySelector('.btn-modal3'),
    modal: window.document.querySelector('.modal'),
    btnExitModal: window.document.querySelector('.exitModal')
};

components.btnModal.addEventListener('click', () =>{
    let modalObj = new Modal(components.modal);
    modalObj.aparecerModal();
    
    let antiscroll = window.document.querySelector('html, body');
    antiscroll.style.overflow = 'hidden';
    antiscroll.style.height = '100%';
});

components.btnModal2.addEventListener('click', () =>{
    let modalObj = new Modal(components.modal);
    modalObj.aparecerModal();
    
    let antiscroll = window.document.querySelector('html, body');
    antiscroll.style.overflow = 'hidden';
    antiscroll.style.height = '100%';
});

components.btnModal3.addEventListener('click', ()=>{
    let modalObj = new Modal(components.modal);
    modalObj.aparecerModal();
    
    let antiscroll = window.document.querySelector('html, body');
    antiscroll.style.overflow = 'hidden';
    antiscroll.style.height = '100%';
});

components.btnExitModal.addEventListener('click', ()=>{
    let modalObj = new Modal(components.modal);
    modalObj.desparecerModal();
    let antiscroll = window.document.querySelector('html, body');
    antiscroll.style.overflow = 'auto';
    antiscroll.style.height = 'auto';
});
