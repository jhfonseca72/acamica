

/***
 * Promesas then/catch
 */
Promise.resolve(1).then( (valor) => console.log(valor)); 
Promise.resolve({name: "Acamica"}).then( (valor) => console.log(valor)); 

/**
 * Ejemplo usando async/await 
 */
const verificarPeso = (pesoActual) => {
    if(pesoActual < 70){
        return Promise.resolve("Esta bien de peso");
    } else {
        return Promise.reject("Cuidado!");
    } 
}

async function bajarDePeso() {
    try {
        const valor = await verificarPeso(90);
        console.log("Despues de ejecutar await ", valor);
        return "Reto superado";
    }catch(e){
        console.log("Se presento un error " + e);
    }
    return "Debes trabajar más";
}

(async function(){
    const result = await bajarDePeso();
    console.log("Resultado ", result)
})();



/**
 * Ejemplo simulando fetch y async/await 
 */
const miRespuesta = {
    status:200,
    json: () => {
        return Promise.resolve([{name: "Acamica"}, {name: "Javascript"}])
    }
}

async function fetchGaleryApiMock(){
    const response = await Promise.resolve(miRespuesta);
    console.log("fetchGaleryApiMock", response);
    const informacion = await response.json();
    console.log("fetchGaleryApiMock", informacion)
}

fetchGaleryApiMock();


/**
 * Ejemplo usando fetch y async/await consumiendo un servicio externo
 */
async function fetchGaleryApi(){
    const response = await fetch("https://601c74da1a9c220017060a09.mockapi.io/api/v1/galery"); 
    console.log("fetchGaleryApi" , response)
    const informacion = await response.json()
    console.log("fetchGaleryApi" , informacion)
    console.log(informacion);
}

fetchGaleryApi();

