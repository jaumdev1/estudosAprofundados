//SE EXISTIR UM CONSTRUTOR NAS CLASSES FILHAS É NECESSARIO CHAMAR SUPER() ANTES DA CHAVE 'THIS'.

class Animal {
    constructor(nome) {
      this.nome = nome;
    }
  
    falar() {
      console.log(this.nome + ' emite um barulho.');
    }
  }
  
  class Cachorro extends Animal {
    falar() {
      console.log(this.nome + ' auauauauauauaauauua');
    }
  }
  
  let cachorro = new Cachorro('Max');

  cachorro.falar();

  let animal = new Animal('Animal');

 animal.falar();
