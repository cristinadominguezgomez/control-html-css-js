'use strict';

function tiempo() {
  let inicio = new Date();
  
  setInterval(() => {
    inicio = new Date(inicio);
    let fin = new Date();
    let transcurso = fin - inicio;

    let segundos = Math.floor(transcurso / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);
    
    console.log(`Han pasado ${segundos} segundos, ${minutos} minutos, ${horas} horas y ${dias} días.`);

  }, 5000);              
  
};


tiempo(); 
