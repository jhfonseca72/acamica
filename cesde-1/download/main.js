window.addEventListener("load", downloadImageUsingLinkAndBlob);
const IMAGE_URL = "https://a.vsstatic.com/company/rewards/v2/rewards-slider.jpg";

function downloadImageUsingLinkAndBlob() {

    const image = document.querySelector("#img");
    image.src = IMAGE_URL;

    image.addEventListener("click", (event) => {
        const url = event.target.src;
        getImage(url);
    });

    async function getImage(url) {

        const imageFetch = await fetch(url);
        const file = await imageFetch.blob();
        const urlBlob = URL.createObjectURL(file);

        const a = document.createElement("a");
        a.download = "myImage";
        a.href = urlBlob;
        a.textContent = "Download"

        document.body.appendChild(a);
    }
}


function downloadImageUsingCanvas() {

    let canvas = document.querySelector("canvas");
    let context = canvas.getContext('2d');

    //context.drawImage(this, 0, 0, this.width, this.height); Use this method when there is a custom size
    function drawImageActualSize() {
        canvas.width = this.naturalWidth;
        canvas.height = this.naturalHeight;
        context.textBaseline = "middle";
        context.fillStyle = "#800";
        context.drawImage(this, 0, 0);
    }

    function saveImageOnButtonClick(event) {
        var filename = ("hashtag-meme-" + Date.now() + ".png");
        let a = document.createElement('a');
        a.href = canvas.toDataURL("image/jpeg");
        a.download = filename;
        a.click();
    }

    const image = new Image(60, 45);
    image.crossOrigin = "anonymous";
    image.onload = drawImageActualSize;
    image.src = IMAGE_URL;

    canvas.addEventListener("click", saveImageOnButtonClick);
}