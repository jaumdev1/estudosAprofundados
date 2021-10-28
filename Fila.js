const Queue = ()=>{
    const data=[]

        const add = (value)=>{
            data.unshift(value)
          
        
        }

        const remove = () =>{
            if(data.length===0){
               throw new RangeError("A FILA ESTÁ VAZIA")
            }
            const value = data[data.length-1]
            data.pop() //      data.splice(data.length-1, 1)
            return value
            
        }
        const print = () =>{

            console.log(data)
        }

        return{
            add,
            remove,
            print
        }
}
const firstQueue = Queue()

firstQueue.add(1)
firstQueue.add(2)

firstQueue.print()

console.log(firstQueue.remove())
console.log(firstQueue.remove())

firstQueue.print()