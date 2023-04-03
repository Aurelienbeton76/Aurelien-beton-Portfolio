import meter1 from "../assets/img/html-logo.png";
import meter2 from "../assets/img/css-logo.png";
import meter3 from "../assets/img/javascript-logo.png";
import meter4 from "../assets/img/react-logo.png";
import meter5 from "../assets/img/Typescript.png";
import meter6 from "../assets/img/node-logo.png";
import meter7 from "../assets/img/bootstrap-logo.png";
import meter8 from "../assets/img/Vitejs.png";
import meter9 from "../assets/img/sql-logo.png";
import meter10 from "../assets/img/api-logo.png";
import meter11 from "../assets/img/github-logo.png";
import meter12 from "../assets/img/svelte.png";
import meter13 from "../assets/img/windows-logo.png";
import meter14 from "../assets/img/linux-logo.png";


import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import colorSharp from "../assets/img/flou1.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn"id="skills">
                        <h2>Langages</h2>
                        <p>Ici je vais vous présenter mes différents langages de programmation ainsi que mes outils utilisé. <br></br> <br></br>Ces langages sont des outils précieux pour moi dans le développement de mes projets et ils ont été acquis au fil de mes expériences et de mes formations.<br></br>Je suis fier de les maîtriser et je suis toujours en train de les développer pour devenir un expert dans leur utilisation.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="HTML" />
                                
                            </div>
                            <div className="item">
                                <img src={meter2} alt="CSS" />
                                
                            </div>
                            <div className="item">
                                <img src={meter3} alt="JAVASCRIPT" />
                                
                            </div>
                            <div className="item">
                                <img src={meter4} alt="REACT" />
                                
                            </div>
                            <div className="item">
                                <img src={meter5} alt="TYPESCRIPT" />
                                
                            </div>
                            <div className="item">
                                <img src={meter6} alt="NODEJS" />
                               
                            </div>
                            <div className="item">
                                <img src={meter7} alt="BOOSTRAP" />
                                
                            </div>
                            <div className="item">
                                <img src={meter8} alt="VUEJS" />
                                
                            </div>
                            <div className="item">
                                <img src={meter9} alt="SQL" />
                                
                            </div>
                            <div className="item">
                                <img src={meter10} alt="API" />
                                
                            </div>
                            <div className="item">
                                <img src={meter11} alt="GIT" />
                                
                            </div>
                            <div className="item">
                                <img src={meter12} alt="SVELTE" />
                                
                            </div>
                            <div className="item">
                                <img src={meter13} alt="WINDOWS" />
                                 
                            </div>

                            <div className="item">
                                <img src={meter14} alt="LINUX" />
                                 
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="ImageBackground" />
    </section>
  )
}