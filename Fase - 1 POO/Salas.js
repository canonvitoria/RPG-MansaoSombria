import { Sala } from './Basicas.js';
import Ferramenta from './Ferramentas.js';
import Objeto from './Objetos.js';

export function criarCenario(engine) {
    let hall = new Sala("Hall de Entrada");
    let biblioteca = new Sala("Biblioteca");
    let salaEstar = new Sala("Sala de Estar");
    let cozinha = new Sala("Cozinha");
    let quarto = new Sala("Quarto de Victor");
    let porao = new Sala("Porão Secreto");

    // Conectar as salas 
    hall.adicionarPorta("Biblioteca", biblioteca);
    biblioteca.adicionarPorta("Hall de Entrada", hall);
    biblioteca.adicionarPorta("Sala de Estar", salaEstar);
    salaEstar.adicionarPorta("Biblioteca", biblioteca);
    salaEstar.adicionarPorta("Quarto de Victor", quarto);
    salaEstar.adicionarPorta("Cozinha", cozinha);
    cozinha.adicionarPorta("Sala de Estar", salaEstar);
    cozinha.adicionarPorta("Porão Secreto", porao);
    porao.adicionarPorta("Cozinha", cozinha);

    // Criar e adicionar ferramentas
    let chave = new Ferramenta("Chave de Prata", "Abre um baú na cozinha.", 1);
    hall.adicionarFerramenta(chave);

    let peDeCabra = new Ferramenta("Pé de Cabra", "Pode abrir um piso na sala de estar.", 1);
    quarto.adicionarFerramenta(peDeCabra);

    let lanterna = new Ferramenta("Lanterna", "Útil para explorar lugares escuros.", 3);
    cozinha.adicionarFerramenta(lanterna);

    let corda = new Ferramenta("Corda Velha", "Essencial para descer ao porão.", 1);
    porao.adicionarFerramenta(corda);

    // Criar e adicionar objetos
    let diario = new Objeto("Diário de Victor", "Um diário com anotações misteriosas.", "Você encontrou pistas sobre o mistério!", true);
    biblioteca.adicionarObjeto(diario);

    let mapa = new Objeto("Mapa Rasgado", "Um pedaço de mapa indicando algo.", "Você vê a localização do porão secreto!", true);
    cozinha.adicionarObjeto(mapa);

    let relogio = new Objeto("Relógio Quebrado", "Um relógio que parou de funcionar.", "Há um compartimento secreto dentro!", true);
    hall.adicionarObjeto(relogio);

    let codigo = new Objeto("Código Escrito na Parede", "Um código estranho rabiscado na parede.", "Isso pode ser útil para abrir algo...", true);
    salaEstar.adicionarObjeto(codigo);

    // Definir a sala inicial
    engine.salaCorrente = hall;
    }


export default criarCenario;
