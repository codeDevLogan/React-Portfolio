export default function IndividualProject({ position, projectName, projectLink, imgSrc, gitLink }) {
    return (
        <a target="_blank" href={projectLink}>
            <div id={`project${position}`} className="projectFrame">
                <div className="projectContent">
                    {projectName}
                </div>
                <img src={imgSrc}/>
                
            </div>
        </a>
    )
}