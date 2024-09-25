export default function initTabMenu(){   
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
}