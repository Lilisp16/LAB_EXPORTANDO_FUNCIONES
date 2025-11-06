// creamos y exportamos

import { ROLES } from "./usuariosConstantes.js";
import {IVA, DESCUENTO} from "./constantes.js"

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



export function aplicarImpuestos(total) {
    return  total + (total * IVA);
}
export function aplicarDescuento(total) {
    return total - DESCUENTO
}


//* APLICAR DESCUENTO POR ROL

export function aplicarDescuentoPorRol(total, usuario){
    if (usuario.rol === ROLES.ADMIN){
        return total - (total * 0.2);   //descuento del 20%
    }else if (usuario.rol === ROLES.CLIENTE){
        return total - (total * DESCUENTO);
    }else {
        return total;   //de lo contrario valor sin descuento
    }

}