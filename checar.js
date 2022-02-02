function paridade(){
    var n=parseInt(document.getElementById("n").value);
    var multi=parseInt(document.getElementById("multi").value);
    var resposta=document.getElementById('resposta');

    if(n%multi==0){
        resposta.innerHTML=n+" é múltiplo de "+multi;
    }
    else{
        resposta.innerHTML=n+" não é múltiplo de "+multi;
    }
}