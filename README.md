# 🏰 RPG - Mansão Sombria

Bem-vindo ao **Mistério na Mansão Sombria**, um jogo de aventura baseado em texto onde você explora salas, coleta itens e resolve enigmas para avançar!

##  Sobre o Jogo

Neste jogo, o jogador pode se movimentar entre salas conectadas, coletar ferramentas e objetos, e interagir com o ambiente para descobrir segredos ocultos. Através de comandos simples, você pode explorar a história e resolver mistérios.

##  Como Jogar

1. **Executar o jogo**
   ```sh
   node index.js
   ```
2. **Interagir com o ambiente** digitando comandos no terminal.

### 🔹 Comandos Disponíveis

- `vai <nome da sala>` → Move o jogador para a sala indicada
- `pega <nome do item>` → Pega um item do ambiente
- `usar <nome do item>` → Usa um item da mochila
- `sair` → Encerra o jogo

##  Estrutura das Salas

O jogo contém várias salas interconectadas, cada uma com objetos e ferramentas que podem ser essenciais para o progresso. Algumas salas podem ter portas trancadas ou elementos escondidos.

###  Exemplo de mapa do jogo:

- **Hall** → Relógio Quebrado, Chave de Prata
- **Biblioteca** → Livros Antigos, Diário de Victor
- **Quarto** → Pé de Cabra, Anotações
- **Sala de Estar** → Código na Parede
- **Cozinha** → Mapa Rasgado, Lanterna
- **Porão Secreto** → Corda Velha, Victor

##  Estrutura do Código

O jogo é organizado em arquivos separados para facilitar a manutenção e expansão:

 **Projeto**

- `index.js` → Arquivo principal que inicia o jogo
- `Jogo.js` → Gerencia a execução do jogo
- `Basicas.js` → Contém a classe `Engine` e `Sala`
- `Objetos.js` → Define a classe `Objeto`
- `Ferramentas.js` → Define a classe `Ferramenta`
- `Salas.js` → Configura o cenário do jogo

##  Exemplo de Gameplay

```sh
O jogo começa na sala: Hall de Entrada
📍 Você está na Hall de Entrada.
🚪 Saídas: Biblioteca
🛠️ Ferramentas disponíveis:
 - Chave de Prata: Abre um baú na cozinha. (1 usos restantes)

Digite um comando: pega Chave de Prata
✅ Você pegou Chave de Prata.

Digite um comando: vai Biblioteca
📖 Você foi para Biblioteca.
```

##  Possíveis Melhorias

- Implementar um sistema de enigmas
- Criar um inventário visual
- Adicionar NPCs interativos
- Melhorar os desafios para tornar a exploração mais envolvente

##  Licença

Este projeto é de uso livre para aprendizado e melhorias! Sinta-se à vontade para modificar e expandir. 🚀
