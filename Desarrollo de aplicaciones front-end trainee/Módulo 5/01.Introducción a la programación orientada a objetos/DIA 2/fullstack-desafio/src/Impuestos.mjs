class Impuestos {
    constructor(montoBrutoAnual, deducciones) {
        this._montoBrutoAnual = montoBrutoAnual;
        this._deducciones = deducciones;
    }

    // getters
    get montoBrutoAnual() {
        return this._montoBrutoAnual;
    }

    get deducciones() {
        return this._deducciones;
    }

    // setters
    set montoBrutoAnual(value) {
        if (typeof(value) === 'number') {
            this._montoBrutoAnual = value;
        } else {
            console.log("El monto bruto anual debe ser numérico");
        }
    }

    set deducciones(value) {
        if (typeof(value) === 'number') {
            this._deducciones = value;
        } else {
            console.log("Las deducciones deben ser numéricas");
        }
    }
}

export default Impuestos;