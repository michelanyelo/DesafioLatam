// importaciones
import Impuestos from "./Impuestos.mjs";
import Cliente from "./Cliente.mjs";

// const de clases
const impuesto = new Impuestos(5000, 2000);
const cliente = new Cliente("Juan", impuesto);

// método calcular impuesto
const totalImpuesto = cliente.calcularImpuesto();

// consola para imprimir resultados}
console.log(`El cálculo del impuesto es: ${totalImpuesto}`);