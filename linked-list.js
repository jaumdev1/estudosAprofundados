//DIMINUINDO A COMPLEXIDADE DE O(N) PRA O(1) POIS GUARDAMOS EM TAIL O ULTIMO NÓ DA LISTA, NÃO PRECISANDO PERCORRER A LISTA DE NOVO,
//PARA ADICIONAR UM NOVO NÓ!
function LinkedList() {
    let head = null
    let tail = null
    let length = 0

    function Node(value, prev, next = null) {
        const node = { 
            value, 
            next 
        }
        if (prev) prev.next = node
        return node
    }

    function add(value) {
        tail = Node(value, tail)
        if (length === 0) head = tail
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
list.print()
