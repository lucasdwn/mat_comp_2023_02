function funcao_iterativa_lfdc(n:number): number {
    
    let term: number = 1;
    let limit: number = 2;

    while(limit<=n){
        term = term*2
        limit += 1
    }

    return term;
}

export default funcao_iterativa_lfdc
