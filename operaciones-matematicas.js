// creamos y exportamos

import { ROLES } from "./Ejercicio_4/usuariosConstantes";
import {DESCUENTO} from "./constantes"



export function calcularAreaCirculo(radio){
    return radio * radio * PI; //
}

export function calcularPrecioIva(precio){
    return precio * (1 + IVA)
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