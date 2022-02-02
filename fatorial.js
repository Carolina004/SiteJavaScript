function fatorial(valor){
    var numero
    numero=prompt("Digite um número:");
    
    if(valor<0){
        return 'Valor deve ser maior ou igual a 0';
    }
    else if((valor==0 || valor==1)){
        return 1;
    }
    else{
        var acumula=1;
        for(x=valor;x>1;x--){
            acumula=acumula*x;
         }
    }
    return acumula;
}