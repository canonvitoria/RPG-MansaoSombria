export default class Objeto {
    constructor(nome, descricaoAntes, descricaoDepois, acaoOk) {
        this.nome = nome;
        this.descricaoAntesAcao = descricaoAntes;
        this.descricaoDepoisAcao = descricaoDepois;
        this.acaoOk = acaoOk;
    }

    usar() {
        if (this.acaoOk) {
            console.log(this.descricaoDepoisAcao);
        } else {
            console.log("Isso não parece ajudar...");
        }
    }
}

