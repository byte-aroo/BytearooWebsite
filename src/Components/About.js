import React, { Component } from "react";
import Fade from "react-awesome-reveal";

class About extends Component {
  render() {
    if (!this.props.data) return null;

    const logo = "images/" + this.props.data.logo;
    const bio = this.props.data.bio;
    const subBio = this.props.data.subBio;

    return (
      <section id="about">
        <Fade duration={1000}>
          <div className="row">
            <div className="three columns">
              <img className="header-logo" src={logo} alt="Bytearoo Logo" />
            </div>
            <div className="nine columns main-col">
              <h2>About Us</h2>
              <p>{bio}</p>              
              <h6 style={{color: "white"}}>
                {subBio}
              </h6>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
