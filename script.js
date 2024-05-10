function dataMaior(data1, data2) {
    if (data1 > data2) {
        return data1;
    } else {
        return data2;
    }
}

function calcularIntervalo(data1, data2) {
    // Validar se data1 é mais antiga que data2
    if (data1.getTime() > data2.getTime()) {
        return "Erro: A primeira data deve ser anterior à segunda data.";
    }

    // Calcula a diferença em milissegundos entre as datas
    let diffEmMilissegundos = data2.getTime() - data1.getTime();

    // Converte a diferença em milissegundos para dias
    let diffEmDias = Math.floor(diffEmMilissegundos / (1000 * 60 * 60 * 24));

    return diffEmDias;
}


function obterDataAtualFormatada() {
    const dataAtual = new Date();

    // Obtém os componentes da data
    let hora = String(dataAtual.getHours());
    let minuto = String(dataAtual.getMinutes());
    let dia = String(dataAtual.getDate());
    let mes = String(dataAtual.getMonth() + 1); 
    // Os meses começam de 0
    let ano = dataAtual.getFullYear();

    // Monta a string formatada
    const dataFormatada = `${hora}:${minuto} - ${dia}/${mes}/${ano}`;

    return dataFormatada;
}


let data1 = new Date('02/03/2024');
let data2 = new Date('04/05/2024');

console.log("A maior data é: " + dataMaior(data1, data2));
console.log("O intervalo de dias é: " + calcularIntervalo(data1, data2));
console.log("A data atual é: " + obterDataAtualFormatada());