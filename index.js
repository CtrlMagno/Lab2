import * as components from './src/components/indexPadre.js';

class AppContainer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        this.render();
    }
    

    render() {
        this.shadowRoot.innerHTML = `
        <style>

            :host {
                display: flex;
                flex-wrap: wrap;
                gap: 20px;
                justify-content: center;
                
            }

        </style>


        

        <big-card

        img="./public/imgs/images.jpeg"
        cat="Engineer"
        tit="Revolutionizing software development with cutting-edge tools"
        desc=" Our latest engineering tools are designed to streamline workflows and boost productivity Discover how these innovations are transforming the software"
        imgautor="./public/imgs/111.jpeg"
        autor="Julian Enrique"
        date="March 8, 2025"

        >
        </big-card>


        <big-card

        img="./public/imgs/images.jpeg"
        cat="Engineer"
        tit="Revolutionizing software development with cutting-edge tools"
        desc=" Our latest engineering tools are designed to streamline workflows and boost productivity Discover how these innovations are transforming the software"
        imgautor="./public/imgs/111.jpeg"
        autor="Julian Enrique"
        date="March 8, 2025"

        >
        </big-card>


        <medium-card

        img="./public/imgs/images.jpeg"
        cat="Engineer"
        tit="Revolutionizing software development with cutting-edge tools"
        desc=" Our latest engineering tools are designed to streamline workflows and boost productivity Discover how these innovations are transforming the software"
        imgautor="./public/imgs/111.jpeg"
        autor="Julian Enrique"
        date="March 8, 2025"

        >
        </medium-card>
        

        <small-card
        cat="Engineer"
        tit="Revolutionizing software development with cutting-edge tools"
        desc=" Our latest engineering tools are designed to streamline workflows and boost productivity Discover how these innovations are transforming the software"
        imgautor="./public/imgs/111.jpeg"
        autor="Julian Enrique"
        date="March 8, 2025"

        >
        </small-card>

        <small-card
        cat="Engineer"
        tit="Revolutionizing software development with cutting-edge tools"
        desc=" Our latest engineering tools are designed to streamline workflows and boost productivity Discover how these innovations are transforming the software"
        imgautor="./public/imgs/111.jpeg"
        autor="Julian Enrique"
        date="March 8, 2025"

        >
        </small-card>


                <medium-card

        img="./public/imgs/images.jpeg"
        cat="Engineer"
        tit="Revolutionizing software development with cutting-edge tools"
        desc=" Our latest engineering tools are designed to streamline workflows and boost productivity Discover how these innovations are transforming the software"
        imgautor="./public/imgs/111.jpeg"
        autor="Julian Enrique"
        date="March 8, 2025"

        >
        </medium-card>


        <new-card

        img="./public/imgs/images.jpeg"
        cat="Engineer"
        tit="Revolutionizing software development with cutting-edge tools"
        desc=" Our latest engineering tools are designed to streamline workflows and boost productivity Discover how these innovations are transforming the software"
        imgautor="./public/imgs/111.jpeg"
        autor="Julian Enrique"
        date="March 8, 2025"
        
        >
        </new-card>
        <new-card

        img="./public/imgs/images.jpeg"
        cat="Engineer"
        tit="Revolutionizing software development with cutting-edge tools"
        desc=" Our latest engineering tools are designed to streamline workflows and boost productivity Discover how these innovations are transforming the software"
        imgautor="./public/imgs/111.jpeg"
        autor="Julian Enrique"
        date="March 8, 2025"
        
        >
        </new-card>
        <new-card

        img="./public/imgs/images.jpeg"
        cat="Engineer"
        tit="Revolutionizing software development with cutting-edge tools"
        desc=" Our latest engineering tools are designed to streamline workflows and boost productivity Discover how these innovations are transforming the software"
        imgautor="./public/imgs/111.jpeg"
        autor="Julian Enrique"
        date="March 8, 2025"
        
        >
        </new-card>
        <new-card

        img="./public/imgs/images.jpeg"
        cat="Engineer"
        tit="Revolutionizing software development with cutting-edge tools"
        desc=" Our latest engineering tools are designed to streamline workflows and boost productivity Discover how these innovations are transforming the software"
        imgautor="./public/imgs/111.jpeg"
        autor="Julian Enrique"
        date="March 8, 2025"
        
        >
        </new-card>
        `;
    }
}

customElements.define('app-container', AppContainer);