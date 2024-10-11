function atv1() {
    let n = Number(prompt("Digite um número!"));
    let i = 1;
    while (i <= n) {
        alert(i);
        i++;

    }
}
function atv2() {
    let n = Number(prompt("Digite um número!"));
    let soma = 0;
    while (n != 0) {
        soma = soma + n;
        n = Number(prompt("Digite um número!"));

    }
    alert(soma);
}
function atv3() {
    let qtdTotal = Number(prompt("Digite a quantidade de número!"));
    let soma = 0;
    let qtdCad = 0;
    while (qtdCad < qtdTotal) {
        let soma = Number(prompt("Digite o número!"));
        soma = soma + numero;
        qtdCad++;
    }

    let media = soma / qtdTotal;
    alert(media);

}
function atv4() {
    let n = number(prompt("Digite o número!"));
    let i = 1;
    for (let i = 1; i == n; i++) {
        n = n * i;
    }
    alert();

}
function atv5() {
    let n = Number(prompt("Digite um numero!"));
    let tabela = "";
    //for (inicialização ; condição ; incremento) {trecho que sera repetido}
    for (let mult = 1; mult <= 10; mult++) {
        tabela += "\n" + n + "x" + mult + "=" + (n * mult);
    }
    alert(tabela);
}
function atv6() {
    let n = Number(prompt("Digite um numero!:"));
    let pares = "";
    for (let par = 1; par <= n; par++) {
        if (par % 2 == 0) {
            pares += "\n" + par;
        }
    }
    alert(pares);
}
function atv7() {
    let n = Number(prompt("Digite um numero!:"));
    let passo = Number(prompt("Digite o numero de passo!:"));
    let i = 1;
    while (i < n) {
        alert(i);
        i += passo;
    }
}
function atv8() {
    let n = Number(prompt("Digite um numero!:"));
    let impares = "";
    for (let impar = 1; impar <= n; impar++) {
        if (impar % 2 != 0) {
            impares += "\n" + impar;
        }
    }
    alert(impares);
}
function atv9() {
    let n1 = Number(prompt("Digite um numero!:"));
    let n2 = Number(prompt("Digite o possivel múltiplo!:"));
    if (n2 % n1 == 0) {
        alert(n2 + " é múltiplo de " + n1);
    }
    else {
        alert(n2 + " não é múltiplo de " + n1);
    }
}
function atv10() {
    let n = Number(prompt("Digite um numero!:")); //prompt (Entrada de dados)
    let qtdDivisores = 0;
    let ant = 1;

    while (ant <= n) {
        if (n % ant == 0) {
            qtdDivisores++;
        }
        ant++;
    }
    if (qtdDivisores == 2) {
        alert(n + " é primo!");
    }
    else {
        alert(n + " não e primo!");
    }
}
function atv11(){
    let n = Number(prompt("Digite um numero!:"));
    let primos = "";
    for (let qtdDivisores = 2; ant <= n; ant++){
    if (n % ant == 0)
    primos += "\n" + n + "%" + mult + "=" + (n * mult);
    
    
    alert();
}
}
//for (let impar = 1; impar <= n; impar++) {
  //  if (impar % 2 != 0) {
   //     impares += "\n" + impar;
  //  }
//}
//alert(impares);