class Footer extends HTMLElement {

    static get observedAttributes (){
        return ['footlog', 'nameelog', 'logotit', 'logodesc', 'column1', 'subcolumn1', 'subcolumn2', 'subcolumn3', 'subcolumn4', 'subcolumn5', 'subcolumn6', 'column2','subbcolumn1', 'subbcolumn2', 'subbcolumn3', 'thirdcolumn', 'subbbbcolumn1', 'subbbbcolumn2', 'subbbbcolumn3'];
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

        .footer {
    background-color: var(--background-color);
    color: var(--text-color);
    width: 100%;
}

.logo {
    display: flex;
    align-items: center;
    background-color: rgb(0, 3, 11);
    width: 30px;
    margin-right: 10px;
}



.footer-container {
    max-width: 1500px;
    margin: 0 auto;
    padding: 0 1rem;
}

.footer-content {
    display: flex;
    flex-direction: column;
    gap: 3rem;
}

.footer-top {
    display: flex;
    grid-template-columns: 1fr;
    gap: 100px;
}

.footer-divider {
    height: 1px;
    background-color: var(--border-color);
    margin: 1rem 0;
    color: white;
}

.footer-bottom {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
}

.footer-logo {
    display: flex;
    align-items: center;
    color: var(--text-color);
    font-weight: bold;
    font-size: 1.5rem;
    text-decoration: none;
    
}

.footer-newsletter {
    max-width: 400px;
    color: white;
}

.footer-newsletter h3 {
    margin: 0 0 0.5rem 0;
    font-size: 1.2rem;
}

.footer-newsletter p {
    margin: 0 0 1rem 0;
    font-size: 0.9rem;
    opacity: 0.8;
}

.newsletter-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.newsletter-form label {
    font-size: 0.9rem;
    margin-bottom: 0.25rem;
}

.newsletter-form input {
    padding: 0.75rem 1rem;
    border-radius: 4px;
    border: 1px solid var(--border-color);
    background-color: rgba(255, 255, 255, 0.05);
    color: var(--text-color);
    font-size: 0.9rem;
    width: 100%;
}

.newsletter-form button {
    padding: 0.75rem 1.5rem;
    background-color: white;
    color: black;
    border: none;
    border-radius: 4px;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.2s;
    width: fit-content;
}

.newsletter-form button:hover {
    background-color: #e6e6e6;
}

.footer-links {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    color: white;
}

.footer-links-column h4 {
    font-size: 1.1rem;
    margin: 0 0 1rem 0;
}

.footer-links-column ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.footer-links-column li {
    margin-bottom: 0.75rem;
}

.footer-links-column a {
    color: var(--text-color);
    opacity: 0.7;
    text-decoration: none;
    transition: opacity 0.2s;
}

.footer-links-column a:hover {
    opacity: 1;
}

.footer-legal {
    display: flex;
    gap: 1rem;
    color: white;
}

.footer-legal a {
    color: var(--text-color);
    opacity: 0.7;
    text-decoration: none;
    font-size: 0.9rem;
}

.footer-legal span {
    opacity: 0.7;
}

.footer-legal a:hover {
    opacity: 1;
}

.footer-social {
    display: flex;
    gap: 1rem;
}

.social-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.756);
    color: var(--text-color);
    transition: background-color 0.2s;
}

.social-icon:hover {
    background-color: rgb(255, 255, 255);
}

@media (min-width: 768px) {
    .footer-top {
        grid-template-columns: 1fr 2fr;
    }

    .newsletter-form {
        flex-direction: row;
    }

    .newsletter-form input {
        flex: 1;
    }
}

@media (max-width: 767px) {
    .footer-links {
        grid-template-columns: 1fr 1fr;
    }
}

@media (max-width: 480px) {
    .footer-links {
        grid-template-columns: 1fr;
    }
}       
        </style>

        <footer class="footer">
        <div class="footer-container">
            <div class="footer-content">
                <div class="footer-top">
                    <div class="footer-newsletter">
                        <a href="#" class="footer-logo">
                            <img src="${this.footlog}" alt="" class="logo">
                            <div>${this.nameelog}</div>
                        </a>
                        <h3>${this.logotit}</h3>
                        <p>${this.logodesc}</p>
                        <form class="newsletter-form">
                            <label for="email">Email</label>
                            <input type="email" id="email" placeholder="Your email address" />
                            <button type="submit">Subscribe</button>
                        </form>
                    </div>

                    <div class="footer-links">
                        <div class="footer-links-column">
                            <h4>${this.column1}</h4>
                            <ul>
                                <li><a href="#">${this.subcolumn1}</a></li>
                                <li><a href="#">${this.subcolumn2}</a></li>
                                <li><a href="#">${this.subcolumn3}</a></li>
                                <li><a href="#">${this.subcolumn4}</a></li>
                                <li><a href="#">${this.subcolumn5}</a></li>
                            </ul>
                        </div>

                        <div class="footer-links-column">
                            <h4>${this.column2}</h4>
                            <ul>
                                <li><a href="#">${this.subbcolumn1}</a></li>
                                <li><a href="#">${this.subbcolumn2}</a></li>
                                <li><a href="#">${this.subbcolumn3}</a></li>
                            </ul>
                        </div>

                        <div class="footer-links-column">
                            <h4>${this.thirdcolumn}</h4>
                            <ul>
                                <li><a href="#">${this.subbbbcolumn1}</a></li>
                                <li><a href="#">${this.subbbbcolumn2}</a></li>
                                <li><a href="#">${this.subbbbcolumn3}</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="footer-divider"></div>

                <div class="footer-bottom">
                    <div class="footer-legal">
                        <a href="#">Privacy Policy</a>
                        <span>•</span>
                        <a href="#">Terms of Service</a>
                        <span>Copyright © <a href="#">${this.nameelog}</a> 2025</span>
                    </div>

                    <div class="footer-social">
                        <a href="#" class="social-icon" aria-label="GitHub">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round">
                                <path
                                    d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22">
                                </path>
                            </svg>
                        </a>
                        <a href="#" class="social-icon" aria-label="Twitter">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round">
                                <path
                                    d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z">
                                </path>
                            </svg>
                        </a>
                        <a href="#" class="social-icon" aria-label="LinkedIn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round">
                                <path
                                    d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z">
                                </path>
                                <rect x="2" y="9" width="4" height="12"></rect>
                                <circle cx="4" cy="4" r="2"></circle>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </footer>


        
        `;
    }
}

customElements.define('footer-bar', Footer)

export default Footer;
