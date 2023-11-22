# Desafio de Programação: Classe Hero

Este projeto implementa uma classe básica `Hero` em JavaScript, representando um herói de uma aventura,
com características como nome, idade e tipo (ex: mago, guerreiro, monge, ninja).
Além disso, inclui um método `atacar` que exibe uma ação específica baseada no tipo do herói.

## Características

A classe `Hero` possui as seguintes propriedades:

- `name` (String): O nome do herói.
- `age` (Number): A idade do herói.
- `type` (String): O tipo do herói (mago, guerreiro, monge, ninja).

E o método:

- `atacar()`: Um método que exibe no console a ação de ataque específica do tipo do herói.

## Como Usar

1. Clone o repositório para o seu ambiente local.
2. Abra o arquivo `index.js` (ou o nome que você deu ao arquivo principal).
3. Crie instâncias da classe `Hero` e chame o método `atacar` para ver a saída.

Exemplo:

let mago = new Hero("Gandalf", 100, "mago");
mago.atacar(); // Saída: "O mago atacou usando magia"

Execute o script com Node.js usando o comando node index.js.

## Tecnologias Usadas

JavaScript
Node.js (para execução local)

## Contribuições

Contribuições, problemas e solicitações de funcionalidades são bem-vindas. Sinta-se livre para verificar a seção de issues ou abrir um pull request.
