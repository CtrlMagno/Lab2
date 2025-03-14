class NavBar extends HTMLElement {

    static get observedAttributes (){
        return ['log', 'namelog', 'bot1', 'bot2', 'bot3', 'bot4', 'bot5', 'bot6'];
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

        .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgb(0, 3, 11);
    padding: 8px 10px;
    border-radius: 15px;
    border: 0.001rem solid #a8c9ff5b;
    box-shadow: 0 0 10px #0062ff1d;
    max-width: 1290px;
    margin: 40px 100px;
    width: 100%;
}

.logo {
    display: flex;
    align-items: center;
    gap: 8px;
    background-color: rgb(0, 3, 11);
}

.logo span {
    font-size: 20px;
    font-weight: 700;
    color: #3b82f6;
}

.nav-links {
    display: flex;
    list-style: none;
    gap: 20px;
    background-color: rgb(0, 3, 11);
}

.nav-links li a {
    text-decoration: none;
    color: white; 
    font-weight: 200;
    font-size: 14px;
    transition: color 0.3s;
    background-color: rgb(0, 3, 11);
    border-top: none;
    outline: none;
}

.nav-links li a:hover {
    color: #3b82f6;
    background-color: rgb(0, 3, 11);
}

.auth-buttons {
    display: flex;
    align-items: center;
    gap: 20px;
    background-color: rgb(0, 3, 11);
}

.sign-in {
    text-decoration: none;
    color: white;
    font-weight: 300;
    background-color: rgb(0, 3, 11);
}

.sign-up {
    text-decoration: none;
    background: white;
    color: black;
    padding: 8px 15px;
    border-radius: 10px;
    font-weight: 300;
    transition: background 0.3s;
}

.sign-up:hover {
    background: #ddd;
}

.sitemark {
    background-color: rgb(0, 3, 11);
}

.log1 {

    width: 30px;
    height: auto;

}


.text1 {

    margin: 10px 9%;
    padding: 10px 20px;
    max-width: 1200px;
    width: 90%;
}
        </style>

        <nav class="navbar">
            <div class="logo">
                <img class="log1" src="${this.log}" alt="a1">
                <span class="sitemark">${this.namelog}</span>

                <ul class="nav-links">
                    <li><a href="#">${this.bot1}</a></li>
                    <li><a href="#">${this.bot2}</a></li>
                    <li><a href="#">${this.bot3}</a></li>
                    <li><a href="#">${this.bot4}</a></li>
                    <li><a href="#">${this.bot5}</a></li>
                    <li><a href="#">${this.bot6}</a></li>
                </ul>
            </div>

            <div class="auth-buttons">
                <a href="#" class="sign-in">Sign in</a>
                <a href="#" class="sign-up">Sign up</a>
            </div>
        </nav>

        `;
    }
}

customElements.define('nav-bar', NavBar)

export default NavBar;
