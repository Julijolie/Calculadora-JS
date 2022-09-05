function calculadora() {
    const operacao= Number(prompt('escolha uma opção:\n1 - soma (+)\n2 - subtração (-)\n3 - multiplicação (*)\n4 - divisão real (/)\n5 - divisão inteira (%)\n6 - potenciação (**)'));

// verificando se a operação é válida
    if(!operacao || operacao>=7){
        alert('Erro, operação inválida.')
        calculadora();
    } else {
    let n1 = Number(prompt('Insira o primeiro valor.'));
    let n2 = Number(prompt('Insira o segundo valor'));
    let resultado;

    function soma(){
        resultado = n1 + n2;
        alert(`${n1} + ${n2} = ${resultado}`)
        novaOperacao();
    }
    function subtracao(){
        resultado = n1 - n2;
        alert(`${n1} - ${n2} = ${resultado}`)
        novaOperacao();
    }
    function multiplicacao(){
        resultado = n1 * n2;
        alert(`${n1} * ${n2} = ${resultado}`)
        novaOperacao();
    }
    function divisaoReal(){
        resultado = n1 / n2;
        alert(`${n1} / ${n2} = ${resultado}`)
        novaOperacao();
    }
    function divisaoInteira(){
        resultado = n1 % n2;
        alert(`O resto da divisão de ${n1} por ${n2} é ${resultado}`)
        novaOperacao();
    }
    function potenciacao(){
        resultado = n1 ** n2;
        alert(`${n1} elevado a ${n2} é ${resultado}`)
        novaOperacao();
    }

    function novaOperacao(){
        let opcao = prompt('Deseja fazer uma nova operação?\n1 - SIM\n2 - NÃO');
        if (opcao==1){
            calculadora();
        } else if (opcao==2){
            alert('Até breve!')
        } else{
            alert('Insira uma opção válida!')
            novaOperacao();
        }
    }

    if (operacao==1){
        soma();
    } else if (operacao==2){
        subtracao();
    } else if (operacao==3){
        multiplicacao();
    } else if (operacao==4){
        divisaoReal();
    } else if (operacao==5){
        divisaoInteira();
    } else if(operacao==6){
        potenciacao();
    }
}

}
calculadora();




/* usando switch case:
switch (operacao) {
    case 1:
        soma();
        break;
    case 2:
        subtracao();
        break;
    case 3:
        multiplicacao();
        break;
    case 4:
        divisaoReal();
        break;
    case 5:
        divisaoInteira();
        break;
    case 6:
        potenciacao();
        break;
}
}
calculadora(); */
