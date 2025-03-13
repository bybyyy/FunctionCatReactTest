import React, { Component } from "react";
import Fade from "react-reveal";

class About extends Component {
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const profilepic = "images/" + this.props.data.image;
    const bio = this.props.data.bio;
    const street = this.props.data.address.street;
    const city = this.props.data.address.city;
    const state = this.props.data.address.state;
    const zip = this.props.data.address.zip;
    const phone = this.props.data.phone;
    const email = this.props.data.email;
    const resumeDownload = this.props.data.resumedownload;

    return (
      <section id="about">
        <Fade duration={1000}>
          <div className="row">
            <div className="three columns">
              <img
                className="profile-pic"
                src={profilepic}
                style={{ borderRadius: "50%", boxShadow: "0 4px 10px rgba(0,0,0,0.2)" }}
                alt={`${name}'s Profile`}
              />
            </div>
            <div className="nine columns main-col">
              <h2 style={{fontSize: "28px", color: "#333" }}>About Me</h2>

              <p style={{lineHeight: "1.6", fontSize: "16px", color: "#555" }}>{bio}</p>
              <div className="row">
                <div className="columns contact-details">
                  <h2 style={{fontSize: "22px", marginBottom: "10px" }}>Contact Details</h2>
                  <p className="address">
                    <span>{name}</span>
                    <br />
                    <span>
                      {street}
                      <br />
                      {city} {state}, {zip}
                    </span>
                    <br />
                    <span>{phone}</span>
                    <br />
                    <span>{email}</span>
                  </p>
                </div>
                <div className="columns download">
                  <p>
                    <a
                      href={resumeDownload}
                      className="button"
                      style={{
                        display: "inline-block",
                        padding: "10px 20px",
                        fontSize: "16px",
                        color: "#fff",
                        background: "#007bff",
                        borderRadius: "5px",
                        textDecoration: "none",
                        transition: "background 0.3s ease",
                      }}
                      onMouseOver={(e) => (e.target.style.background = "#0056b3")}
                      onMouseOut={(e) => (e.target.style.background = "#007bff")}
                    >
                      <i className="fa fa-download"></i> Download Resume
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
