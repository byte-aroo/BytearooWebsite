import React, { Component } from "react";
import Slide, { Fade } from "react-awesome-reveal";
import Modal from "react-modal";


class Expertise extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
      selectedExpertise: null,
    };
  }

  openModal = (expertise) => {
    this.setState({ showModal: true, selectedExpertise: expertise });
  };

  closeModal = () => {
    this.setState({ showModal: false, selectedExpertise: null });
  };

  getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {
    if (!this.props.data) return null;
    const randomChatBotColor = this.getRandomColor();
    const chatbot = this.props.data.chatbot.map((chatbot) => {
      return (
        <div key={chatbot.title}>
          <h3>{chatbot.title}</h3>
          <p className="info" style={{ color: randomChatBotColor }}>
            {chatbot.subHeading} <span>&bull;</span>
            <em className="date">{chatbot.feature}</em>
          </p>
          <p>{chatbot.description}</p>
          <a onClick={() => this.openModal(chatbot)}>Know More....</a>
        </div>
      );
    });

    const randomWebsiteColor = this.getRandomColor();
    const website = this.props.data.website.map(function (website) {
      return (
        <div key={website.title}>
          <h3>{website.title}</h3>
          <p className="info" style={{ color: randomWebsiteColor }}>
            {website.subHeading} <span>&bull;</span>
            <em className="date">{website.feature}</em>
          </p>
          <p>{website.description}</p>
          <a>Know More....</a>
        </div>
      );
    });

    const randomMobileColor = this.getRandomColor();
    const mobileApplication = this.props.data.mobileApplication.map(function (
      mobileApplication
    ) {
      return (
        <div key={mobileApplication.title}>
          <h3>{mobileApplication.title}</h3>
          <p className="info" style={{ color: randomMobileColor }}>
            {mobileApplication.subHeading} <span>&bull;</span>
            <em className="date">{mobileApplication.feature}</em>
          </p>
          <p>{mobileApplication.description}</p>
          <a>Know More....</a>
        </div>
      );
    });

    const randomSystemColor = this.getRandomColor();
    const systemSoftware = this.props.data.systemSoftware.map(function (
      systemSoftware
    ) {
      return (
        <div key={systemSoftware.title}>
          <h3>{systemSoftware.title}</h3>
          <p className="info" style={{ color: randomSystemColor }}>
            {systemSoftware.subHeading} <span>&bull;</span>
            <em className="date">{systemSoftware.feature}</em>
          </p>
          <p>{systemSoftware.description}</p>
          <a>Know More....</a>
        </div>
      );
    });

    const randomManagementColor = this.getRandomColor();
    const managementSoftware = this.props.data.managementSoftware.map(function (
      managementSoftware
    ) {
      return (
        <div key={managementSoftware.title}>
          <h3>{managementSoftware.title}</h3>
          <p className="info" style={{ color: randomManagementColor }}>
            {managementSoftware.subHeading} <span>&bull;</span>
            <em className="date">{managementSoftware.feature}</em>
          </p>
          <p>{managementSoftware.description}</p>
          <a>Know More....</a>
        </div>
      );
    });

    return (
      <section id="resume">
        <div style={{ textAlign: "center", paddingBottom: "50px" }}>
          <h1>
            <span>Expertise</span>
          </h1>
        </div>

        <Slide left duration={1300}>
          <div className="row chatbot">
            <div className="nine columns main-col">
              <div className="row chatbot">
                <div className="twelve columns">{chatbot}</div>
              </div>
            </div>
          </div>
        </Slide>

        <hr style={{ width: "30%", margin: "20px auto", padding: "10px 0" }} />

        <Slide left duration={1300}>
          <div className="row website">
            <div className="nine columns main-col">
              <div className="row website">
                <div className="twelve columns">{website}</div>
              </div>
            </div>
          </div>
        </Slide>

        <hr style={{ width: "30%", margin: "20px auto", padding: "10px 0" }} />

        <Slide left duration={1300}>
          <div className="row mobileApplication">
            <div className="nine columns main-col">
              <div className="row mobileApplication">
                <div className="twelve columns">{mobileApplication}</div>
              </div>
            </div>
          </div>
        </Slide>

        <hr style={{ width: "30%", margin: "20px auto", padding: "10px 0" }} />

        <Slide left duration={1300}>
          <div className="row systemSoftware">
            <div className="nine columns main-col">
              <div className="row systemSoftware">
                <div className="twelve columns">{systemSoftware}</div>
              </div>
            </div>
          </div>
        </Slide>

        <hr style={{ width: "30%", margin: "20px auto", padding: "10px 0" }} />

        <Slide left duration={1300}>
          <div className="row managementSoftware">
            <div className="nine columns main-col">
              <div className="row managementSoftware">
                <div className="twelve columns">{managementSoftware}</div>
              </div>
            </div>
          </div>
        </Slide>

        <Modal
          isOpen={this.state.showModal}
          onRequestClose={this.closeModal}
          contentLabel="Project Details"
        >
          {this.state.selectedExpertise && (
            <div>
              <h2>{this.state.selectedExpertise.title}</h2>
              {/* <p>{this.state.selectedExpertise.description}</p> */}
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
                        {this.state.selectedExpertise.modal}
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

export default Expertise;
