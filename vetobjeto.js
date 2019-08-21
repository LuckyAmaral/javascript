function funcao(){
    var objeto = {};
    var vet = [];

    for(var i=0; i<5; i++){
        objeto.codigo = Number(prompt("Informe o codigo"));
        objeto.nome = prompt("Informe o nome");
        objeto.qtde = Number(prompt("informe a quantidade"));
        objeto.preco = Number(prompt("Informe o preço"));
        vet.push(objeto)
        alert("Produto criado com sucesso")
    }
    var soma = 0; 
    for(var i=0; i<5; i++){
        soma = soma + vet[i].qtde
    }
    alert(soma)
}