function Animal() { }

Animal.prototype.falar = function() {
  return this;
}

Animal.comer = function() {
  return this;
}

let obj = new Animal();
let falar = obj.falar;
falar(); // objeto global

let comer = Animal.comer;
console.log(comer()); // objeto global

//Se não fosse funções tradicionais dentro da classe, o metodo ou funcão chamado será global podendo ser ultizado fora do objeto da Classe.