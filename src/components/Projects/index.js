import '../../styles/projects.css'
import IndividualProject from './individualProject'
import GitHubAnchor from './gitHubAnchors'

export default function Projects() {
    return (
        <>
            <section id="projects" className="projectContainer">
                <p className='text-center'><h1>Projects</h1></p>
                <IndividualProject position={1} projectName={"Note Taker App"} projectLink="https://ancient-stream-13435.herokuapp.com" imgSrc={"/images/NoteTaker.png"} />
                <GitHubAnchor gitLink={"https://github.com/codeDevLogan/Note-Taker-App"} />
                <IndividualProject position={2} projectName={"New Day, New City"} projectLink="https://anthonyfrederick7.github.io/New-Day-New-City/" imgSrc={"/images/New-Day-New-City_.png"} gitLink={"https://github.com/AnthonyFrederick7/New-Day-New-City"}/>
                <GitHubAnchor gitLink={"https://github.com/AnthonyFrederick7/New-Day-New-City"} />
                <IndividualProject position={3} projectName={"Random Password Generator"} projectLink="https://codedevlogan.github.io/Random-Pass-Gen/" imgSrc={"/images/Random-Pass-Gen.png"} gitLink={"https://github.com/codeDevLogan/Random-Pass-Gen"}/>
                <GitHubAnchor gitLink={"https://github.com/codeDevLogan/Random-Pass-Gen"} />
            </section>
        </>
    )
}