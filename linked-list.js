//DIMINUINDO A COMPLEXIDADE DE O(N) PRA O(1) POIS GUARDAMOS EM TAIL O ULTIMO NÓ DA LISTA, NÃO PRECISANDO PERCORRER A LISTA DE NOVO,
//PARA ADICIONAR UM NOVO NÓ!
function LinkedList() {
    let head = null
    let tail = null
    let length = 0
                  //4    //PASSA O TAIL COM O VALOR 3 E NEXT NULL
    function Node(value, prev) {
        const node = { 
            value, //3 node://4 e next null
            next: null }
        if (prev)  { //NA  PRIMEIRA VEZ QUE RODA ELE NÃO ENTRA AQUI, POIS O TAIL É NULL
                     //NA SEGUNDA VEZ ENTRA AQUI PASSANDO NOVO NODE PARA O NEXT DO TAIL
            prev.next = node
        }
        return node //RETORNA O NODE NOVO PARA SER INSERIDO NO TAIL
    }
    
    function add(value) {
        tail = Node(value, tail)//NA PRIMEIRA EXECUÇÃO É RETORNADO O NODE COM VALOR "3"(EXEMPLO), E NEXT NULL
        //NA SEGUNDA EXECUÇÃO DE ADICIONAR O É RETORNADO UM NODE COM VALOR "4" E É INSERIDO EM TAIL, SALVANDO O ULTIMO NODULO!
        if (length === 0){//COMO É A PRIMEIRA EXECUÇÃO O LENGTH VALE 0 E ENTRA NO IF, PASSANDO O VALOR DE TAIL COM VALOR
            head = tail   //3 E NEXT NULL, SÓ É EXECUTADO UMA VEZ, POIS O COMPRIMENTO NUNCA MAIS SERÁ 0
        } 
        length++
    }

    return {
        get length() { return length },
        add,
        print: () => console.log(head)
    }
}
const list = LinkedList()
list.add(1)
list.add(2)
list.add(3)
list.add(4)


list.print()
