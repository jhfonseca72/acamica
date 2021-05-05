
const promiseResponse = fetch("https://api.giphy.com/v1/trending/searches?api_key=SJknllDKt53blcCDIP8sFNu6dNTgJ8Gx");

/*<div id="acamica">
    <div class="element"><h3>Stand For India</h3></div>
    <div class="element"><h3>toilet</h3></div>
    <div class="element"><h3></h3></div>
</div>*/

document.getElementById("acamica") //div
document.querySelector("#acamica") //div

document.getElementsByClassName("element") //[<div class="element">, <div class="element">, <div class="element">]
document.querySelectorAll(".element") //[<div class="element">, <div class="element">, <div class="element">]

document.getElementsByTagName("h3") //[h3, h3, h3]
document.querySelectorAll("h3");

function crearElementoCuandoTengaLaInformacion(informacion){
    const divPapa = document.createElement("div"); //<div></div>

    for(index=0; index < informacion.data.length; index++){
        const div = document.createElement("div"); //<div></div>
        const h3 = document.createElement("h3"); //<h3></h3>
        h3.textContent = informacion.data[index]; //<h3>...</h3>
        div.appendChild(h3); //<div><h3>...</h3></div>
        divPapa.appendChild(div);
    }

    const section = document.querySelector("section");
    section.appendChild(divPapa)
    console.log("Segunda promesa", informacion.data)
}

promiseResponse.then( (respuesta) => {
    console.log("Primera promsesa", respuesta)
    return respuesta.json()
}).then( crearElementoCuandoTengaLaInformacion )
