
const template = document.createElement('div')
//importante: se usan las comillas francesas ``
template.innerHTML = `
<style>
    .texto {
        color: red;
    }
    p {
        color:blue;
    }
</style>
<p class = "texto">Hola mundo 2!</p>
<p>Este ejemplo se hace mediante el uso de template</p>
`;

class myElement extends HTMLElement {
    //1er ciclo de vida de nuestro componente: el constructor
    //inicializamos todo lo que va a estar en memoria para que despues 
    //se puedan agregar como nodos al DOM
    constructor()   {        
        super()
        console.log('Hola mundo')
        this.p = document.createElement('p')
    }
    //2do ciclo de vida de nuestro componente: el connectedCallback
    //y para poder visualizar el componente 'p', es decir, agregarlo al DOM como un nodo nuevo
    connectedCallback() {
        //le agregamos el texto
        this.p.textContent = 'Hola mundo!!'
        //lo agregamos al DOM como nodo
        this.appendChild(this.p)
        this.appendChild(template)
    }
}

//Ya tenemos la clase, ahora hay que convertirla en una nueva etiqueta de HTML, para eso usamos el customElements:
//primer parametro: nombre de la etiqueta
//la regla es que tenga minimo dos palabras separadas por guion medio
//segundo parametro: la clase que va a utilizarse o que clase se va a convertir en una etiqueta:
customElements.define('my-element', myElement)  //la clase myelement se va a convertir en una etiqueta llamada my-element
