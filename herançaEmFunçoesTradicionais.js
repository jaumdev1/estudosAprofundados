function Animal (nome) {
    this.nome = nome;
  }
  
  Animal.prototype.falar = function() {
     console.log(this.nome + ' faça barulho.');
  }
  
  class Cachorro extends Animal {
    falar() {
      console.log(this.nome + ' auauau');
    }
  }
  
  let cachorro = new Cachorro('Mitzie');
  cachorro.falar(); // Mitzie lati.