const promiseResponse = fetch("https://601c74da1a9c220017060a09.mockapi.io/api/v1/galery");
//promiseResponse = Promise<Response>
promiseResponse.then( (respuesta) => {
    console.log("Primera promsesa", respuesta)
    return respuesta.json() //Promise de la informacion real 
}).then( (informacion) => {
    console.log("Segunda promesa", informacion)
})


