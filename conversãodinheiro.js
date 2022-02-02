var dolares=0;

function conversor(){
    var reais=document.getElementById('reais').value;
    reais=parseFloat(reais);

    dolares=reais/5.4;

    console.log(dolares);

    alert(dolares+"dolares");
}