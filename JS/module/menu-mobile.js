import outsideClick from "./outsideclick.js";

export default function initMenuMobile(){
    const menuButton = document.querySelector('[data-menu="button"]');
    const menuList = document.querySelector('[data-menu="list"]');
    const eventos = ['click', 'touch']
    if(menuButton){
    function openMenu(event){
        menuButton.classList.add('active');
        menuList.classList.add('active');
        outsideClick(menuList, eventos, () => {
            menuList.classList.remove('active');
            menuButton.classList.remove('active');
        });
    }
    eventos.forEach(evento => menuButton.addEventListener(evento, openMenu));
    }
}
