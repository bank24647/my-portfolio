// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import '../css/Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function NavbarGroup() {
    return (
        <div className="mt-3">
            <ul>
                <a href="#aboutMe"><li id="me"><span className="NavText"><FontAwesomeIcon icon="user-astronaut" className="icon" />About Me</span></li></a>
                <a href="#"><li id="project"><span className="NavText"><FontAwesomeIcon icon="folder" className="icon" />My Project</span></li></a>
            </ul>
        </div>
    );
}

export default NavbarGroup;