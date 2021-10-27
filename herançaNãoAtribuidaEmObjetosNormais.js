let Animal = {
    falar() {
       console.log(this.nome + ' faça barulho.');
    }
 };
 
 class Cachorro {
    constructor(nome) {
       this.nome = nome;
    }
 }
 
 Object.setPrototypeOf(Cachorro.prototype, Animal);
 //HERDANDO UM OBJETO OM METODO FALAR, ONDE É ATRIBUIDO A FUNÇÃO AO CACHORRO, ASSIM APRENDENDO A LATIR(FALAR)
 
 let cachorro = new Cachorro('Luffy');
 cachorro.falar(); //Luffy faça barulho.