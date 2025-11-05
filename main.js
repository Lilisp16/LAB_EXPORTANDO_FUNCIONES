import {PI, IVA, DIAS_SEMANA} from './constantes.js';

//* CALCULAR AREA CIRCULO

const radio =  5;
const area = PI * radio **2; 
console.log("Area del circulo: ", area);

// * PRECIO + IVA
const precio = 100;
const precioIva = precio * (1 + IVA); // forma resumida de decir sumar el precio más el 19% de IVA de una vez
console.log("Precio mas Iva: ", precioIva);

// * mostrar tercer dia de la semana

console.log("Tercer dia de la semana ", DIAS_SEMANA [2]);
