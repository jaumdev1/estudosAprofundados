const alfabeto = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h','i','j','k', 'l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

var alfa ='';
var number = '';
var i=0, j=0;
var placas = []


function gerarPlaca(quantidade){

while(j!=quantidade){
 alfa=''
 number=''

 while(i!=3){

  alfa = alfa + alfabeto[Math.floor
    (Math.random() * (alfabeto.length - 0) + 0)]


    number = number + Math.floor(
        (Math.random()* (9 - 0)+ 0)).toString()
    
    
    i++;
     //PARA TESTES console.log(alfa + '-' + number)
    
}   
i=0;
placas.push((alfa + '-' + number))


j++;
}


console.log(placas)
}
gerarPlaca(15)