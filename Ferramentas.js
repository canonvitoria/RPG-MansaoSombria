export default class Ferramenta {
    constructor(nome, descricao, usos) {
        this.nome = nome;
        this.descricao = descricao;
        this.usos = Math.max(0, usos); // Garante que o valor inicial de usos não seja negativo
    }

    usar() {
        if (this.usos > 0) {
            console.log(`Você usou ${this.nome}. Ainda restam ${this.usos - 1} usos.`);
            this.usos = Math.max(0, this.usos - 1);
        } else {
            console.log(`${this.nome} não pode mais ser usada.`);
        }
    }

    podeSerUsada() {
        return this.usos > 0;
    }
}
