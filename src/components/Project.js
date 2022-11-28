import Carousel from 'react-bootstrap/Carousel';
import '../css/Project.css';
function Project() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-3"></div>
                <div className="col-6 align-self-center text-center mt-3 rounded-3" id="bg-p1">
                    <div className="row">
                        <Carousel className="mt-3">
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 img-carousel"
                                    src="./imgs/project1/user_homepage.png"
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h5 className="carousal-caption">User Homepage</h5>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 img-carousel"
                                    src="./imgs/project1/user_appointment.png"
                                    alt="Second slide"
                                />
                                <Carousel.Caption>
                                    <h5 className="carousal-caption">User Appointment</h5>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 img-carousel"
                                    src="./imgs/project1/user_infect_report.png"
                                    alt="Third slide"
                                />
                                <Carousel.Caption>
                                    <h5 className="carousal-caption">User Self-Report</h5>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                    <div className="row align-self-center mt-5 text-center">
                        <h4 className="rounded-3" id="p1-header">Vaccine Appointment Web Application for Assumption University</h4>
                        <p className="rounded-3" id="p1-subheader">Senior Project - Mock-Up - Fullstack</p>
                        <p className="rounded-3" id="p1-detail">
                            A website that lets university students and personnel appoint vaccines and receive news
                            announcements from the university.
                        </p>
                        <div className="rounded-3" id="p1-lang">
                            <img src="./imgs/html.png" className="p1-logo me-4" alt="html"></img>
                            <img src="./imgs/css.png" className="p1-logo me-4" alt="css"></img>
                            <img src="./imgs/javascript.png" className="p1-logo me-4" alt="javascript"></img>
                            <img src="./imgs/bootstrap.png" className="p1-logo me-4" alt="bootstrap"></img>
                            <img src="./imgs/node.png" className="p1-logo me-4" alt="node"></img>
                            <img src="./imgs/express.png" className="p1-logo me-4" alt="express"></img>
                            <img src="./imgs/sql.png" className="p1-logo me-4" alt="sql"></img>
                        </div>
                    </div>
                    <div className="row">
                        <form>
                            <div className="row">
                                    <button className="pushable my-3 mx-auto"
                                        formaction="https://github.com/bank24647/AU-Vaccine-Appointment-Web-Application">
                                        <span className="shadow"></span>
                                        <span className="edge"></span>
                                        <span className="front">Github</span>
                                    </button>
                                    <button className="pushable my-3 mx-auto"
                                        formaction="https://drive.google.com/drive/folders/13CbSjLURjij-20rgpf0O6zE2pFRe4FfC?usp=share_link">
                                        <span className="shadow"></span>
                                        <span className="edge"></span>
                                        <span className="front">Learn More</span>
                                    </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-3"></div>
            </div>
        </div>
    )
}
export default Project