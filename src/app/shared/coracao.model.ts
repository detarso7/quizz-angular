export class Coracao{
    constructor(
        public cheio:boolean,
        public urlCoracaCheio:string = "/assets/coracao_cheio.png",
        public urlCoracaoVazio:string = "/assets/coracao_vazio.png"
    ){}

    public existeCoracao():string{
        if(this.cheio){
            return this.urlCoracaCheio
        }else{
            return this.urlCoracaoVazio
        }
    }
}