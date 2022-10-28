/* Ejemplo Arreglos */

let salario = 0
let horas = 48
let pago_hora = 20


/* Si no tiene horas extras */
if (horas <= 40) {
    let salario = horas * pago_hora;
    console.log(salario)
}
/* Si tiene horas extras, a partir de 48 en adelante */
else{
    let salario = (40 * pago_hora) + ((horas-40) * pago_hora*3)
    console.log(salario)
}