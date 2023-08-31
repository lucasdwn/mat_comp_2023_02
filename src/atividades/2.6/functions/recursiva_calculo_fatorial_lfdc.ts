function recursiva_calculo_fatorial_lfdc(n:number): number {
    if(n == 0){
        return 1
    }
    else {
        return n * recursiva_calculo_fatorial_lfdc(n-1)
    }
}

export default recursiva_calculo_fatorial_lfdc
