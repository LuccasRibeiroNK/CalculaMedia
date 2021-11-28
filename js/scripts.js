function calc() {
    var aluno = document.getElementById('nomeAluno').value;

    var nota1 = document.getElementById('nota1').value;
    var nota2 = document.getElementById('nota2').value;
    var media = (parseFloat(nota1) + parseFloat(nota2)) / 2;
    if (aluno == "") {
        document.getElementById('resultado').innerHTML = 'Digite um nome para o aluno';

    } else if (nota1 == "" || nota2 == "") {
        document.getElementById('resultado').innerHTML = 'Digite as duas notas';
    } // else if (isNaN(nota1) || isNaN(nota2)) {
    //     document.getElementById('resultado').innerHTML = 'Digite apenas números';

    // }
    else {
        document.getElementById('resultado').innerHTML = 'A média do aluno ' + aluno + ' é: ' + media;

    }

}