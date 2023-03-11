import '../../styles/projects.css'
import IndividualProject from './individualProject'
import GitHubAnchor from './gitHubAnchors'

import projImg1 from "../../images/NoteTaker.png"
import projImg2 from "../../images/New-Day-New-City_.png"
import projImg3 from "../../images/Random-Pass-Gen.png"
import projImg4 from "../../images/Gospel-Trivia-Game.png"
import projImg5 from "../../images/Logan-Portfolio.png"
import projImg6 from "../../images/Meet-The-Team-Page-Generator.png"

export default function Projects() {
    return (
        <>
            <section id="projects" className="projectContainer">
                <p className='text-center'><h1>Projects</h1></p>
                <IndividualProject position={1} projectName={"Note Taker App"} projectLink="https://ancient-stream-13435.herokuapp.com" imgSrc={projImg1} />
                <GitHubAnchor gitLink={"https://github.com/codeDevLogan/Note-Taker-App"} />
                <IndividualProject position={2} projectName={"New Day, New City"} projectLink="https://anthonyfrederick7.github.io/New-Day-New-City/" imgSrc={projImg2} gitLink={"https://github.com/AnthonyFrederick7/New-Day-New-City"}/>
                <GitHubAnchor gitLink={"https://github.com/AnthonyFrederick7/New-Day-New-City"} />
                <IndividualProject position={3} projectName={"Random Password Generator"} projectLink="https://codedevlogan.github.io/Random-Pass-Gen/" imgSrc={projImg3} gitLink={"https://github.com/codeDevLogan/Random-Pass-Gen"}/>
                <GitHubAnchor gitLink={"https://github.com/codeDevLogan/Random-Pass-Gen"} />
                <IndividualProject position={4} projectName={"Gospel Trivia Game"} projectLink="https://codedevlogan.github.io/Gospel-Trivia-Game/" imgSrc={projImg4} gitLink={"https://github.com/codeDevLogan/Gospel-Trivia-Game"}/>
                <GitHubAnchor gitLink={"https://github.com/codeDevLogan/Gospel-Trivia-Game"} />
                <IndividualProject position={5} projectName={"Old Portfolio"} projectLink="https://codedevlogan.github.io/Logan-Portfolio//" imgSrc={projImg5} gitLink={"https://github.com/codeDevLogan/Logan-Portfolio"}/>
                <GitHubAnchor gitLink={"https://github.com/codeDevLogan/Logan-Portfolio"} />
                <IndividualProject position={6} projectName={"Meet the Team Webpage Generator"} projectLink="https://github.com/codeDevLogan/Meet-The-Team-Page-Generator" imgSrc={projImg6} gitLink={"https://github.com/codeDevLogan/Meet-The-Team-Page-Generator"}/>
                <GitHubAnchor gitLink={"https://github.com/codeDevLogan/Meet-The-Team-Page-Generator"} />
            </section>
        </>
    )
}