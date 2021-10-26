class Retangulo {
    constructor(altura, largura) {
        this._altura = altura;
        this._largura = largura; 
    }

    set altura (altura){
        this._altura = altura
     
    }
    get altura(){
     
        return this._altura;
    }

    set largura(largura){
        this._largura = largura; 
    }
    get largura(){
        return this._largura;
    }


    girar(){
    var fixo;
    fixo = this.altura
    this.altura = this.largura
    this.largura = fixo;
    }


  }

  const p = new Retangulo(20, 30); 
  console.log(p)
  p.girar()
  console.log(p)