//PARA TER  UM COMPORTAMENTO SIMILAR AS OUTRAS LINGUAGENS DE PROGRAMAÇÃO, O ECMASCRIPT UTILIZA-SE DO MIX-INS

class Humano {
    constructor(nome) {
      this.nome = nome;
    }
    andar() {
      return this.nome+' andou um passo'
    }
  }


  
  const HumanoFalante = Base => class extends Base {
    falar() {
      return this.nome+' diz: olá mundo!'
    }
  }

  
  
  const HumanoFalanteMixado = Base => class extends Base {

    correr(){
      return this.nome+' corendo muito rápido'
    }
  }
  //JUNÇÃO DOS DOIS OBJETOS DAS DUAS CLASSES PAIS DO FILHO HUMANOFALANTEMIXADO

  const HumanoFinal = HumanoFalanteMixado(HumanoFalante(Humano))
  
  const humano = new HumanoFinal('Bill Gates')
  
  console.log(humano.andar())
  console.log(humano.falar())
  console.log(humano.correr())