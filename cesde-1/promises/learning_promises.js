/**Sync / Async setTimeout / Promises */

console.log("Iniciar llamada");

function esperar(){
            let i = 0;
            while(i++ < 100){
                console.log("Esperar")
            }    
}

setTimeout(esperar, 1000);
console.log("Terminar llamada");

const random = (max) => {
    return Math.floor((Math.random() * max) + 1)
}

const bajarDePeso = new Promise((resolve, reject) => {
    const kg = random(100);
    if(kg < 60) {
        resolve("Lo lograste con " + kg)
    } else {
        reject("Lastima no lo lograste " + kg)
    }
});

function ejecutarCuandoBajeDePeso(mensaje){
    console.log(mensaje);
}

bajarDePeso.then(ejecutarCuandoBajeDePeso)
       .catch((error) => console.log("Error", error));



