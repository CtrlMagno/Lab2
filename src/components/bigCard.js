class BigCard extends HTMLElement {

    static get observedAttributes (){
        return ['img', 'cat', 'tit', 'desc', 'imgautor', 'autor','date'];
    }

    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }

    //Default 
    connectedCallback(){
        this.render();
    }

    attributeChangedCallback(name, oldValue, newValue){
        if(oldValue !== newValue){
            this[name]=newValue; 
            this.render();
        }
    }


    render(){
        this.shadowRoot.innerHTML=`
        <style>
            image1 {
            width: 100%;
            height: auto;
            border-top-left-radius: 8px;
            border-top-right-radius: 8px;
            display: block;
        }

        .cardMain {
            width: calc(50% - 10px);
            max-width: 550px;
            height: auto;
            background-color: rgb(2, 6, 18);
            border: 1px solid #8e8e8e3e;
            border-radius: 8px;
            text-decoration: none;
            margin: 0;
            overflow: hidden;
        }

        .infotext {
            color: white;
            margin: 5% 2%;
            font-size: small;
            text-decoration: none;
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

        .profile {
            width: 30px;
            height: 30px;
            border-radius: 50%;
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

        .cardsPrincipal {
            display: flex;
            flex-wrap: wrap;
            gap: 80px;
            margin: 10px auto;
            width: 90%;
            max-width: 1200px;
            margin-left: auto;
            margin-right: auto;
        }

        .big-card{
            text-decoration: none;                
        }
                
        </style>

        <div class="cardMain">

            <a href="">



                <img src="${this.img}" alt="" class="image1">

                <div class="infotext">
                    <p>${this.cat}</p>
                </div>

                <div class="tittle1">
                    <p>${this.tit}</p>
                </div>

                <div class="text">
                    <p> ${this.desc}</p>
                </div>
                <div class="Tittle1"></div>

                <div class="info3">

                    <div class="info4">
                        <img src="${this.imgautor}" alt="profile" class="profile">
                        <p class="infotext2">${this.autor}</p>
                    </div>

                    <div>
                        <p class="infotext2">${this.date}</p>
                    </div>

                </div>

            </a>

        </div>
        

        `;
    }
}

customElements.define('big-card', BigCard)

export default BigCard;
