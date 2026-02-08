const vitorias = 88;
const derrotas = 10;

function calcularRankeadas(vitorias, derrotas) {
  return (vitorias - derrotas);
}

var resultadoRankeadas = calcularRankeadas(vitorias,derrotas)

function calcularNivel(){
    var nivel = "Não definido"
    if(resultadoRankeadas<=10){
        nivel = "Ferro"
    }else if(resultadoRankeadas>=11 && resultadoRankeadas<=20){
        nivel = "Bronze"
    }else if(resultadoRankeadas>=21 && resultadoRankeadas<=50){
        nivel = "Prata"
    }else if(resultadoRankeadas>=51 && resultadoRankeadas<=80){
        nivel = "Ouro"
    }else if(resultadoRankeadas>=81 && resultadoRankeadas<=90){
        nivel = "Diamante"
    }else if(resultadoRankeadas>=91 && resultadoRankeadas<=100){
        nivel = "Lendário"
    }else{
        nivel = "Imortal"
    }
    return (nivel)
}
const nivelatual = calcularNivel()

console.log(`O Herói tem de saldo de ${resultadoRankeadas} está no nível de ${nivelatual}`)


