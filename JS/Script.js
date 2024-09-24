function initTabMenu(){   
    const menuTab = document.querySelectorAll('[data-tab="menu"] li');
    const contentTab = document.querySelectorAll('[data-tab="content"] section');
    contentTab[0].classList.add('ativo'); 
    if(contentTab.length && menuTab.length){
        function activeTab(index){
            contentTab.forEach((section) => {
                section.classList.remove('ativo');
            });
            const direcao = contentTab[index].dataset.anime;
            contentTab[index].classList.add('ativo', direcao);

            document.body.style.backgroundColor = getColorForIndex(index);
        }

        function getColorForIndex(index) {
            // Define as cores para cada aba
            const colors = ['#28589A', '#E4E5E0', '#03A66A', '#F2B705'];
            return colors[index] || '#28589A'; // Cor padrão se o índice estiver fora do intervalo
        }

        menuTab.forEach((itemMenu, index) => {
            itemMenu.addEventListener('click',() => {
                activeTab(index);
            })
        });
    }
}initTabMenu();

function initAccordion(){
    const accordionList = document.querySelectorAll('[data-anime="accordion"] dt');
    const activeClass = 'ativo';

    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);
    function activeAccordion(){
        this.classList.toggle(activeClass);
        this.nextElementSibling.classList.toggle(activeClass);
    }

    accordionList.forEach((item) => {
        item.addEventListener('click', activeAccordion);
    })
}initAccordion();


function initScrollSuave(){
    const linksInternos = document.querySelectorAll('[data-menu="smooth"] a[href^="#"]');

    function scrollToSection(event) {
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);
        section.scrollIntoView({
            behavior:'smooth', 
            block: 'start',
        });  
    }

    linksInternos.forEach((link) => {
        link.addEventListener('click', scrollToSection);
    });
}initScrollSuave();

function initAnimacaoScroll(){
    const sections = document.querySelectorAll('[data-anime="scroll"]');
    if(sections.length){    
        const windowMetade = window.innerHeight * 0.5;
            function animaScroll(){
            sections.forEach((section)=>{
                const sectionTop = section.getBoundingClientRect().top - windowMetade;
                if(sectionTop < 0){
                    section.classList.add('ativo');
                }
            }); 
        }
        animaScroll();
        window.addEventListener('scroll', animaScroll);
    }
}
initAnimacaoScroll()
