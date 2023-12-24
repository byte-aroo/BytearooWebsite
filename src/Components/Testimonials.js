import React, { Component } from "react";
// import Fade from "react-awesome-reveal";

class Testimonials extends Component {
  render() {
    if (!this.props.data) {
      return null;
    }

    const testimonials = this.props.data.map(function (testimonial) {
      return (
        <li key={testimonial.user}>
          <blockquote>
            <p>{testimonial.text}</p>
            <h2>
              <cite>{testimonial.user}</cite>
            </h2>
          </blockquote>
        </li>
      );
    });

    return (
      <section id="testimonials">
        <div className="text-container">
          <div className="row">
            <div className="two columns header-col">
              <h1>
                <span>Client Testimonials</span>
              </h1>
            </div>

            <div className="ten columns flex-container">
              <ul className="slides">{testimonials}</ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Testimonials;
