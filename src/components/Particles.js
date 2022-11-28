import Particles from "react-particles";
import { loadFull } from "tsparticles"; // loads tsparticles
import { useCallback, useMemo } from "react";

// tsParticles Repository: https://github.com/matteobruni/tsparticles
// tsParticles Website: https://particles.js.org/
const ParticlesComponent = (props) => {
  // using useMemo is not mandatory, but it's recommended since this value can be memoized if static
  const options = useMemo(() => {
    // using an empty options object will load the default options, which are static particles with no background and 3px radius, opacity 100%, white color
    // all options can be found here: https://particles.js.org/docs/interfaces/Options_Interfaces_IOptions.IOptions.html
    return {
      "fullScreen": {
        "enable": true,
        "zIndex": 1
      },
      "fpsLimit": 120,
      "particles": {
        "number": {
          "value": 80,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "#ffffff",
          "animation": {
            "enable": true,
            "speed": 20,
            "sync": true
          }
        },
        "opacity": {
          "value": 0.5
        },
        "size": {
          "value": {
            "min": 0.5,
            "max": 4
          }
        },
        "links": {
          "enable": true,
          "distance": 100,
          "color": "#ffffff",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 1,
          "direction": "none",
          "outModes": {
            "default": "out"
          }
        }
      },
      "interactivity": {
        "events": {
          "onHover": {
            "enable": true,
            "mode": "repulse"
          },
          "onClick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "repulse": {
            "distance": 200
          },
          "push": {
            "quantity": 4
          }
        }
      },
      "detectRetina": true,
      "background": {
        "color": "#001219"
      }
    };
  }, []);

  // useCallback is not mandatory, but it's recommended since this callback can be memoized if static
  const particlesInit = useCallback((engine) => {
    loadFull(engine);

  }, []);

  // setting an id can be useful for identifying the right particles component, this is useful for multiple instances or reusable components
  return <Particles id={props.id} init={particlesInit} options={options} />;
};

export default ParticlesComponent;