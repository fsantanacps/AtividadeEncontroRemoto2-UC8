let listaAlunos = ["Carlos", "Maria", "João", "Paula", "Heitor"];


for(let contador = 0; contador < listaAlunos.length; contador++) {
    // console.log(contador)

    if (contador == 0) {
        console.log(contador + ": ZERO") //exemplo de concatenação

    } else if (contador % 2 == 1) {
        console.log(`${contador}: ímpar`); //exemplo de interpolação
    } else {
       console.log(`${contador}: par`);
    }
}