"use strict";

class Modal{
    constructor(_page){
        this.page = _page;
    }

    aparecerModal(){
        return this.page.style.display = 'Block';
    }
}

const btnModal = window.document.querySelector('.btn-modal');
const modal = window.document.querySelector('.modal');

btnModal.addEventListener('click', () =>{
    let modalObj = new Modal(modal);
    modalObj.aparecerModal();
});
