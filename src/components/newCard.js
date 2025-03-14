class NewCard extends HTMLElement {

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
        .lastnew{
    max-width: 700px;
    widht: 100%;
    height: 100%;
    background-color: rgb(2, 6, 18);
    border-radius: 8px;
    overflow: hidden;
}

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

.masterNew{

    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    margin: 10px auto;
    width: 90%;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
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
    color: white;
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

    



        </style>

            <div class= "minicards">

                   <div class="lastnew">


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

                            <div class="info3">

                                <div class="info4">
                                    <img src="${this.imgautor}" alt="profile" class="profile">
                                    <p class="infotext2">${this.autor}</p>
                                </div>

                                <div>
                                    <p class="infotext2">${this.date}</p>
                                </div>
                            </div>

                        </div>

                    </div>

            </div>

         `;
    }
}

customElements.define('new-card', NewCard)

export default NewCard;