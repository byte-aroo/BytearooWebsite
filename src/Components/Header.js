import React, { Component } from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-awesome-reveal";
import "./Components.css";

class Header extends Component {
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const tagline = this.props.data.tagline;
    const description = this.props.data.description;
    const emailhref = this.props.data.emailhref;
    const whatsapphref = this.props.data.whatsapphref;

    return (
      <header id="home">
        <ParticlesBg type="circle" num={200} bg={true} />

        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#about">
                About
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#expertise">
                Expertise
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#portfolio">
                Portfolio
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <Fade bottom>
              <h1 className="responsive-headline">{name}</h1>
            </Fade>
            <Fade bottom duration={1200}>
              <h2 style={{ color: "#0f0f0f" }}>{tagline}</h2>
              <br />
              <h3>{description}</h3>
            </Fade>
            <hr />
            <Fade bottom duration={2000}>
              <ul className="social social-buttons">
                <a
                  href={whatsapphref}
                  className="button btn project-btn social-buttons-a"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-whatsapp"></i> Whatsapp
                </a>
                <a
                  href={emailhref}
                  className="button btn github-btn social-buttons-a"
                >
                  <i className="fa-solid fa-envelope"></i> Email
                </a>
              </ul>
            </Fade>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
