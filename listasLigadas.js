//
class No {
    constructor(valor){
        this.valor = valor;
        this.proximo = null;
    }
}

class listaLigada{
    constructor(){
        this.cabeca = null

    }

    adicionar(valor){
        const novoNo = new No(valor);
        
        if(this.cabeca === null){
            this.cabeca = novoNo; 
           
        }
        
        else{
       
        let atual = this.cabeca;
            
        while(atual.proximo !== null){
            atual = atual.proximo
        }
        atual.proximo = novoNo;
        }

    }

    get(posicao){
        if(posicao>-1){
            let atual = this.cabeca
            let i = 0;                                                                                                                                                                                                                                                              
            while(atual !== null && i <  posicao){
                atual = atual.proximo
                i++;
            }
            return atual !== null ? atual.valor : undefined
            



        }else{
           return undefined
        }

        
    }
    deletar(posicao){
     if(this.cabeça === null || posicao < 0){
         throw new RangeError(`SEM ITEM NA POSIÇÃO DESEJADA:${posicao}`)
     }
     if(posicao==0){
         this.cabeca = this.cabeca.proximo;
         return true
     }
     let atual = this.cabeca;
     let anterior = null;
     let i = 0;

     while (atual !== null && i<posicao){
        anterior = atual;
        atual = atual.proximo;
        i++;
     }

     if(atual !== null){
         anterior.proximo = atual.proximo;
         return true;
     }
     throw new RangeError(`SEM ITEM NA POSIÇÃO DESEJADA:${posicao}`)
     
    }


    valores(){
        let atual = this.cabeca;
        let valores = []
        while (atual != null){
            valores.push(atual.valor);
            atual = atual.proximo;
        }
        return valores;
    }

}

const lista = new listaLigada();

lista.adicionar(0);
lista.adicionar(1);
lista.adicionar(1);
lista.adicionar(2);
lista.adicionar(3);
lista.adicionar(5);


console.log(lista.valores())
console.log(lista.get(2))
lista.deletar(2)
console.log(lista.valores())


