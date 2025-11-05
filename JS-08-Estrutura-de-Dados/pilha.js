const readline = require('readline-sync');

class Stack {
    constructor() {
        this.items = [];
    }
    push(element) {
        this.items.push(element);
    }
    pop() {
        return this.items.pop();
    }
    isEmpty() {
        return this.items.length === 0;
    }
    list() {
        return this.items;
    }
}

function mainPilha() {
    const pilhaLivros = new Stack();
    let opcao = -1;

    console.log("Bem-vindo ao Sistema de Pilha de Livros!");

    while (opcao !== 0) {
        console.log("\nMenu:");
        console.log("1: Adicionar um novo livro na pilha");
        console.log("2: Listar todos os livros da Pilha");
        console.log("3: Retirar um livro da pilha");
        console.log("0: Finalizar o programa");

        const input = readline.question("Digite uma opcao: ");
        opcao = parseInt(input);

        switch (opcao) {
            case 1:
                const nome = readline.question("Digite o nome do livro: ");
                pilhaLivros.push(nome);
                console.log("Livro adicionado!");
                console.log("Pilha:");
                pilhaLivros.list().forEach(livro => console.log(livro));
                break;

            case 2:
                if (pilhaLivros.isEmpty()) {
                    console.log("A Pilha está vazia!");
                } else {
                    console.log("Lista de Livros na Pilha:");
                    pilhaLivros.list().forEach(livro => console.log(livro));
                }
                break;

            case 3:
                const livroRetirado = pilhaLivros.pop();
                if (livroRetirado) {
                    console.log(`O Livro "${livroRetirado}" foi retirado da pilha!`);
                    if (!pilhaLivros.isEmpty()) {
                        console.log("Pilha:");
                        pilhaLivros.list().forEach(livro => console.log(livro));
                    }
                } else {
                    console.log("A Pilha está vazia!");
                }
                break;

            case 0:
                console.log("Programa Finalizado!");
                break;

            default:
                console.log("Opção inválida. Tente novamente.");
                break;
        }
    }
}

mainPilha();
