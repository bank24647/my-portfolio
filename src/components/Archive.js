import Project from './Project';
import '../css/Archive.css';

function Archive() {
    return (
        <div id="archive" className="container-fluid mt-5">
            <hr></hr>
            <div className="row mt-5">
                <div className="btn-topic font-weight-bold text-center mt-5">
                    <a href="#archive">My Project</a>
                </div>
                <Project />
            </div>
        </div>
    );
};
export default Archive