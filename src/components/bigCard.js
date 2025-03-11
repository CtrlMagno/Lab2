class BigCard extends HTMLElement {

    // Aquí ponemos los atributos que van a cambiar en el web component.
    static get observedAttributes (){
        return ['img', 'cat', 'tit', 'desc'];
    }

    // Default para cualquier webC
    constructor(){
        super();
        this.attachShadow({mode: 'open'})
    }

    //Default 
    connectedCallback(){
        this.render
    }

    attributeChangedCallback(name, oldValue, newValue){
        if(oldValue !== newValue){
            this[name]=newValue; 
            this.render()
        }
    }


    render(){
        this.shadowRoot.innerHTML=`
        <h1>${this}</h1>
        
        `
    }
}

customElements.define('big-card', BigCard)

export default BigCard;
