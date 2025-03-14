class DialBar extends HTMLElement {

    static get observedAttributes (){
        return ['Num1', 'Num2', 'Num3', 'Num4', 'Num5', 'Num6','Num7', 'Num8', 'Num9', 'Num10'];
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
        .pagination{

    display: flex;
    list-style: none;
    padding: 0;
    gap: 30px;
    align-items: center;
    margin: 40px 11%;
    color: white;
}   

.pagination li {
    font-size: 24px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
}

.pagination li.active {
    width: 30px;
    height: 30px;
    background-color: #fff;
    color: #000;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.pagination li:not(.active):hover {
    color: #ccc;
}

.inactive{
    font-size: 12px;
    font-weight: 200;
}
        </style>

        <div class="pagination">

                    <li class="active">
                        <p class="inactive">1</p>
                    </li>
                    <li>
                        <p class="inactive">2</p>
                    </li>
                    <li>
                        <p class="inactive">3</p>
                    </li>
                    <li>
                        <p class="inactive">4</p>
                    </li>
                    <li>
                        <p class="inactive">5</p>
                    </li>
                    <li>
                        <p class="inactive">6</p>
                    </li>
                    <li>
                        <p class="inactive">7</p>
                    </li>
                    <li>
                        <p class="inactive">8</p>
                    </li>
                    <li>
                        <p class="inactive">9</p>
                    </li>
                    <li>
                        <p class="inactive">10</p>
                    </li>


                </div>

        `;
    }
}

customElements.define('dial-bar', DialBar)

export default DialBar;
