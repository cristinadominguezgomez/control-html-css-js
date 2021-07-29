'use strict';

const names = [
  'A-Jay',
  'Manuel',
  'Manuel',
  'Eddie',
  'A-Jay',
  'Su',
  'Reean',
  'Manuel',
  'A-Jay',
  'Zacharie',
  'Zacharie',
  'Tyra',
  'Rishi',
  'Arun',
  'Kenton',
];




function rmDuplicados(array) {
  const result = array.filter((item, index) => {
    return array.indexOf(item) === index;
    
  })
  
  return result;
}

console.log(rmDuplicados(names));

