
const MAX_NUMBER_OF_ELEMENTS = 3;
const MOCK_API_GALERY = "https://601c74da1a9c220017060a09.mockapi.io/api/v1/galery";
let lastElement = 1;

//TODO: create a function that returns a random number
const random = (max) => {
    return Math.floor((Math.random() * max) + 1)
}

//TODO: create a method that returns a 3 element dynamically 
const createImages = () => {
    const newElements = [];
    for (let index = 0; index < MAX_NUMBER_OF_ELEMENTS; index++) {
        newElements.push({
            title: "Element" + lastElement++,
            image: "https://picsum.photos/id/" + random(100) + "/600"
        });
    } 
    return newElements;
}

//TODO: use the template element to create different card depending on product
const createHTMLCards = (images) => {
    const template = document.querySelector("#card_template").content;
    const container = document.querySelector(".container");
    for(const image of images) {
        const newCard = template.cloneNode(true);
        newCard.querySelector(".title").textContent = image.title;
        newCard.querySelector(".image").src = image.image + "&n=" + random(1000);
        container.appendChild(newCard);
    }
}

const createHTMLCardWithDocument = (images) => {
    const container = document.querySelector(".container");
    for(const object of images) {
        const card = document.createElement("div");
        card.classList.add("card");

        const figure = document.createElement("figure");
        figure.classList.add("figure");

        const image = document.createElement("img");
        image.classList.add("image");
        image.src = object.image + "&n=" + random(1000);

        const figcaption = document.createElement("figcaption");
    
        const h3 = document.createElement("h3");
        h3.classList.add("title");
        h3.textContent = object.title;
        figcaption.appendChild(h3);

        figure.appendChild(image);
        figure.appendChild(figcaption)

        card.appendChild(figure);
        container.appendChild(card);
    }
}

//TODO: create a function that uses our random method and returns the data 1 seconds after calling it
const loadImagesTimeOut = (images) => {
    setTimeout(() => createHTMLCards(images), 1000);
}

//TODO: create a function that triggers the event handler to the load button
const triggerEvents = () => {
    const loadMoreBtn = document.querySelector(".load_more");
    loadMoreBtn.addEventListener("click", (e) => {
        //loadImagesTimeOut(createImages());
        loadImagesUsingFetch();
    });
}

//TODO: use fetch to get data from an external service
const loadImagesUsingFetch = () => {
    return fetch(MOCK_API_GALERY)
    .then(response => response.json())
    .then(data => createHTMLCardWithDocument(data))
    .catch(error => console.log("error", error));
}

//TODO: create and calling the init function 
(function(){
    //loadImagesTimeOut(createImages());
    loadImagesUsingFetch().then( () => triggerEvents());
})();