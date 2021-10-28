const util = require('util')
function LinkedList() {
    let head = null
    let tail = null
    let length = 0
                  //4    //PASSA O TAIL COM O VALOR 3 E NEXT NULL
    function Node(value, prev) {
        const node = { 
            value, 
            next: null,
            previous: null,
        }
        if (prev)  { 
           
            prev.next = node
            node.previous = prev        
        }

        return node 
    }
    
    function add(value) {

        tail = Node(value, tail)

        if (length === 0){
            head = tail   
        } 
        length++
    }

    return {
        get length() { return length },
        add,
        print: () => console.log(util.inspect(head, {showHidden: false, depth: null} ))
    }
}
const list = LinkedList()
list.add(1)
list.add(2)
list.add(3)
list.add(3)
list.add(3)
list.add(3)
list.add(3)





list.print()
