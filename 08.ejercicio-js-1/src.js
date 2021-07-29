'use strict';

const url  = 'https://randomuser.me/api/';

async function getData(url) {
  const datos = await fetch(url);
  const data = await datos.json(); 
  return data;
};


async function datos(num) {
  const datos = await getData(url);
  /* console.log(datos); */
  if(num <= 0){
    console.log('Introduce un numero mayor que 0');
    } else {
      let usuario = {
        username: datos.results[0].login.username,
        nombre: datos.results[0].name.first,
        apellido: datos.results[0].name.last,
        genero: datos.results[0].gender,
        pais: datos.results[0].location.country,
        email: datos.results[0].email,
        foto: datos.results[0].picture.large
      }
      return usuario;
    };
};


async function usuarios (num) {
  if (num <= 0) {
    console.log('Introduce un numero mayor que 0');
  } else {
    const array = [];
    
    for (let i = 0; i<num; i++) {
      const objeto = await datos(num);
      array.push(objeto);
      
    };
    console.log(array);
  };
  
};

usuarios(3);
