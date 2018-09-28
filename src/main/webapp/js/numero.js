Numero = function(){}
Numero.prototype.parOuImpar = function(){
    var numero = document.getElementById("n1").value;
    if(numero % 2 == 0){
        alert("O número é par");
    }
    else{
        alert("O número é impar");
    }
}
numero = new Numero(); 