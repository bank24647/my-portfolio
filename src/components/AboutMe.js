import '../css/AboutMe.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function AboutMe() {
    return (
        <div id="aboutMe" className="container-fluid mt-5">
            <div className="row mt-5">
                <h2 className="font-weight-bold text-center rounded-3" id="topic-am">About Me</h2>
            </div>
            <div className="row mt-3 text-center">
                <div className="col-2"></div>
                <div className="col-2 rounded-3 first-row-am">
                    <div className="row">
                        <img src="./imgs/Nutchanol.jpg" alt="my face" id="avatar" className="mt-2 d-block"></img>
                    </div>
                    <div className="row">
                        <h5 className="mt-2" id="name">Nutchanol Pharos</h5>
                    </div>
                    <div className="row">
                        <h5 className="mt-1" id="nickname">Bank</h5>
                    </div>
                </div>
                <div className="col-4 rounded-3 first-row-am">
                    <div className="row" >
                        <p className="text-center mt-3 rounded-3" id="p-aboutme">
                            I am a newly graduated student seeking an opportunity for an entry-level front-end web developer
                            to further develop my skill and experience. I am confident and skilled in written and verbal communication in
                            English and able to effectively self-manage during independent projects and collaborate
                            as part of a productive team. I also have experience in web Developing in all stages of
                            basic web development.
                        </p>
                    </div>
                    <div className="row mt-2">
                        <div className="col d-flex justify-content-end">
                            <a href="https://github.com/bank24647?tab=repositories"><FontAwesomeIcon icon={['fab', 'github']} size="2xl"
                                className="am-icon" /></a>
                        </div>
                        <div className="col d-flex justify-content-start">
                            <a href="https://www.linkedin.com/in/nutchanol-pharos-4a2a80255/"><FontAwesomeIcon icon={['fab', 'linkedin']} size="2xl"
                                className="am-icon" /></a>
                        </div>
                    </div>
                </div>
                <div className="col-2"></div>
            </div>
            <div className="row mt-2">
                <div className="col-3"></div>
                <div className="col-6 rounded-3 second-row-am">
                    <div className="row">
                        <div className="col-3">
                            <div className="skill w-auto">
                                <img src="./imgs/html.png" className="logo me-2" alt="html"></img>
                                <span>HTML</span>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="skill">
                                <img src="./imgs/css.png" className="logo me-2" alt="css"></img>
                                <span>CSS</span>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="skill">
                                <img src="./imgs/javascript.png" className="logo me-2" alt="js"></img>
                                <span>JavaScript</span>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="skill">
                                <img src="./imgs/bootstrap.png" className="logo me-2" alt="bootstrap"></img>
                                <span>Bootstrap</span>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-3">
                            <div className="skill">
                                <img src="./imgs/react.png" className="logo me-2" alt="react"></img>
                                <span>React.js</span>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="skill">
                                <img src="./imgs/node.png" className="logo me-2" alt="node"></img>
                                <span>Node.js</span>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="skill">
                                <img src="./imgs/express.png" className="logo me-2" alt="express"></img>
                                <span>Express.js</span>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="skill">
                                <img src="./imgs/sql.png" className="logo me-2" alt="sql"></img>
                                <span>SQL</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-3"></div>
            </div>
        </div >
    );
};

export default AboutMe;