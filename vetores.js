var carros =  ['chevette', 'pollo', 'gol', 'golf']
i=0;
while(i!=carros.length){
console.log(carros[i])
i++;
}

var carroscomplaca = carros.map((carro)=>{
    return carro + '-'+ Math.floor(Math.random().toString()*100)
    
})

console.log(carroscomplaca)