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
                text-decoration: none;  
                display: block;
                }

                .Section {
                display: flex;
                justify-content: center;
                gap: 20px;
                margin: 20px 100px;
                }

                .middleSec {

                display: grid;
                grid-template-columns: repeat(3, 2fr);
                gap: 40px;
                margin: 10px 100px;

                }

                .littleSec {

                display: flex;
                flex-direction: column;
                gap: 10px;
                }
                
                .newsec {

                display: grid;
                grid-template-columns: repeat(2, 2fr);
                gap: 40px;
                margin: 10px 100px;
                
                }

                h1{
                color: white;
                font-size: 40px;
                margin: 10px 10px;
                font-weight: 600;
                }

                p{
                color: white;
                font-size: 15px;
                margin: 30px 100px;
                font-weight: 300;
                }

                footer{

                width: 100%;
                }

                footer-bar{
                margin: 200px;
                
                }



            </style>

            <nav-bar 
            log="./public/imgs/Logo.png"
            namelog="Sitemark"
            bot1="Features"
            bot2="Testimonials"
            bot3="Highlights"
            bot4="Pricing"
            bot5="FAQ"
            bot6="Blog"
            >
            </nav-bar>


            <header-bar
            cat1="All Categories"
            cat2="Company"
            cat3="Product"
            cat4="Design"
            cat5="Engineering"
            >
            </header-bar>


            <section class="Section">
            <big-card

            img="./public/imgs/199-800x450.jpg"
            cat="Engineer"
            tit="Revolutionizing software development with cutting-edge tools"
            desc=" Our latest engineering tools are designed to streamline workflows and boost productivity Discover how these innovations are transforming the software"
            imgautor="./public/imgs/111.jpeg"
            autor="Julian Enrique"
            date="March 8, 2025"

            >
            </big-card>


            <big-card

            img="./public/imgs/199-800x450.jpg"
            cat="Engineer"
            tit="Revolutionizing software development with cutting-edge tools"
            desc=" Our latest engineering tools are designed to streamline workflows and boost productivity Discover how these innovations are transforming the software"
            imgautor="./public/imgs/111.jpeg"
            autor="Julian Enrique"
            date="March 8, 2025"

            >
            </big-card>

            </section>
            

            <section class="middleSec">


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


            <section class="littleSec">

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

            </section>


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

            <h1>Latest</h1>

            </section>

            <section class="newsec">


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

            </newsec>

            <footer>

            <dial-bar 
            Num1="1"
            Num2="2"
            Num3="3"
            Num4="4"
            Num5="5"
            Num6="6"
            Num7="7"
            Num8="8"
            Num9="9"
            Num10="10"
            >
            </dial-bar>
            

            

            <footer-bar
            footlog="./public/imgs/Logo.png"
            nameelog="Sitemark"
            logotit="Join the newsletter"
            logodesc="Subscribe for weekly updates. No spams ever!"

            column1="Products"
            subcolumn1="Features"
            subcolumn2="Testimonials"
            subcolumn3="Highlights"
            subcolumn4="Pricing"
            subcolumn5="FAQs"

            column2="Company"
            subbcolumn1="About Us"
            subbcolumn2="Careers"
            subbcolumn3="Press"

            thirdcolumn="Legal"
            subbbbcolumn1="Terms"
            subbbbcolumn2="Privacy"
            subbbbcolumn3="Contact"
            >
            </footer-bar>

            </footer>

            `;
        }
    }

    customElements.define('app-container', AppContainer);