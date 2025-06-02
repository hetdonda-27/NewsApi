import { Link } from "react-router-dom";


export default function NavBar() {

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid " style={{ background: '	#1A237E ', minHeight: '80px', fontSize: '1.25rem' }}>
                    <a className="navbar-brand" href="/" style={{ color: 'white' }}>NewsMonkey</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item" >
                                <Link className="nav-link active" aria-current="page" to="/" style={{ color: 'white' }}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/business" style={{ color: 'white' }}>Business</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/entertainment" style={{ color: 'white' }}>Entertainment</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/health" style={{ color: 'white' }}>Health</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/science" style={{ color: 'white' }}>Science</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/sports" style={{ color: 'white' }}>Sports</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/technology" style={{ color: 'white' }}>Technology</Link>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline" type="submit" style={{ background: '#4CAF50', color: 'white', border: 'white 2px solid' }}>Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}
