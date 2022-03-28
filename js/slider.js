
const MDATA = {
    btn__modal:  document.querySelectorAll('.less1__modal')[0],
    modal__container: document.querySelectorAll('.modal__container')[0],
    modal__closeX: document.querySelectorAll('.modal__close')[0],
    modal__closeBtn: document.querySelectorAll('.modal__close')[1],
    modal: document.getElementById('modal')
}
MDATA.modal__container.style.display='none'

MDATA.btn__modal.onclick = show;
MDATA.modal__container.onclick = hide;
MDATA.modal__closeX.onclick = hide;
MDATA.modal__closeBtn.onclick = hide;
MDATA.modal.onclick = show;

function show (){
    MDATA.modal__container.style.display='flex'
    

}
function hide () {
    console.log(event);
    if(event.target == MDATA.modal__closeBtn || event.target == MDATA.modal__closeX || event.target == MDATA.modal__container){
        MDATA.modal__container.style.display='none'
    }
     
}