'use strict';



async function getData(fecha) {
  const url = `https://rickandmortyapi.com/api`;
  const datos = await fetch(url);

  const res = await datos.json()
  .then((res) => res); 
  const episodes = await fetch(res.episodes); 
  const episode = await episodes.json(); 
  const result = episode.results;

  for(let i = 0; i < result.length; i++) {

    const array = [result[i].name, result[i].air_date];   
    const mes = (array[1]);
      
    if (mes.startsWith("Jan")) {     
      let episodiosEnero = '';
      episodiosEnero += result[i].name;     
      console.log(episodiosEnero);
    };
  };
};

getData();
