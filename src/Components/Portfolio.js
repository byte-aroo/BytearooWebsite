import React, { Component } from "react";
import Fade from "react-awesome-reveal";
import Modal from "react-modal";

let id = 0;

class Portfolio extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
      selectedProject: null,
    };
  }

  openModal = (project) => {
    this.setState({ showModal: true, selectedProject: project });
  };

  closeModal = () => {
    this.setState({ showModal: false, selectedProject: null });
  };

  render() {
    if (!this.props.data) return null;

    const projects = this.props.data.projects.map((project) => {
      let projectImage = "images/portfolio/" + project.image;

      return (
        <div key={id++} className="columns portfolio-item">
          <div className="item-wrap" onClick={() => this.openModal(project)}>
            <img alt={project.title} src={projectImage} />
            <div style={{ textAlign: "center" }}>{project.title}</div>
          </div>
        </div>
      );
    });

    return (
      <section id="portfolio">
        <Fade left duration={1000} distance="40px">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>Check Out Some of Our Ongoing Projects.</h1>

              <div
                id="portfolio-wrapper"
                className="bgrid-quarters s-bgrid-thirds cf"
              >
                {projects}
              </div>
            </div>
          </div>
        </Fade>

        <Modal
          isOpen={this.state.showModal}
          onRequestClose={this.closeModal}
          contentLabel="Project Details"
        >
          {this.state.selectedProject && (
            <div>
              <h2>{this.state.selectedProject.title}</h2>
              <p>{this.state.selectedProject.description}</p>
              <section id="about">
                <Fade duration={1000}>
                  <div className="row">
                    <div className="three columns">
                      <img
                        className="header-logo"
                        src="images/BytearooLogo.png"
                        alt="Bytearoo Logo"
                      />
                    </div>
                    <div className="nine columns main-col">
                      <h2>About Us</h2>
                      <p>
                        Bytearoo is an IT company that specializes in providing
                        innovative and customized solutions to businesses of all
                        sizes. With a team of experienced and skilled
                        professionals, our company offers a wide range of
                        services including software development, web
                        development, mobile app development and IT consulting.
                        Our company is committed towards providing highest level
                        of service to its clients and strives to create
                        long-term partnerships that deliver value and success.
                        We are known for our expertise in latest technologies,
                        agility in adapting to changing market trends, and
                        ability to deliver projects on time and within budget.
                        Our approach to IT solutions is based on a deep
                        understanding of client's businesses and their unique
                        requirements. Whether it's developing a new software
                        application, designing a website, or implementing a
                        strategy, our team works closely with client's to
                        deliver solutions that are tailored to client's needs.
                        In summary, Bytearoo is a dynamic and innovative IT
                        company that helps businesses leverage the power of
                        technology to achieve their goals and stay ahead of the
                        competition. Bytearoo is an IT company that specializes
                        in providing innovative and customized solutions to
                        businesses of all sizes. With a team of experienced and
                        skilled professionals, our company offers a wide range
                        of services including software development, web
                        development, mobile app development and IT consulting.
                        Our company is committed towards providing highest level
                        of service to its clients and strives to create
                        long-term partnerships that deliver value and success.
                        We are known for our expertise in latest technologies,
                        agility in adapting to changing market trends, and
                        ability to deliver projects on time and within budget.
                        Our approach to IT solutions is based on a deep
                        understanding of client's businesses and their unique
                        requirements. Whether it's developing a new software
                        application, designing a website, or implementing a
                        strategy, our team works closely with client's to
                        deliver solutions that are tailored to client's needs.
                        In summary, Bytearoo is a dynamic and innovative IT
                        company that helps businesses leverage the power of
                        technology to achieve their goals and stay ahead of the
                        competition. Bytearoo is an IT company that specializes
                        in providing innovative and customized solutions to
                        businesses of all sizes. With a team of experienced and
                        skilled professionals, our company offers a wide range
                        of services including software development, web
                        development, mobile app development and IT consulting.
                        Our company is committed towards providing highest level
                        of service to its clients and strives to create
                        long-term partnerships that deliver value and success.
                        We are known for our expertise in latest technologies,
                        agility in adapting to changing market trends, and
                        ability to deliver projects on time and within budget.
                        Our approach to IT solutions is based on a deep
                        understanding of client's businesses and their unique
                        requirements. Whether it's developing a new software
                        application, designing a website, or implementing a
                        strategy, our team works closely with client's to
                        deliver solutions that are tailored to client's needs.
                        In summary, Bytearoo is a dynamic and innovative IT
                        company that helps businesses leverage the power of
                        technology to achieve their goals and stay ahead of the
                        competition.
                      </p>
                      <h6 style={{ color: "white" }}>"this is sub bio"</h6>
                    </div>
                  </div>
                </Fade>
              </section>
              <button onClick={this.closeModal}>Close</button>
            </div>
          )}
        </Modal>
      </section>
    );
  }
}

export default Portfolio;
