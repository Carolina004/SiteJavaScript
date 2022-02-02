function verificar(){
    var numero1=parseFloat(document.getElementById("n_1").value);
    var numero2=parseFloat(document.getElementById("n_2").value);
    var numero3=parseFloat(document.getElementById("n_3").value);
    var numero4=parseFloat(document.getElementById("n_4").value);
    var numero5=parseFloat(document.getElementById("n_5").value);
    var maior;

    //alert(numero5);
    //alert(numero4);
    //alert(numero3);
    //alert(numero2);
    //alert(numero1);

    if(numero1>=numero2 || numero1>=numero3 || numero1>=numero4 || numero1>=numero5)
    {
        maior=numero1;
    }
    else if(numero2>=numero1 || numero2>=numero3 || numero2>=numero4 || numero2>=numero5){
        maior=numero2;
    }
    else if(numero3>=numero1 || numero3>=numero2 || numero3>=numero4 || numero3>=numero5){
        maior=numero3;
    }
    else if(numero4>=numero1 || numero4>=numero2 || numero4>=numero3 || numero4>=numero5){
        maior=numero4;
    }
    else if(numero5>=numero1 || numero5>=numero2 || numero5>=numero3 || numero5>=numero4){
        maior=numero5;
    }

    alert("maior número:" +maior);
}
   