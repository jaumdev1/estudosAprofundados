class Animal {
    falar() {
      return this;
    }
    static comer() {
      return this;
    }
  }
  
  let obj = new Animal();
  obj.falar(); // Animal {}
  let falar = obj.falar;
  falar(); // undefined
  
  Animal.comer(); // class Animal
  let comer = Animal.comer;
  comer(); // undefined

  //Como o metodo comer e falar não são funções tradicionais, permitem apenas a utilização pelo objeto da classe.