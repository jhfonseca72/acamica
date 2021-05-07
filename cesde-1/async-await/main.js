/**
 * 
 * @param {*} titulo 
 */
async function searchMovie(titulo) {
    const apikey = "usar su api key";

    const strconcat = "http://www.omdbapi.com/?t=" + titulo + "&apikey=" + apikey;
    //const strinterpolate = `http://www.omdbapi.com/?t=${titulo}&apikey=${apikey}`;

    const respuesta= await fetch(strinterpolate);
    const pelicula= await respuesta.json()
    console.log(pelicula);
    crearCartaHTML(pelicula.Poster, pelicula.Title, pelicula.Plot);
}


function crearCartaHTML(poster, title, plot){
    const div = document.createElement("div");
    div.classList.add("card");
    const img = document.createElement("img");
    img.src = poster;

    const h3 = document.createElement("h3");
    h3.textContent = title;

    const p = document.createElement("p");
    p.textContent = plot;

    div.appendChild(img);
    div.appendChild(h3);
    div.appendChild(p);

    document.querySelector("#movies").appendChild(div);
}

document.querySelector("#btn_search").addEventListener("click", () => {
    const input = document.querySelector("#search");
    if(input.value !== ""){
        searchMovie(input.value);
    }
});
