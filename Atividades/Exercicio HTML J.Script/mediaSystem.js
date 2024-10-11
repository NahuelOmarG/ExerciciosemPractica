function volta(){
    window.location.href = "index.html"
}

function calculaMedia(){
/*
    let numero = Number(prompt("Digite um numero"));
   // let sequencia = 0;
   // while(sequencia <= numero){
    for (let sequencia = 0; sequencia <= numero ; sequencia ++) {
    if (sequencia % 2 == 0){
        alert (sequencia);
    } 
       // sequencia ++;
    }
    */

    // utilizamos (let) quando criamos uma variavel.
    //o (prompt) seria a nosso entender o leia do portugol.

   let qtaTotal = Number(prompt("Digite a quantidade de atividades que deseja cadastrar :"));
   let map = Number(prompt("Digite a média necessária para aprovação!"));
   let media = 0 ;
   let totalPeso = 0;
   let qtdCad = 0;
   for (let qtdCad= 0 ;qtdCad < qtaTotal ; qtdCad ++); {
    
   //while (qtdCad < qtaTotal){
    let atv = Number(prompt("Digite a nota da atividade!"));
    let peso = Number(prompt("Digite o peso da atividade!"));
    totalPeso += peso;//totalPeso = totalPeso + peso;
    media += (atv*peso);//media = media + (atv * peso);
    //qtdCad ++;//qtdCad = qtdCad + 1;
   
}
media /= totalPeso; // media = media / totalPeso;
let mensagem = media +", por tanto esta reprovado!";
if (media >= map){
    mensagem = media +", por tanto esta aprovado!";
}
else if(media >= map - 0,5){
    mensagem = media +", por tanto esta aprovado por conselho de classe!";
}
alert(mensagem);
}
