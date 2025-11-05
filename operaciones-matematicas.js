// creamos y exportamos
export function calcularAreaCirculo(radio){
    return radio * radio * PI; //
}

export function calcularPrecioIva(precio){
    return precio * (1 + IVA)
}

//Funciones matemáticas +,-,*,/
export function calcularSuma(a, b){
    return a + b;
}
export function calcularResta(a, b){
    return a - b;
}

export function calcularMultiplicacion(a, b){
    return a * b;
}

import { PI } from './constantes.js';

export function areaCirculo(radio){  
    return PI * radio ** 2;
}

export function calcularTotal(precio, cantidad){
    return precio * cantidad;
}

import { IVA, DESCUENTO } from './constantes.js';

export function aplicarImpuestos(total) {
    return  total + (total * IVA);
}
export function aplicarDescuento(total) {
    return total - DESCUENTO
}