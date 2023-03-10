import Links from "./links"
import '../../styles/header.css'

export default function Navbar() {
    return (
        <nav id="navBody" className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarNav">
                    <ul className="navbar-nav">
                        {/* These links are a generalized component used to supply the Navigation bar at the top of the screen with content. */}
                        <Links itemType="nav-item" linkType="nav-link" hrefLink="#home" text="Home"/>
                        <Links itemType="nav-item" linkType="nav-link" hrefLink="#projects" text="Projects"/>
                    </ul>
                </div>
            </div>
        </nav>
    )
}