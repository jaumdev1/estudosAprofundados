class Gato {
    constructor(nome) {
       this.nome = nome;
    }
 
    falar() {
       console.log(this.nome + ' faça barulho.');
    }
 }
 
 class Leao extends Gato {
    falar() {
          //UTIZAMOS O SUPER PARA RECUPERAR O METODO FALAR DA CLASSE PAI, ASSIM QUE O FALAR DO LEAO FOR CHAMADO VAI TER DUAS
          //INSTÂNCIAS, UMA DO FAÇA BARULHO DO PAI CHAMADO GATO E OUTRO DA SUA PROPRIA CLASSE(nome + roars);
        super.falar();
       console.log(this.nome + ' roars.');
    }
 }
 
 let leao = new Leao('Fuzzy');
 leao.falar();
 
 // Fuzzy faça barulho.
 // Fuzzy roars.
 