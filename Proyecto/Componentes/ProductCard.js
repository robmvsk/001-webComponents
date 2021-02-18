import formatPrice from '../Utilerias/tools.js';

class ProductCard extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({mode: 'open'})
        console.log('Bienvenido al webComponent Product-Card')
    }
    getTemplate() {
        const template = document.createElement('template')
        
        template.innerHTML = `
            <main class="container">
                <section class="imageBox">
                    <img src="${this.imgsrc}" />
                </section>
                <section class="details">
                    <div class="nameProduct">
                        <span class="model"> ${this.modelo} </span>
                        <span class="collection"> ${this.coleccion} </span>
                    </div>
                    <div class="content">
                        <p class="description"> ${this.descripcion} </p>
                    </div>
                    <div class="sales">
                        <span class="price"> ${formatPrice(this.precio)} </span>
                        <button class="buy"> ${this.textoboton} </button>
                    </div>
                </section>
            </main>
            ${this.getStyles()}
        `;

        return template
    }
    getStyles() {
        const estilos = `
            <style>
                :host {
                    --primary-background: #5a6cb2;
                    width: 80%;
                    height: 50vh;
                    max-width: ${this.largo}px;
                    min-width: ${this.largo* 4/9}px;
                    margin: 0 auto;
                }
                .container {
                    position: relative;
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-between;
                    width: 100%;
                    height: 100%;
                    margin: 2vw;
                    background-color: #fff;
                }
                .container .imageBox {
                    position: relative;
                    display: flex;
                    justify-content: center;
                    width: 50%;
                    height: 100%;
                    background-color: var(--primary-background);
                }
                .container .imageBox:before {
                    position: absolute;
                    left: 20px;
                    font-size: 4.5vw;
                    font-weight: 800;
                    color: #000;             
                    content: '${this.marca}';
                    opacity: 0.1;
                }
                .container .imageBox img {
                    position: relative;
                    top: 5vh;
                    left: -30px;
                    width: 100%;
                    height: 90%;
                    transform: rotate(-25deg);
                }
                .container .details {
                    display: flex;
                    flex-wrap: wrap;
                    width: 50%;  /*Este es el que hace que cambie y se vea bien el texto*/
                    height: 100%;
                    box-sizing: border-box;
                    padding: 40px;
                    position: relative;
                }
                .container .details .nameProduct {
                    margin-bottom: 25px;
                    font-size: 2.5em;
                    line-height: 0.8em;
                    font-weight: 800;
                    justify-content: center;
                    align-items: center;
                }
                .container .details .nameProduct .model {
                    letter-spacing: 4px;
                    color: #070C24;
                }
                .container .details .nameProduct .collection {
                    font-size: 0.4em;                    
                    text-transform: uppercase;
                    letter-spacing: 3px;
                    color: rgb(204, 190, 190);
                }
                .container .details .content {
                    float: left;
                    font-size: 2.5em;
                    text-align: justify;
                    color: #a2a2a2;
                }
                .container .details .content .description {
                    max-width: 90%;
                    margin-left: 5%;
                    margin-bottom: 35px;
                    color: #333;
                    font-size: 15px;
                }
                .container .details .sales {
                    align-self: flex-end;
                    float: left;
                    width: 95%;  /*sin este no se alinean a la izq y a la der*/
                    height: 10%;
                    padding: 20px;
                    margin-top: 35px;
                }
                .container .details .sales .price {
                    float: left;
                    max-width: 70%;  /*para que tome el 70% del area para poner el precio + USD */
                    margin-left: 0%;
                    font-size: 1.8em;
                    font-weight: 800;
                    color: #a2e2cf;
                }
                .container .details .sales .buy {                 
                    float: right;
                    max-width: 30%;  /*para que tome el 30% del area restante para poner el boton*/
                    padding: 15px 20px;
                    font-size: 0.8em;
                    color: #fff;
                    letter-spacing: 1px;
                    text-transform: uppercase;
                    border-radius: 40px;
                    background-color: #5a6cb2;
                    cursor: pointer;
                }
                @media (max-width: 1080px) {
                    :host {
                        height: 80vh;
                    }
                    .container {
                        height: auto;
                        width: auto;                        
                    }
                    .container .imageBox {
                        padding: 40px;
                        width: 100%;
                        box-sizing: border-box;
                        height: auto;
                        text-align: center;
                    }
                    .container .imageBox:before {
                        font-size: 6vw;
                        color: blue; 
                    }
                    .container .imageBox img {
                        left: initial;
                        width: 65%;
                        height: auto;
                        top: 35%;transform: rotate(0deg);
                    }
                    .container .details {
                        width: 100%;
                        height: auto;
                        padding: 20px;
                    }
                    .container .details .nameProduct {

                    }
                    .container .details .nameProduct model {
                        max-width: 100%;
                        margin-left: 0;
                    }
                    .container .details .nameProduct collection {
                        max-width: 100%;
                        margin-left: 0;
                    }
                    .container .details .content {

                    }
                    .container .details .content .description {

                    }
                    .container .details .sales {
                        
                    }
                    .container .details .sales .price {
                        
                    }
                    .container .details .sales .buy {
                        
                    }
                }
            </style>
        `;

        return estilos
    }
    render() {
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true))
    }
    connectedCallback() {
        this.render()
    }
    static get observedAttributes() {
        return ["marca","imgsrc","modelo","coleccion","descripcion","precio","textoboton", "largo"]
    }
    attributeChangedCallback(atributo, oldValue, newValue) {
        if(oldValue !== newValue) {
            this[atributo] = newValue
        }
    }

}

customElements.define('product-card', ProductCard)
