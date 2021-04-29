
  const productosSeleccionados = [];

  /**
   *
   */
  for (let index = 0; index < productos.length; index++) {

    const precio = productos[index].precio;
    const titulo = productos[index].title;
    const imagen = productos[index].thumbnailUrl;

    const divContenedor = document.createElement("div"); //<div></div>
    divContenedor.setAttribute("id", index);
    divContenedor.classList.add("container");

    const imgProducto = document.createElement("img"); //<img />
    imgProducto.src = imagen; //<img src="https://picsum.photos/id/0/600" />

    const h3PrecioProducto = document.createElement("h3"); //<h3></h3>
    h3PrecioProducto.textContent = precio; //<h3>500</h3>

    const pTituloProducto = document.createElement("p"); //<p></p>
    pTituloProducto.textContent = titulo; //<p>Café</p>

    divContenedor.addEventListener("click", (e) => {
      console.log(e.currentTarget.id, productos[e.currentTarget.id])
      productosSeleccionados.push(productos[e.currentTarget.id])
    })

    divContenedor.appendChild(imgProducto);
    divContenedor.appendChild(h3PrecioProducto);
    divContenedor.appendChild(pTituloProducto);

    //<div> <img src="https://picsum.photos/id/0/600" />  <h3>500</h3> <p>Café</p> </div>
    document.querySelector(".productos").appendChild(divContenedor);
  }

  btn_comprar.addEventListener("click", () => {
    console.log("Productos Seleccionados", productosSeleccionados)
    localStorage.setItem("productos", JSON.stringify(productosSeleccionados));
    window.location.href = "checkout.html"
  })