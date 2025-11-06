import {PI, IVA, DIAS_SEMANA} from './constantes.js';
import { crearUsuario, esAdmin } from "./Ejercicio_4/usuarios.js"; //li
import { ROLES} from "./Ejercicio_4/usuariosConstantes.js"; //li
import {calcularTotal, aplicarImpuestos, aplicarDescuentoPorRol} from "./operaciones-matematicas.js"

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


//** CREAR USUARIO (li)

const usuario1 = crearUsuario("Pedro Sanchez", ROLES.ADMIN)
const usuario2 = crearUsuario("Carlos Cruz", ROLES.CLIENTE)

console.log("\n" + "**GESTION DE USUARIOS**")
console.log("\n" + usuario1.nombre, "¿es admin?",  esAdmin(usuario1))
console.log(usuario2.nombre, "¿es admin?",  esAdmin(usuario2))
console.log(usuario1)
console.log(usuario2)


// *Sistema de Descuentos por Rol

//        **Escenario: **
/*•Un admin compra 4 productos a 25 cada uno.
•
Un cliente compra 3 productos a 50 cada uno.
•
Para cada caso:
•
Calcular el subtotal.
•Aplicar impuestos (19%).
•Aplicar descuento según su rol.
•Mostrar resultados detallados en consola.*/

// *Calcular el subtotal.
let subtotal_usuario1  = calcularTotal(25, 4);
let subtotal_usuario2 = calcularTotal(50, 3);

// * Aplicar impuestos (19%)
let totalIVA_usuario1  = aplicarImpuestos(subtotal_usuario1);
let totalIVA_usuario2 = aplicarImpuestos(subtotal_usuario2);

//* Aplicar descuento según su rol.

let totalDescuento_usuario1 = aplicarDescuentoPorRol(totalIVA_usuario1, usuario1);
let totalDescuento_usuario2 = aplicarDescuentoPorRol(totalIVA_usuario2, usuario2);

// * Mostrar resultados detallados en consola.
console.log(`${usuario1.nombre} compra: ${totalDescuento_usuario1}`);
console.log(`${usuario2.nombre} compra: ${totalDescuento_usuario2}`);

