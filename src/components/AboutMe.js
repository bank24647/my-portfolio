import '../css/AboutMe.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function AboutMe() {
    return (
        <div id="aboutMe" className="container-fluid mt-5">
            <div className="row mt-5">
                <div className="btn-topic font-weight-bold text-center mt-5">
                    <a href="#aboutMe">About Me</a>
                </div>
            </div>
            <div className="row mt-5 text-center">
                <img src="/imgs/Nutchanol.jpg" alt="my face" id="avatar" className="mx-auto d-block"></img>
                <h5 className="mt-4">Nutchanol Pharos</h5>
                <h5 className="mt-3">Nickname: Bank</h5>
            </div>
            <section className="center">
                <a href="https://github.com/bank24647?tab=repositories"><FontAwesomeIcon icon={['fab', 'github']} size="2xl" 
                className="mt-3"/></a>
                <a href="https://www.linkedin.com/in/nutchanol-pharos-4a2a80255/"><FontAwesomeIcon icon={['fab', 'linkedin']} size="2xl" 
                className="mt-3 ms-3"/></a>
            </section>
            <div className="row mx-5">
                <p className="text-center mt-3" id="p-aboutme">
                    I am a newly graduated student seeking an opportunity for an entry-level front-end web developer
                    to further develop my skill. I am confident and skilled in written and verbal communication in
                    English and able to effectively self-manage during independent projects and collaborate
                    as part of a productive team. I also have experience in web Developing in all stages of
                    basic web development.
                </p>
            </div>
            <div className="row fw-bold">
                <div className="col">
                    <div className="skill">
                        <img src="/imgs/html.png" className="logo me-2" alt="html"></img>
                        <span>HTML</span>
                    </div>
                </div>
                <div className="col">
                    <div className="skill">
                        <img src="/imgs/css.png" className="logo me-2" alt="css"></img>
                        <span>CSS</span>
                    </div>
                </div>
                <div className="col">
                    <div className="skill">
                        <img src="/imgs/javascript.png" className="logo me-2" alt="js"></img>
                        <span>JavaScript</span>
                    </div>
                </div>
                <div className="col">
                    <div className="skill">
                        <img src="/imgs/bootstrap.png" className="logo me-2" alt="bootstrap"></img>
                        Bootstrap
                    </div>
                </div>
            </div>
            <div className="row text-left fw-bold mt-3">
                <div className="col">
                    <div className="skill">
                        <img src="/imgs/react.png" className="logo me-2" alt="react"></img>
                        <span>React.js</span>
                    </div>
                </div>
                <div className="col">
                    <div className="skill">
                        <img src="/imgs/node.png" className="logo me-2" alt="node"></img>
                        <span>Node.js</span>
                    </div>
                </div>
                <div className="col">
                    <div className="skill">
                        <img src="/imgs/express.png" className="logo me-2" alt="express"></img>
                        <span>Express.js</span>
                    </div>
                </div>
                <div className="col">
                    <div className="skill">
                        <img src="/imgs/sql.png" className="logo me-2" alt="sql"></img>
                        <span>SQL</span>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default AboutMe;