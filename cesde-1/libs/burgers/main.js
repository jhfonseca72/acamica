 const API_BURGER_URL = "https://601c74da1a9c220017060a09.mockapi.io/api/v1/restaurants";
 
 //using animation.css
 document.documentElement.style.setProperty("--animate-duration", "1s");

 /**
  * Usando la libreria de mapbox crearmos un mapa, este codigo es 
  * basado en la documentación oficial de Mapbox
  */
 const createMap = () => {
   mapboxgl.accessToken =
   "pk.eyJ1IjoiZXhhbXBsZXMiLCJhIjoiY2p1dHRybDR5MGJuZjQzcGhrZ2doeGgwNyJ9.a-vxW4UaxOoUMWUTGnEArw";
   const map = new mapboxgl.Map({
     container: "map",
     style: "mapbox://styles/mapbox/streets-v11", 
     center: [-75.578409, 6.240565],
     zoom: 12,
   });
   return map;
 }
 

 /**
  * Esta funcion crear la siguiente estructura HTML
  * 
  *  <div class="product-container">
  *    <figure class="product">
  *     <img src='...' />
  *     <figcaption>...</figcaption>
  *    </figure>
  *  </div>
  */ 
 const createImage = (productImage, productName) => {
   let div = document.createElement("div");
   div.classList.add("product-container")

   let figure = document.createElement("figure");
   figure.classList.add("product");

   let img = document.createElement("img");
   img.src = productImage;

   let figureCaption = document.createElement("figcaption");
   figureCaption.textContent = productName;
   figureCaption.style.textAlign = "center";
   figureCaption.style.padding = "10px";

   figure.appendChild(img);
   figure.appendChild(figureCaption);

   div.appendChild(figure)

   return div;
 };

 /**
  * Esta funcion consulta un API usando la libreria de axios
  */
  const fetchRestaurants = async () => {
    const {data} = await axios.get(API_BURGER_URL);
    return data;
  }

  /**
   * Esta funcion consulta un API de imagenes https://foodish-api.herokuapp.com/api/
   * usando la libreria de axios
   * 
   * @param {*} image_api 
   * @returns 
   */
  const fetchImage = async (image_api) => {
    const response = await axios.get(image_api);
    return response.data.image;
  }

  /**
   * Esta funcion agrega el marcador en el mapa usando la libreria de mapbox, toma la latitud y longitud 
   * de cada restaurante
   * 
   * @param {*} restaurant 
   */
  const addMarkers = (restaurants, map) => {
    for (const restaurant of restaurants) {
      const location = restaurant.location;
      new mapboxgl.Marker({
          color: "#2dfda9",
          draggable: false
        }).setLngLat([location.lat, location.lng]).addTo(map);
    }
  }

  /**
   * Esta funcion agrega cada elemento al elemento con la clase phone-products"
   * @param {*} data 
   */
  const addFiguresByRestaurants = async (data) => {
    for (const element of data) {
      const image = await fetchImage(element.image_api);
      const imageElement = createImage(image, element.name);
      document.querySelector(".phone-products").appendChild(imageElement);
    }
  }

 /**
  * Esta funcion es el punto de inicio
  */
 (async function () { 
   try {
     const restaurants = await fetchRestaurants();
     addFiguresByRestaurants(restaurants);

     const map = createMap(data)
     addMarkers(restaurants, map);
   } catch(e){
     console.log(e);
   }
 })();