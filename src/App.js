import React, { Component } from "react";
import ReactGA from "react-ga";
import $ from "jquery";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Expertise from "./Components/Expertise";
import Contact from "./Components/Contact";
import Portfolio from "./Components/Portfolio";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: "bar",
      bytearooData: {},
    };

    ReactGA.initialize("UA-110570651-1");
    ReactGA.pageview(window.location.pathname);
  }

  getBytearooData() {
    $.ajax({
      url: "./bytearooData.json",
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ bytearooData: data });
      }.bind(this),
      error: function (xhr, status, err) {
        console.log(err);
        alert(err);
      },
    });
  }

  componentDidMount() {
    this.getBytearooData();
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.bytearooData.main} />
        <About data={this.state.bytearooData.main} />
        <Expertise data={this.state.bytearooData.expertise} />
        <Portfolio data={this.state.bytearooData.portfolio} />
        <Contact data={this.state.bytearooData.main} />
        <Footer data={this.state.bytearooData.main} />
      </div>
    );
  }
}

export default App;
