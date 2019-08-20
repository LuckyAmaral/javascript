function exe1(){
    var imp = [];
    var par = [];
    var num = [];
    var i = 0;
    var p = 0;
    var x;
    var n;
for(x=0;x<6;x++){
     n=(prompt("escreva um numero")); 
     num.push(n); 
     if(n% 2 == 0){ 
         p++; 
         par.push(n);
        } 
        else{ 
            i++; 
            imp.push(n);
        } 
        
     }
     alert("numeros digitados:"+num); 
     alert("n pares:"+par+"/qntd par:"+p); alert("n impars:"+imp+"/qntd impar:"+i);
}
function exe2(){
    var dt=[];
    var d=[];
    var t=[];
    var i;
    var n;
for(i=0;i<7;i++){ 
    n=prompt("escreva um numero"); 
    if(n%2==0){ 
        d.push(n); 
    } 
    if(n%3==0){ 
        t.push(n); 
    } 
    if((n%2==0)&&(n%3==0)){
         dt.push(n); 
        } 

    }
    alert("multiplos de dois"+d); 
    alert("multiplos de tres"+t); 
    alert("multiplos dos dois"+dt); 
}
function exe4(){
    var i;
    var vet=[];
    var Tzero=[];
for(i=0;i<15;i++){ 
    vet.push(Number(prompt("escreva numero")));  
    if(vet[i]==30){ 
        Tzero.push(i); 
    } 
    }
    alert("vetor:"+vet); 
    alert("30 escrito"+Tzero);
}