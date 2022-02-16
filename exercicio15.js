function Enviar(){
    var nome= document.getElementById("nome")
    var datanascimento= document.getElementById("datanascimento")
    var ok

    if(nome.value="" && nome.value.indexOf("")!=-1)
    {
        if(datanascimento="" && datanascimento.value.indexOf("")!=-1)
        {
            alert(nome.value+"Obrigada por preencher!")
            ok=true
        }
        else{
            alert("A sua data de nascimento deve ser maior que 2010!")
            ok=false
        }

    }
    else{
        alert=("Preencha seu nome!")
        ok=false
    }
    return ok
}