function contatore(numero) {
    
    if(numero < 10){
        return `1 cifra`;
    }else if(numero < 100){
        return `2 cifre`;
    }else if(numero < 1000){
        return `3 cifre`;
    }else if(numero < 10000){
        return`4 cifre`;
    }else{
        return `numero troppo grande`;
    }
    
}

console.log(contatore(5));
console.log(contatore(25));
console.log(contatore(565));
console.log(contatore(9874));
console.log(contatore(356987));


