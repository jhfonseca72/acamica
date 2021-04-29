
function saludar(callback) {
    console.log("Este es el callback" , callback)
    if(typeof callback === "function"){
        const saludo = callback();
        console.log("Saludar", saludo)
    }
}

function welcome(){
    return "Hi"
}

saludar(welcome);

saludar(() => {
    return "Hello";
});

saludar(() => {
    let i = 0;
    while(i++ < 10){
        console.log(i);
    }
    return "Hola";
});

saludar("ashdjkasjd");

function sumar(a, b) {
    return a + b;
}

sumar(3, 5);
sumar(5, 3);

const abc = 89;
sumar(abc, 9);

function calcularValorConImpuestos(callback, estrato, impuesto){
    const valorTotal = callback(impuesto, estrato);
    console.log("ValorTotal " + valorTotal);
}

function calcularValorAgua(impuesto, estrato){
    if(estrato <= 3){
        return 60000;
    } else {
        return impuesto + 60000;
    }
}

function calcularValorEnergia(impuesto, estrato){
    if(estrato <= 3){
        return 60000;
    } else {
        return impuesto + 60000 + 20000;
    }
}

calcularValorConImpuestos(calcularValorAgua, 3, 10000);
calcularValorConImpuestos(calcularValorAgua, 4, 90000);
calcularValorConImpuestos(calcularValorEnergia, 5, 100000);