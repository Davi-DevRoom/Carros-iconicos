export default function initfuncionamento(){

}

const funciona = document.querySelector('[data-semana]');
const diasSemana = funciona.dataset.semana.split(',').map(Number);
const horarioSemana = funciona.dataset.horario.split(',').map(Number);

const dataAgora = new Date();
const diaAgora = dataAgora.getDay();
const horarioAgora = dataAgora.getHours();

