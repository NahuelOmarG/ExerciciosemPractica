let numeros = []

function executar83(){
    //alert (funcionando)
    let numero
    
    numero = Math.floor(Math.random()*6)
     // Math.floor 23.9 >> 23 (arredonda para baixo)
     // Math.cell 23.9 >> 24  (arredonda para cima)
     // Math.round 23.9 >> (0.5 para cima 24. ) (0.2 para baixo 23.)
    numeros.push(numero)

    console.log(numeros);
}