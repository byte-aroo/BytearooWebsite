import React, { Component } from "react";
import { Fade, Slide } from "react-awesome-reveal";

class Contact extends Component {
  render() {
    if (!this.props.data) return null;

    const phone = this.props.data.phone;
    const message = this.props.data.contactmessage;
    const email = this.props.data.email;
    const emailhref = this.props.data.emailhref;
    const whatsapphref = this.props.data.whatsapphref;
    const linkedin = this.props.data.linkedin;
    const linkedinhref = this.props.data.linkedinhref;    
    return (
      <section id="contact">
        <Fade bottom duration={1000}>
          <div className="row section-head">
            <div className="two columns header-col">
              <h1>
                <span>Get In Touch.</span>
              </h1>
            </div>

            <div className="ten columns">
              <p className="lead">{message}</p>
            </div>
          </div>
        </Fade>

        <div
          className="row"
          style={{ padding: "0px 30px", alignContent: "center" }}
        >
          <Slide left duration={1000}>
            <div className="widget widget_contact">
              <h4 style={{ width: "200px", color: "grey" }}>
                <i className="fab fa-linkedin" /> LinkedIN:{" "}
                <a
                  href={linkedinhref}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {linkedin}
                </a>
              </h4>
              <h4 style={{ width: "200px", color: "grey" }}>
                <i className="fas fa-envelope" /> Email:{" "}
                <a href={emailhref} target="_blank" rel="noopener noreferrer">
                  {email}
                </a>
              </h4>
              <h4 style={{ width: "200px", color: "grey" }}>
                <i className="fas fa-phone"/> Mobile:{" "}
                <a
                  href={whatsapphref}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "block" }}
                >
                  {phone}
                </a>
              </h4>
            </div>
          </Slide>
        </div>
      </section>
    );
  }
}

export default Contact;
