// USADO PARA MUDAR(SOBRESCREVER) O CONSTRUTOR PADRAO DA CLASSE ARRAY POR EXEMPLO. MAS PODE SER USADO OUTRAS CLASSES TAMBEM.

class MinhaArray extends Array {
    // Sobrescreve species para o construtor da classe pai Array
    static get [Symbol.species]() { return Array; }
 }
 
 let a = new MinhaArray(1,2,3);
 
 let mapped = a.map(x => x * x);
 
 console.log(mapped instanceof MinhaArray); // false
 console.log(mapped instanceof Array); // true