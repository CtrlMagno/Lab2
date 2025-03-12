class SmallCard extends HTMLElement {

    static get observedAttributes() {
        return ['cat', 'tit', 'desc', 'imgautor', 'autor', 'date'];
    }

    constructor() {
        super();
        this.attachShadow({
            mode: 'open'
        });
    }

    //Default 
    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue !== newValue) {
            this[name] = newValue;
            this.render();
        }
    }


    render() {
        this.shadowRoot.innerHTML = `
        <style>

        .minicards{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-around;
    align-content: space-around;
    width: auto;
    height: auto;
    gap: 10px;
    text-decoration: none;
}

        .miniminicard{
    background-color: grey;
    width: auto;
    max-width: 500px;
    height: auto;
    background-color: rgb(2, 6, 18);
    border: 1px solid #8e8e8e3e;
    border-radius: 8px;
    overflow: hidden;
    text-decoration: none;
}

                .infotext {
    color: white;
    margin: 5% 2%;
    font-size: small;
    text-decoration: none;
}

        .alltext{
    margin: 2% auto;
    width: auto;
}

                .tittle1 {
    color: white;
    margin: 3% 2%;
    font-size: 25px;
    font-weight: 600;
    text-decoration: none;
}

        .text {
    color: rgb(117, 117, 117);
    margin: 5% 2%;
    font-size: medium;
    font-weight: 100;
    text-decoration: none;
}

                .info3 {
    display: flex;
    justify-content: space-between;
    margin: 2% 10px;
}

.info4 {
    display: flex;
}

        .infotext2 {
    color: white;
    margin: 10px 20px;
    font-size: small;
    text-decoration: none;
}

            .profile {
    width: 30px;
    height: 30px;
    border-radius: 50%;
}

        .info4 {
    display: flex;
}

.infotext2 {
    color: white;
    margin: 10px 20px;
    font-size: small;
    text-decoration: none;
}




    </style>

        <div class="minicards">

        div class="miniminicard">
            <a href="">

            <div>

                            <span>
                                <p class="infotext">${this.cat}</p>
                            </span>

                            <div class="alltext">

                                <span>
                                    <p class="tittle1">${this.tit}</p>
                                </span>

                                <span>
                                    <p class="text">${this.desc}</p>
                                </span>

                            </div>

                            <div class="info3">

                                <div class="info4">
                                    <img src="${this.imgautor}" class="profile">
                                    <p class="infotext2">${this.autor}</p>
                                </div>

                                <div>
                                    <p class="infotext2">${this.date}</p>
                                </div>

                            </div>

                        </div>

                </div>

         `;
    }
}

customElements.define('small-card', SmallCard)

export default SmallCard;