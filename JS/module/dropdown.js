import outsideClick from './outsideclick.js';


export default function initDropdown(){
    const drop = document.querySelectorAll('[data-dropdown]');

    drop.forEach(menu =>{//para adicionar dois ou mais eventos posso criar uma array ['touchstart', 'click'].forEach(userEvent => { menu.addEventListener(userEvent, handleClick)}) ambos funcionam
        ['touchstart', 'click'].forEach(userEvent => { 
            menu.addEventListener(userEvent, handleClick)
        });
        //para adcionar apenas um evento =>   menu.addEventListener('click', handleClick) 
    });

    function handleClick(event){
        event.preventDefault();
        this.classList.add('active');
        outsideClick(this, ['touchstart', 'click'], () => {
            this.classList.remove('active');
        });
    };
}
