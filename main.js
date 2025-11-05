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

//Importar funciones de operaciones-matematicas
import { calcularSuma, calcularResta, calcularMultiplicacion, areaCirculo } from './operaciones-matematicas.js';

const a = 10;
const b = 5;

console.log(`Suma: ${calcularSuma(a, b)}`);
console.log(`Resta: ${calcularResta(a, b)}`);
console.log(`Multiplicación: ${calcularMultiplicacion(a, b)}`);
console.log(`El área del círculo es: ${areaCirculo(radio, PI)}`);


//Importar las constantes y funciones necesarias.
import  { calcularTotal, aplicarImpuestos, aplicarDescuento } from './operaciones-matematicas.js';

const cantidad = 3;
const total = cantidad * precio;

console.log(`El total es: ${calcularTotal(precio, cantidad)}`);
console.log(`El total con impuestos es: ${aplicarImpuestos(total)}`);
console.log(`El total con descuento después de impuestos es: ${aplicarDescuento(total)}`);

