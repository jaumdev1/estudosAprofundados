const Stack =   () =>{
    const data = []
    let top = -1
    
    const push = (value)=>{
         top++
         data[top] = value  //   data.push(value)
      
        console.log(data)
        }
    const pop = ()=>{
        if(top<0){
            return false;
        }else{
            const itemToReturn = data[top]
            data.splice(top,  1)
            top--
            return itemToReturn
     
        }
    }     
    const print = ()=>{
        console.log(data, 'o ultimo elemento está na posição: '+ top)
    }
    
    return{
        push,
        pop,
        print
    }
}
const pilha = Stack()
pilha.push(1)
pilha.push(2)
pilha.push(3)

pilha.pop()
pilha.print()

