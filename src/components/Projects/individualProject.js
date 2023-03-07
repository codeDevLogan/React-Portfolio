export default function IndividualProject({ position, projectName, projectLink, imgSrc }) {
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