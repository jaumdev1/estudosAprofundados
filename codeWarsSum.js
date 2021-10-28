
function getSum( a, b ){
 if(a===b)return a
var cont = 0

 if(a<b){
   cont = a
   while(cont!==b){
    cont=cont + 1
    a=a+cont        
   }
   return a
 }
   if(b<a){
      cont = b
      while(cont!==a){
         cont=cont + 1
         b=b+cont     
      }
      return b
 }


}
console.log(getSum(-1, 2))



