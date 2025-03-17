export default class Ferramenta {
    constructor(nome, descricao, usos) {
        this.nome = nome;
        this.descricao = descricao;
        this.usos = usos;
    }

    usar() {
        if (this.usos > 0) {
            console.log(`Você usou ${this.nome}.`);
            this.usos--;
        } else {
            console.log(`${this.nome} não pode mais ser usada.`);
        }
    }
}
