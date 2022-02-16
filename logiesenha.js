function Enviar(){
    var usuário= document.getElementById("usuário")
    var senha= document.getElementById("senha")
    var ok

    if(usuário.value!="" && usuário.value.indexOf("")!=-1)
    {
        if(senha.value!="" && senha.value.indexOf("")!=-1)
     {
          alert(usuário.value+"Seja bem vindo!")
          ok=true
     }
     else{
        alert("Senha incorreta. Tente novamente.")
        ok=false
    }
    }
    else{
        alert=("Nome de usuário não encontrado. Deseja fazer o cadastro?")
        ok=false
    }
    return ok
}