var spaceshipName = prompt("Qual o nome da suua espaçonave?")
var reversedSpaceshipName = "";
var profaneChar = prompt("Qual letra da espaçonave quer que não apareça?")

//caminho normal: começando da primeira até a última posição da letra
//caminho invertido: começando pela última letra até a primeira letra

for(let i=spaceshipName.length-1; i>=0; i--){
    if(spaceshipName[i] == profaneChar){
        break;
    }
    reversedSpaceshipName += spaceshipName[i];
}

alert(`Nome da espaçonave: ${spaceshipName}\nNovo nome: ${reversedSpaceshipName}`);