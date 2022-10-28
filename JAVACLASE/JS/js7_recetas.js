let salario = 0;
let horas = 48;
let pagoxhora = 30;


if (horas <= 40) {
    let salario = horas * pagoxhora;
    console.log(salario)
}

else {
    let salario = (40 * pagoxhora) + ((horas-40) * pagoxhora*3)
    console.log(salario)
}



let tomainicial = 22;
console.log(`Hora de la toma inicial: ${tomainicial}`)

let tomadiaria = 4;
console.log(`Frecuencia de la toma diaria: ${tomadiaria}`)

let cantidad_tomas = 10;
console.log(`Cantidad de tomas: ${cantidad_tomas}`)

let hora = tomainicial;

for (i = 1; i <= cantidad_tomas; i++) {
    if (hora > 22) {
        hora -= 21;
    }
    console.log("toma" + " " + i + " " + hora + ":00");
    hora += tomadiaria;
}