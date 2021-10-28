const util = require('util')
let lista = null
let i =0
node= null
let objeto = (valor)=>{
return {
    nome:valor,
    proximo: null,
  
}
}

lista = objeto(2)



 node = objeto(3)
 lista.proximo = node
 node2=objeto(4)
 node.proximo = node2
 node3=objeto(5)
 node2.proximo = node3
 node3.proximo = objeto(6)


 
   
    i++;

console.log(util.inspect(lista, {showHidden: false, depth: null}))

