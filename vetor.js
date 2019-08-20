function exe3(){
    let codigos=[];
    let estoque=[];
    var i;
    for(i=0;i<10;i++){
        codigos.push(Number(prompt('confirme o codigo:')));
        estoque.push(Number(prompt('qntd no estoque:')));
    }
    let cliente = Number(prompt('informe o codigo do cliente'));
    while(cliente!=0){
        let codProduto = Number(prompt('digite o codigo do produto'));
        let qtdeProduto = Number(prompt('informe a quantidade desejada'));
        let posicao=codigos.indexOf(codProduto);
        if(codigos.indexOf(codProduto)==-1){
            alert('produto não existe');
        }
        else{
            if(estoque[posicao]-qtdeProduto){
                estoque[posicao]=estoque[posicao]-qtdeProduto;
                alert('Compra realizada com sucesso');
            }
            else{
                alert('não tem no estoque');
            }
        }
        cliente=Number(prompt("informe o codigo do cliente digite 0 para encerrar"));
    }
    alert("estoque atualizado"+estoque);
}
function exe5(){
    var logica=[];
    var linguagem=[];
    for(let i=0;i<10;i++){
        logica.push(Number(prompt("codigo de quem faz logica")));
    }
    for(let i=0;i<5;i++){
        linguagem.push(Number(prompt("codigo de quem faz lingua")));
    }
    var inter=[]
    for(let i=0; i<10;i++){
        if(linguagem.indexOf(logica[i])){
            inter.push(logica[i]);
        }
    }
    alert(inter);
}
function exe6(){
    var i;
    var maior, menor;
    let nome=[], venda=[], comicao=[];
    var soma=0;
    for(i=0;i<10;i++){
        nome.push(prompt('Nome do vendedor:'));
        venda.push(Number(prompt("quantidades de vendas:")));
        comicao.push(Number(prompt('% de comicao')));
        soma = soma + venda[i]
        maior = venda[1]*comicao[1]*0.1;
        menor = venda[1]*comicao[1]*0.1;
        if(maior<(venda[i]*comicao[i]*0.1)){
            maior = venda[i]*comicao[i]*0.1;
            mais = i;
        }
        if(menor>(venda[i]*comicao[i]*0.1)){
            menor = venda[i]*comicao[i]*0.1;
            menos = i;
        }
        alert('Vendedor:'+nome[i]+
        'salario:'+(venda[i]*comicao[i]*0.1));        
    }
    alert('total de vendas:'+soma);
    alert('melhor vendedor:'+nome[mais]+'numero de vendas'+maior);
    alert('pior vendedor:'+nome[menos]+'numero de vendas'+maior);
}
