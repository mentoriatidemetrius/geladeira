var alerta;

function geladeiraAberta(){
    if(alerta == true){
        alert("A geladeira já está Aberta!");
    }else{
    $(".gelAberta").show();
    $(".gelFechada").hide();
    alerta = true;
    }
}

function geladeiraFechada(){
    if(alerta == false){
alert("A geladeira já está Fechada!");
    }else{
    $(".gelFechada").show();
    $(".gelAberta").hide();
    alerta = false;
    }
}

function addProduto(){
    alert("Não tem nenhum Produto Cadastrado!");

}

function retiraProduto(){
 alert("Não tem produto para retirar!");  

}