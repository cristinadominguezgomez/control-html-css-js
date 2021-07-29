'use strict';

function conversor(num, base) {
  switch (base) {
    case 2:
      const binario = num.toString(base);
      console.log(`El numero decimal ${num} es ${binario} en binario.`);
      break;
    case 10:
      const numDecimal = binarioADecimal(num);
      console.log(`El numero binario ${num} es ${numDecimal} en decimal.`);
      break;
    default:
      console.log('La base no es correcta. Debe introducir 10(conversión a decimal) ó 2 (conversión a binario).');
  }
  
};


function binarioADecimal(num) {
  let sum = 0;
  let numReverse = num.split('').reverse().join('');
  
  for (let i = 0; i < numReverse.length; i++) {
    sum = sum + numReverse[i] * 2 ** i;
    
  }
  return sum;
}


conversor('1111101', 10); //para que haga la conversion a decimal solo se puede
                          //introducir el numero en binario entre comillas. 
conversor(50, 2);
