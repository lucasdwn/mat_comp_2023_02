class Fibonacci_lfdc{
    private memo: Record<number, number> = {};

    CalcularTermo(k: number): number {
        if(k in this.memo){
            console.log(`Valor já armazenado, Fibonacci(${k})`)
            return this.memo[k]
        }
        
        if( k === 1 || k === 2){
            return 1
        }

        const resultado = this.CalcularTermo(k - 1) + this.CalcularTermo(k - 2)

        this.memo[k] = resultado
        
        return resultado
    }
}

export default Fibonacci_lfdc