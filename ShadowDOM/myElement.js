
class myElement extends HTMLElement {
    //1er ciclo de vida de nuestro componente: el constructor
    //inicializamos todo lo que va a estar en memoria para que despues 
    //se puedan agregar como nodos al DOM
    constructor() {        
        super()
        //agregando la web api de shadow DOM
        //se pone modo open, para poder ver el contenido del web component.
        //si es modo cerrado, NO podriamos ver el contenido, o lo que esta dentro del web component
        //pero tampoco podriamos generar una interaccion con el componente, es decir,
        //el componente no puede ser reutilizable y modificarlo a gusto del usuario
        this.attachShadow({mode: 'open'})
        console.log('Hola mundo')
    }

    //generando el html
    getTemplate() {
        const template = document.createElement('template')
        //importante: se usan las comillas francesas ``
        template.innerHTML = `
        <section>
            <h3 class="texto">Hola que tal</h3>
            <h2 class="title" >Hola mundo con la etiqueta template</h2>
            <div>
                <p>Este ejemplo se hace mediante el uso de la etiqueta template</p>
            </div>
        </section>
        ${this.getStyles()}
        `;
        
        return template
    }

    //metodo en donde se genera el css, y son estilos internos del web Component
    getStyles() {
        const estilos = `
        <style>
            .title {
                color: cyan;
            }
            .texto {
                color: red;
            }
            p {
                color:blue;
            }
            h2 {
                background:yellow;
                color:green;
            }
        </style>
        `;

        return estilos
    }

    //se junta el html y el CSS para que se renderize el template (html) y el CSS
    render() {
        //Se agrega al DOM, se clona
        // y con false: solo agrega la parte de section, es decir, solo la 1er etiqueta que encuentre 
        //y con true: clona section y todos los elementos anidados en section
        //se clona para poder agregarlo al DOM directamente
        //this.appendChild(this.getTemplate().content.cloneNode(true))

        //Ahora con shadow-DOM, se le indica que tiene que entrar al shadow-dom, para 
        //renderizar el elemento template:
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true))
    }
    //2do ciclo de vida de nuestro componente: el connectedCallback
    //y para poder visualizar el componente 'p', es decir, agregarlo al DOM como un nodo nuevo
    connectedCallback() {
        //que ya inicialice en el DOM el metodo render
        this.render()
    }
}

//Ya tenemos la clase, ahora hay que convertirla en una nueva etiqueta de HTML, para eso usamos el customElements:
//primer parametro: nombre de la etiqueta
//la regla es que tenga minimo dos palabras separadas por guion medio
//segundo parametro: la clase que va a utilizarse o que clase se va a convertir en una etiqueta:
customElements.define('my-element', myElement)  //la clase myelement se va a convertir en una etiqueta llamada my-element
