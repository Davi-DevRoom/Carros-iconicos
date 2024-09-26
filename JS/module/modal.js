export default function initModal(){
    const abrir = document.querySelector('[data-modal="abrir"]');
    const fechar = document.querySelector('[data-modal="fechar"]');
    const container = document.querySelector('[data-modal="container"]');

    // if(abrir && fechar && container){
    //     function abrirModal(event){
    //         event.preventDefault();
    //         container.classList.add('ativo');
    //     }

    //     function fecharModal(event){
    //         container.classList.remove('ativo');

    //     }

    //     function cliqueFora(event){
    //         if(event.target === this){
    //         fecharModal();
    //         }
    //     }

    //     abrir.addEventListener('click', abrirModal);
    //     fechar.addEventListener('click', fecharModal);
    //     container.addEventListener('click', cliqueFora);
    // }

    // ou eu posso fazer com o toggle

    if(abrir && fechar && container){

        function toggleModal(event){
            event.preventDefault();
            container.classList.toggle('ativo');
        }

        function cliqueFora(event){
            if(event.target === this){
            toggleModal(event);
            }
        }

        abrir.addEventListener('click', toggleModal);
        fechar.addEventListener('click', toggleModal);
        container.addEventListener('click', cliqueFora);
    }

}