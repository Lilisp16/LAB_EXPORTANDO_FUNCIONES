/*Crea un archivo usuarios.js:
Debes implementar una función llamada crearUsuario que:
1.Reciba dos parámetros:
•nombre (string): Nombre del usuario.
•rol (string): Rol del usuario (debe ser "admin" o "cliente").
2.Retorne un objeto con:
•nombre: El nombre recibido.
•rol: El rol recibido.
•fechaRegistro: Fecha actual en formato local ("16/7/2025").*/

import {ROLES} from "./usuariosConstantes.js";

function crearUsuario(nombre, rol){  
    return {
        nombre: nombre,
        rol: rol,
        fechaRegistro: new Date().toLocaleDateString()  //date fecha // tolocalDAtestring formato legible

    };

    
}

//función que se le asignada a una constante
// creo una funcion esAdmin para comprobar si el usuario tiene rol de administrador
const esAdmin =  (usuario) => {
    if (usuario.rol === ROLES.ADMIN ){
        return true;
    
    }else {
        return false;
    }
};

export {crearUsuario, esAdmin};