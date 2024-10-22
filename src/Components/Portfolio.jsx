/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/wd.jpg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Face recognition based door lock system",
    description:
      "Improved security with face anti-spoofing and remote access control via Blynk, including notifications with photo for authorized access.",
    url: "https://drive.google.com/drive/folders/1UB1CykfHIW4haVwj551ai7A1dgIPo85_",
  },
  {
    title: "Marketing agency website",
    description:
      "Developed a dynamic homepage for a digital marketing agency, featuring a web application built with Express.js.",
    url: "https://github.com/gAkhil-454/Marketing-agency-website",
  },
  {
    title: "Your HR",
    description:
      "YourHR is a job search platform designed to connect job seekers with opportunities tailored to their skills and preferences.",
    url: "https://github.com/gAkhil-454/YourHR",
  },
  {
    title: "The Simon Game",
    description:
      "Created an engaging Simon game with HTML, CSS, and JavaScript, implementing game logic efficiently with jQuery for enhanced interactivity and user experience.",
    url: "https://github.com/gAkhil-454/Simon-Game",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
