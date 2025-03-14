class HeaderBar extends HTMLElement {

    static get observedAttributes (){
        return ['cat1', 'cat2', 'cat3', 'cat4', 'cat5'];
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

        .navbar2 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    max-width: 1100px;
    background-color: rgb(0, 3, 11);
    border-radius: 15px;
    max-width: 1400px;
    margin: 10px 75px;
}

.categories {
    display: flex;
    gap: 10px;
}

.category {
    background-color: rgb(2, 6, 18);
    color: white;
    border: 1px solid #4444441a;
    padding: 8px 15px;
    border-radius: 20px;
    cursor: pointer;
    transition: background 0.3s;
}

.category:hover {
    background-color: #333;
}

.search-bar {
    display: flex;
    align-items: center;
    background-color: rgb(2, 6, 18);
    color: wh;
    padding: 8px 15px;
    border-radius: 10px;
    border: 1px solid #44444415;
    margin: 0px 10px;
}

.search-bar input {
    background: transparent;
    border: none;
    outline: none;
    color: white;
    margin-left: 8px;
}

.search-bar input::placeholder {
    color: #aaa;
}

.rss-button {
    background-color: rgb(0, 3, 11);
    color: white;
    border: 1px solid #44444410;
    padding: 8px 12px;
    border-radius: 10px;
    cursor: pointer;
    font-size: 18px;
    transition: background 0.3s;
}

.rss-button:hover {
    background-color: #333;
}

.search-bar1 {
    display: flex;
    justify-content: space-between;
}

      
        </style>

            <nav class="navbar2">

        <ul>
            <div class="categories">
                <button class="category">${this.cat1}</button>
                <button class="category">${this.cat2}</button>
                <button class="category">${this.cat3}</button>
                <button class="category">${this.cat4}</button>
                <button class="category">${this.cat5}</button>
            </div>
        </ul>

        <ul class="search-bar1">
            <div class="search-bar">
                <span class="search-icon">🔍</span>
                <input type="text" placeholder="Search...">

            </div>

            <button class="rss-button">📡</button>
        </ul>



    </nav>
        `;
    }
}

customElements.define('header-bar', HeaderBar)

export default HeaderBar;
