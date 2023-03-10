import '../../styles/biopage.css';
import bioPic1 from '../../images/Portrait.jpg';
import bioPic2 from '../../images/Digital_Background.jpg';
import bioPic3 from '../../images/Handshake.jpg';

const RESUME_PDF_URL = '/Logan_Peterson_Resume.pdf'
const downloadFileAtURL = (url) => {
    const aTag = document.createElement('a');
    const fileName = url.split('/').pop();
    aTag.href = url;
    aTag.setAttribute('download',fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
}

export default function Biopage() {
    return (
        <div id="home">
            <div className='container2'>
                <div className='card'>
                    <div className='front'>
                        <img id="Biopic" src={bioPic1} alt="Logan Peterson Pictured in a suit and tie with sunglasses on."/>
                        <h1>
                            Logan Peterson
                        </h1>
                    </div>
                    <div className='back'>
                        <h1>Logan Peterson</h1>
                        <p>Welcome to my Portfolio site. This site was built with React and Bootstrap 5, and is designed to showcase my work and my abilities as a Web Development Professional. Hover over the other cards to see more.</p>
                    </div>
                </div>
            </div>
            <div className='container2'>
                <div className='card'>
                    <div className='front'>
                        <img id="Biopic2" src={bioPic2} alt="A Screen of computer code."/>
                        <h1>
                            Skills
                        </h1>
                    </div>
                    <div className='back'>
                        <h1>Skills</h1>
                        <p>Logan Peterson is based in Tucson, Arizona. He is a Full Stack Web Developer, well versed in the following skills, HTML5, CSS, JS, the MERN stack, React.JS, NodeJS, Handlebars.js, Agile Development Principles, Git, GitHub, Restful APIs, Java, Heroku Deployment. Hover over the other cards to see more.</p>
                    </div>
                </div>
            </div>
            <div className='container2'>
                <div className='card'>
                    <div className='front'>
                        <img id="Biopic3" src={bioPic3} alt="Two Business Men Shaking Hands."/>
                        <h1>
                            Resume
                        </h1>
                    </div>
                    <div className='back'>
                        <h1>Resume</h1>
                        <p>Would you like to review my professional Web-Development Resume? Click below to Download Now!</p>
                        <button onClick={() => {downloadFileAtURL(RESUME_PDF_URL)}}>Download Resume</button>
                    </div>
                </div>
            </div>
        </div>
    )
}