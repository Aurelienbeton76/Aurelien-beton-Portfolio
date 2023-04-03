import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/sitecvAurelienbeton.png";
import projImg2 from "../assets/img/wikionepiece.jpg";
import projImg3 from "../assets/img/turlecorp.png";
import projImg4 from "../assets/img/solare.jpg";
import projImg5 from "../assets/img/converter.jpg";
import projImg6 from "../assets/img/attente.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "CV Aurélien BETON",
      description: "Voici mon tout premier projet réalisé en HTML/CSS/JS. Il représente mon CV sous forme de page web.",
      linkUrl: "https://www.aurelienbetoncv.cf/",
      imgUrl: projImg1,
      imgAlt: "Capture d'écran site CV Aurélien Beton",
    },
    {
      title: "WikiOnePiece",
      description: "Pour ce second projet, j'ai réalisé un mini recensement des personnages du manga One Piece avec la librairie SwiperJS, mais aussi un quiz en JS, le tout designé en SCSS.",
      linkUrl: "https://stalwart-druid-4cd517.netlify.app/#",
      imgUrl: projImg2,
      imgAlt: "Image du site web WikiOnepiece",
    },
    {
      title: "Turtle-Corp.",
      description: "Ce troisième projet est de loin mon préféré. Il a été réalisé en équipe (8 développeurs) pour construire un site qui aidera les prochains étudiants à ne pas être perdus pendant leur formation chez O'clock.",
      linkUrl: "https://deft-sunburst-c7cf99.netlify.app",
      imgUrl: projImg3,
      imgAlt: "Image du site web de la Turtle-Corp. ",
    },
    {
      title: "Système solaire",
      description: "J'ai pris plaisir à recréer un système solaire pour mon quatrième projet en utilisant ThreeJS. À mes yeux, ThreeJS est un langage qui permet d'exprimer toute sa créativité.",
      linkUrl: "https://beamish-lamington-54c602.netlify.app/",
      imgUrl: projImg4,
      imgAlt: "Solar system",
    },
    {
      title: "Convertisseur de devise",
      description: "Mon premier projet réalisé en React avec l'utilisation de TypeScript était la création d'un convertisseur de devises. Le but de ce projet était de permettre aux utilisateurs de convertir une devise en une autre pour chaque pays. J'ai utilisé TypeScript pour bénéficier de ses avantages en termes de sécurité et de lisibilité du code.",
      linkUrl: "https://kaleidoscopic-sherbet-40547a.netlify.app",
      imgUrl: projImg5,
      imgAlt: "Convertisseur-de-devise",
    },
    {
      title: "En cours de réalisation",
      description: "En cours de réalisation",
      linkUrl: "/",
      imgUrl: projImg6,
      imgAlt: "En cours",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>J'ai travaillé sur plusieurs projets en utilisant un large panel de langages de programmations,
                    créant des sites web dynamiques, réactifs et des applications performantes.
                    J'ai également travaillé avec des équipes multidisciplinaires pour répondre aux besoins des clients et des utilisateurs finaux.
                    Mon portfolio vous donnera un aperçu de mes compétences en développement web et de mon expérience de travail avec différents langages de programmation.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                     
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                     
                      
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background"></img>
    </section>
  )
}
