# Atividades 2 - Matematica para Computação

### 2.1 - Definição atraves de enumeração para membros da familia.
    Resposta: Familia = Celeide, Pedro, Liciely

### 2.2 - Definição atraves de enumeração para cursos da Fatec
    Resposta: Cursos_FatecJCR = DSM, GEO, MARH

### 2.3 - Definição atraves de enumeração de números primos. Um número é dito primo se só possui como divisor ele mesmo e o número um.
    Resposta: Numeros_Primos  = 2, 3, 5, 7, 11, 13, 17, 19, 23, 29

### 2.4 - Definição ostensiva de um colega de classe.
    Resposta: 
<div style="display:flex; align-items:center">Aliceu = <img src="../src/images/aliceu.png"  width="100" /></div>

### 2.5 - Definição recursiva de uma sequência numérica cujos elementos são obtidos multiplicando-se, a partir do segundo elemento, o elemento anterior por 3. Considere que o primeiro elemento vale 2
    Resposta: 
    Definição Recursiva = {Xk_ | X1_ = 2 e Xk_ = 3Xk_-1 para k >= 1}

## 2.6 Utilizando linguagem de programação defina:

### a - Uma enumeração para os meses do ano.
    src>atividades>2.6>enums>meses_ano_lfdc.ts

### b - Uma enumeração para os dias da semana.
    src>atividades>2.6>enums>dias_semana_lfdc.ts

### c -  Uma função recursiva para o cálculo do fatorial de um número.
    src>atividades>2.6>functions>recursiva_calculo_fatorial_lfdc.ts

### d - Uma definição que corresponda a definição do tipo gênero-diferença para um uma pessoa que estude em uma faculdade. Utilize uma linguagem que dê suporte a herança.
    src>atividades>2.6>class>genero_diferenca_lfdc.ts

### 2.7 - Um veículo possui a capacidade de se mover, expressa pela alteração na sua coordenada de longitude e latitude. Um veículo elétrico é um veículo que possui como fonte de energia primária a eletricidade (armazenada em uma bateria). Um veículo elétrico e voador é um veículo que também possui a capacidade de se mover na vertical, expressa pela alteração de sua altitude em relação ao solo. Represente um veículo elétrico e voador utilizando uma cadeia de herança. Defina o código-fonte representativo do modelo em um arquivo separado daquele que faz uso desse e, adicionalmente exemplifique o acesso e a modificação desses atributos através de chamada de suas operações. 
    src>atividades>2.7>class>Veiculo_eletrico_lfdc.ts

### 2.8 O que acontece ao se executar uma chamada a uma função recursiva que chama a si mesma um elevado número de vezes? Dê um exemplo utilizando o código-fonte da progressão aritmética fornecido pelo professor. Faça um comparativo escrevendo um algoritmo e código que sejam equivalentes ao recursivo em termos de entradas e saídas mas que utilizem iteração ao invés de recursão. Qual sua conclusão?
    src>atividades>2.8>funcao_iterativa_lfdc.ts
    src>atividades>2.8>funcao_recursiva_lfdc.ts
    A diferença entre elas é que a função recursiva da quebra de fila(stack overflow) já a função recursiva não calcula tudo mas retorna "Infinity"


### 2.9 Uma progressão geométrica é uma sequência numérica onde cada elemento, a partir do segundo, é obtido multiplicando-se o anterior por uma constante. Utilizando uma linguagem de programação que dê suporte a orientação a objetos, defina uma progressão geométrica e dê exemplo de geração de seus primeiros 50 termos. 
    src>atividades>2.9>class/Progressao_Geometrica_lfdc.ts

### 2.10 A sequência de Fibonacci é definida da seguinte forma: {1, 1, 2, 3, 5, 8, 13, ...}, ou seja, para k>2, xk = xk-1 + xk-2. Utilizando uma linguagem de programação com suporte a orientação a objetos, defina uma classe que modele a sequência de Fibonacci e exemplifique o cálculo de alguns de seus termos. Ilustre a chamada recursiva e identifique chamadas repetidas a um mesmo valor
    src>atividades>2.10>Fibonacci_lfdc.ts