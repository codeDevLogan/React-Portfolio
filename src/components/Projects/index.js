import '../../styles/projects.css'
import IndividualProject from './individualProject'

export default function Projects() {
    return (
        <>
            <section className="projectContainer">
                <IndividualProject position={1} projectName={"Note Taker App"} projectLink="https://ancient-stream-13435.herokuapp.com" imgSrc={"/images/NoteTaker.png"}/>
                <IndividualProject position={2} projectName={"New Day, New City"} projectLink="https://anthonyfrederick7.github.io/New-Day-New-City/"/>
                <IndividualProject position={3} projectName={"Random Password Generator"} projectLink="https://codedevlogan.github.io/Random-Pass-Gen/"/>
            </section>
        </>
    )
}