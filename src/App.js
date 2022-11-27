import './App.css';
import Particles from './components/Particles';
import NavbarGroup from './components/Navbar';
import AboutMe from './components/AboutMe';
import Archive from './components/Archive';
import Footer  from './components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faUserAstronaut, faFolder } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faUserAstronaut, faFolder)

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="intro">Hello, I'm <span id="name">Nutchanol Pharos</span>.</h1>
        <h1 className="intro">I'm a newly graduated student.</h1>
        <h1 className="intro">Seeking for an front-end Web Developer opportunity.</h1>
        <form>
          <button className="pushable m-3" formaction="#aboutMe">
            <span className="shadow"></span>
            <span className="edge"></span>
            <span className="front">About Me</span>
          </button>
          <button className="pushable m-3" formaction="#archive">
            <span className="shadow"></span>
            <span className="edge"></span>
            <span className="front">My Project</span>
          </button>
        </form>
      </header>
      <Particles id="tsparticles" />
      <section className="common-bg">
        <AboutMe />
        <Archive />
      </section>
      <section className="common-bg">
        <Footer />
      </section>
    </div>
  );
}

export default App;
