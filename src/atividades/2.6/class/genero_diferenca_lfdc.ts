
class Pessoa_lfdc {
    constructor(public nome: string, public idade: number) {
        this.nome = nome;
        this.idade = idade;
    }
}

class Estudante_lfdc extends Pessoa_lfdc {
    constructor(nome: string, idade: number, public nivel_educacional: string) {
        super(nome, idade)
    }

    apresentar() {
        console.log(`Nome: ${this.nome}, Idade: ${this.idade}, Nivel Educacional: ${this.nivel_educacional}`)
    }
}

function genero_diferenca_lfdc(){

    const Estudante_Lucas_Faculdade_lfdc = new Estudante_lfdc("Lucas", 20, "Faculdade")
    Estudante_Lucas_Faculdade_lfdc.apresentar();
}

export default genero_diferenca_lfdc;