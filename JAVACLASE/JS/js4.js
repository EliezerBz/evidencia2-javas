
function divisores(num) {
    let suma = 0;
    for ( i=0 ; i<=num ; i++) {
        if ( num % i == 0) {
            suma ++;1
        }
    }
    return suma;
}

console.log("Total de divisores (versión 1): ", divisores(10));


const divisoresV2 = function(num){
    let suma = 0;
    for ( i=0 ; i<=num ; i++) {
        if ( num % i == 0) {
            suma ++;1
        }
    }
    return suma;
}

console.log("Total de divisores (versión 2): ", divisoresV2(10));


const divisoresV3 = num => {
    let suma = 0;
    for ( i=0 ; i<=num ; i++) {
        if ( num % i == 0) {
            suma ++;1
        }
    }
    return suma;
}

console.log("Total de divisores (versión 3): ", divisoresV3(10));

function calcular(){
    let numero = 
    parseInt(document.getElementById("numero").value);
    console.log(numero);
    
    let resultado =
    document.getElementById("resultado")
    resultado.value = divisores(numero)
}

function imagen(){
    let numeroimagen = 
    parseInt(document.getElementById("numeroimagen").value);
    console.log(numeroimagen);
    
    switch ( numeroimagen ) {
        case 1:
            document.getElementById("imagenforms").src="https://cdn-icons-png.flaticon.com/128/174/174848.png";
            document.getElementById("imagenforms").style.display = "block";
            break
        case 2:
            document.getElementById("imagenforms").src="https://cdn-icons-png.flaticon.com/128/174/174855.png";
            break
        case 3:
            document.getElementById("imagenforms").src="https://cdn-icons-png.flaticon.com/128/174/174883.png";
            break
        case 4:
            document.getElementById("imagenforms").src="https://cdn-icons-png.flaticon.com/128/174/174872.png";
            break
        case 5:
            document.getElementById("imagenforms").src="https://cdn-icons-png.flaticon.com/128/174/174861.png";
            break       
    }
}