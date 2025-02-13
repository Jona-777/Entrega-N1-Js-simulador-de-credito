function calcularCredito() {
    alert("Bienvenido al buen samaritano créditos de confianza");

let monto = prompt("Ingrese el monto del préstamo:");

if (!monto || monto <= 0) {
    alert("Monto inválido. Inténtelo de nuevo.");
    return calcularCredito();
}

let cuotas = prompt("Ingrese la cantidad de cuotas (3, 6, 12, 24):");


if (cuotas !== "3" && cuotas !== "6" && cuotas !== "12" && cuotas !== "24") {
    alert("Cantidad de cuotas inválida. Inténtelo de nuevo.");
    return calcularCredito();
}

let interes = 0;
if (cuotas === "3") interes = 5;
if (cuotas === "6") interes = 10;
if (cuotas === "12") interes = 20;
if (cuotas === "24") interes = 35;

let montoTotal = monto * (1 + interes / 100);
let cuotaMensual = montoTotal / cuotas;

alert(
    "📌 Resumen del Crédito:\n\n" +
    "Monto solicitado: $" + monto + "\n" +
    "Cantidad de cuotas: " + cuotas + "\n" +
    "Interés aplicado: " + interes + "%\n" +
    "Monto total a pagar: $" + montoTotal + "\n" +
    "Cuota mensual: $" + cuotaMensual
);

console.log("Monto solicitado: $" + monto);
console.log("Cantidad de cuotas: " + cuotas);
console.log("Interés aplicado: " + interes + "%");
console.log("Monto total a pagar: $" + montoTotal);
console.log("Cuota mensual: $" + cuotaMensual);

if (confirm("¿Desea realizar otra crédito")) {
    calcularCredito(); 
} else {
    alert("Gracias por endeudarse en el buen samaritano, vuelvas prontos");
}
}

calcularCredito();