class Veiculo_lfdc{
    constructor(public latitude: number, public longitude: number){
        this.latitude = latitude,
        this.longitude = longitude
    }

    Mover(latitude: number, longitude: number){
        this.latitude = latitude;
        this.longitude = longitude;
        console.log(`Veiculo Moveu-se para Latitude: ${this.latitude} e Longitude: ${this.longitude}`)
    }
}

export default Veiculo_lfdc