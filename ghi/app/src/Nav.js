import { NavLink, Outlet } from "react-router-dom";

function Nav() {
    return (
        <>
        {/* <Outlet> */}
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Conference GO!</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink id="add-location-link" className="nav-link" aria-current="page" to="/locations/new">New location</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink id="add-conference-link" className="nav-link" aria-current="page" to="/conferences/new">New Conference</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink id="add-presentation-link" className="nav-link" aria-current="page" to="/presentations/new">New Presentation</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink id="add-attendee-link" className="nav-link" aria-current="page" to="/attendees/new">Attend Conference</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink id="attendee-list-link" className="nav-link" aria-current="page" to="/attendees">Attendee List</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
        {/* </Outlet> */}
        </>
    );
};

export default Nav;