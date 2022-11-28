import Project from './Project';
import '../css/Archive.css';

function Archive() {
    return (
        <div id="archive" className="container-fluid mt-5">
            <div className="row mt-5">
                <h2 className="font-weight-bold text-center mt-5 rounded-3" id="topic-am">
                    My Project
                </h2>
                <Project />
            </div>
        </div>
    );
};
export default Archive