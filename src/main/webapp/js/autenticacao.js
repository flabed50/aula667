Autenticacao = function(){}

Autenticacao.prototype.validarCampos = function(){
    elementoUsuario = document.getElementById("txtUsuario");
    textoDigitadoUsuario = elementoUsuario.value;
    
    elementoSenha = document.getElementById("txtSenha");
    textoDigitadoSenha = elementoSenha.value;
    
    if(textoDigitadoUsuario == "" || textoDigitadoSenha == ""){
        window.alert("Deve digitar ambos!");
        return false;
    }
    
    return true;
}

autenticacao = new Autenticacao(); 