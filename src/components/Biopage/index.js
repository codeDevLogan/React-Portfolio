import '../../styles/biopage.css';

export default function Biopage() {
    return (
        <div id="home">
            <div className="container text-center">
                <div className="row">
                    <div className="col-4">
                        <img id="Biopic" src="/images/Portrait.jpg" alt="Logan Peterson Pictured in a suit and tie with sunglasses on."/>
                    </div>
                    <div className="col-8 text-center bio d-flex flex-wrap align-items-center">
                        <div className='text-center name'>
                            Logan Peterson
                        </div>
                            Welcome to my Portfolio site. This site was built with React and Bootstrap 5, and is designed to showcase my work and my abilities as a Web Development Professional.
                        <div className='bio2'>
                            Biography
                        </div>
                            Logan Peterson is based in Tucson, Arizona. He is a Full Stack Web Developer, well versed in the following skills, HTML5, CSS, JS, the MERN stack, React.JS, NodeJS, Handlebars.js, Agile Development Principles, Git, GitHub, Restful APIs, Java, Heroku Deployment. 
                    </div>
                </div>
            </div>
        </div>
    )
}