import Veiculo_lfdc from "./Veiculo_lfdc";

class Veiculo_Eletrico_lfdc extends Veiculo_lfdc {
    constructor(latitute: number, longitude: number, public bateria_capacidade: string, public altitude: number){
        super(latitute, longitude)
    }

    MoverVerticalmente(altitude: number){
        this.altitude = altitude
        console.log(`Veiculo moveu-se verticalmente para altitude: ${this.altitude}`)
    }

    Apresentar() {
        console.log(`Veiculo Eletrico e Voador Latitude: ${this.latitude}, Longitude: ${this.longitude}, Altitude: ${this.altitude}, Capacidade de Bateria: ${this.bateria_capacidade},`)
    }
}

function Function_Veiculo_Eletrico_lfdc() {
    const VeiculoEletrico = new Veiculo_Eletrico_lfdc(0, 0, '1000MHA', 0)
    VeiculoEletrico.Apresentar()
    VeiculoEletrico.MoverVerticalmente(10)
}

export default Function_Veiculo_Eletrico_lfdc