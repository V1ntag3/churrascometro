// Carne - 400g por pessoa, + de 6 horas passa a ser 650g
// Cerveja - 1200ml por pessoa, + de 6 horas passa a ser 2000ml
// Refrigerante/Sucos - 1000ml por pessoa, + de 6 horas passa a ser 1500ml

// Criança vale por 0,5

let resultado = document.getElementById("resultado");
 

let qtdTotalCarne ;
let qtdTotalCerveja;
let qtdTotalBebidas ;


function calcular() {
    
    let adultos = document.getElementById("adultos").value;
    
    let criancas = document.getElementById("criancas").value;

    let duracao = document.getElementById("duracao").value;
    
    qtdTotalCarne = (carnePP(duracao) * adultos) + (carnePP(duracao) * criancas / 2);
    qtdTotalCerveja = cervejaPP(duracao) * adultos;
    qtdTotalBebidas = (bebidaPP(duracao) * adultos) + (bebidaPP(duracao) * criancas / 2);

    resultado.innerHTML = `<div>Precisaremos de:</div>`;
    resultado.innerHTML += `<div>${qtdTotalCarne / 1000} Kg de carne</div>`;
    resultado.innerHTML += `<div> ${Math.ceil(qtdTotalCerveja / 269)} Latas de cerveja </div>`;
   
    resultado.innerHTML += `<div>${Math.ceil(qtdTotalBebidas / 2000)} Garrafas de Refrigerante/Sucos </div>`;
    
}

function carnePP(duracao) {
    if(duracao >= 6) {
        return 650
    }else {
        return 400
    }
}

function cervejaPP(duracao) {
    if(duracao >= 6) {
        return 2000
    }else {
        return 1200
    }
}

function bebidaPP(duracao) {
    if(duracao >= 6) {
        return 1500
    }else {
        return 1000
    }
}
