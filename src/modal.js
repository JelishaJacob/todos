let modal = document.querySelector('#modal');
let form = document.querySelector('.form')

function handleModal(event){
    event.preventDefault();
    modal.showModal()
    form.reset();
}

export{handleModal}