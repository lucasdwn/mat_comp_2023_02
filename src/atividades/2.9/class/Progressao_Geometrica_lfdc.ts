class Progressao_Geometrica_lfdc {
    constructor(public primeiroTermo: number, public razao: number){
        this.primeiroTermo = primeiroTermo;
        this.razao = razao;
    }

    gerarTermos(){
        const qtd = 50;
        const termos: number[] = [];
        termos.push(this.primeiroTermo)
        
        for (let i = 1; i < qtd; i++) {
            const termoAnterior = termos[i - 1];
            const novoTermo = termoAnterior * this.razao;
            termos.push(novoTermo);
        }

        console.log(termos);
    }
}

export default Progressao_Geometrica_lfdc