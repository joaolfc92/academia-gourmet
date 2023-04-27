// Primeiro programa
console.log('Olá mundo');

// -------------------------------------------
// Variáveis
// -------------------------------------------
// Palavra-chave de linguagem para definir que é uma variável é a: let
let faturamento = 1500;
console.log(`O meu faturamento inicial é: ${faturamento}`);
faturamento = faturamento + 500;
console.log(`O meu faturamento após atualização é: ${faturamento}`);

// -------------------------------------------
// Constante
// -------------------------------------------
// Palavra-chave de linguage para definir uma constante é a: const
const conversaoDolar = 5.5;
console.log(`Valor considerado para o dolar: ${conversaoDolar}`);

// Diferença entre variável (let) e constante (const)
// É que a variavél é mutável ao longo do código
// A constante é fixa e permanente ao longo do código
// -------------------------------

// -------------------------------------------
// Types (tipos)
// -------------------------------------------

// Quando nós armazenamos dados, eles podem possuir tipos diferentes
// String = texto alfanumérico (texto ou números)
// Sempre envolvido dentro de aspas duplas (""), aspas simples ('') ou acento agudo (``)
const nome = 'William Castro Coelho';

// Number = números
const idade = 31; // int
const temperatura = 29.52; // float (ponto flutuante)

// Boolean = booleano
// Ele possui apenas dois estados: true  (1 - verdadeiro) / false (0 - falso)
const verdadeiroOuFalso = true;

// Array = grupo de valores (de múltiplos tipos ou não)
// Que são separados por vírgula
// O primeiro valor de um grupo de valores (array) é: 0, 1, 2, 3, ...
const frutas = ['maçã', 'abacaxi', 'banana'];

console.log(frutas[0]);

// Object = ele define que a variável ou
// constante é um objeto (possui múltiplas propriedades (properties) dentro de si)
const carro = {
  nome: 'T-cross',
  tipo: 'SUV',
  marca: 'Volkswagen',
};

// Formas de acessar a propriedade de um objeto
console.log(carro.nome);
console.log(carro['nome']);

// Array = grupo de valores (de múltiplos tipos ou não)
const metasObjeto = [
  {
    franquia: 'Copacabana - RJ',
    faturamento: 100000,
    matriculas: 60,
    socios: [
      {
        nome: 'Silvia',
        cpf: '123',
      },
      {
        nome: 'Rafael',
        cpf: '456',
      },
    ],
  },
  {
    franquia: 'São Conrado - RJ',
    faturamento: 70000,
    matriculas: 40,
  },

  {
    franquia: 'São João de Meriti - RJ',
    faturamento: 80000,
    matriculas: 50,
  },
];

console.log(metasObjeto[0]);
