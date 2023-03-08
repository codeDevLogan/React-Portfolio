import '../../styles/biopage.css';

export default function Biopage() {
    return (
        <div id="home">
            <div className='container2'>
                <div className='card'>
                    <div className='front'>
                        <img id="Biopic" src="/images/Portrait.jpg" alt="Logan Peterson Pictured in a suit and tie with sunglasses on."/>
                        <h1>
                            Logan Peterson
                        </h1>
                    </div>
                    <div className='back'>
                        <h1>Logan Peterson</h1>
                        <p>Welcome to my Portfolio site. This site was built with React and Bootstrap 5, and is designed to showcase my work and my abilities as a Web Development Professional. Hover over the other card to see my skills.</p>
                    </div>
                </div>
            </div>
            <div className='container2'>
                <div className='card'>
                    <div className='front'>
                        <img id="Biopic2" src="/images/Digital_Background.jpg" alt="A Screen of computer code."/>
                        <h1>
                            Skills
                        </h1>
                    </div>
                    <div className='back'>
                        <h1>Skills</h1>
                        <p>Logan Peterson is based in Tucson, Arizona. He is a Full Stack Web Developer, well versed in the following skills, HTML5, CSS, JS, the MERN stack, React.JS, NodeJS, Handlebars.js, Agile Development Principles, Git, GitHub, Restful APIs, Java, Heroku Deployment. Hover over the other card to see more.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}