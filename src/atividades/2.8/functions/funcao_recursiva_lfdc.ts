function funcao_recursiva_lfdc(n:number): number {
    if(n == 1){
        return 1
    }
    else {
        return 2 * funcao_recursiva_lfdc(n-1)
    }
}

export default funcao_recursiva_lfdc 

