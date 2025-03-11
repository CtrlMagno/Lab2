import * as components from './src/components/indexPadre.js';

class AppContainer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `

        big-card

        <div class="minicards">


        <div class="minicards">
        </div>
        <h1>Hola</h1>
        `;
    }
}

customElements.define('app-container', AppContainer);

console.log("Hola mundo")

