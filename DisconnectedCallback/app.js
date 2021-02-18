
class MyCustomElement extends HTMLElement {
    //1er ciclo de vida de nuestro componente: el constructor
    //inicializamos todo lo que va a estar en memoria
    constructor() {        
        super()
        console.log('Hola desde el constructor - Memoria')
    }
    //2do ciclo de vida de nuestro componente: el connectedCallback
    connectedCallback() {
        console.log('Hola desde el DOM')
    }
    //4t0 Ciclo de vida de un web component: disconnectedCallback
    //Eliminamos parte del compoente de memoria y del DOM
    disconnectedCallback() {
        console.log('Adios del DOM')
    }
}

//Ya tenemos la clase, ahora hay que convertirla en una nueva etiqueta de HTML
//la clase MyCustomElement se va a convertir en una etiqueta llamada my-custome-element
customElements.define('my-custome-element', MyCustomElement)  

//linea que remueve del DOM el elemento
document.querySelector('my-custome-element').remove()