import React from "react"
import Banner from "../components/Banner"
import imgAbout from "../assets/Image-Banner-about.png";
import Collapse from "../components/Collapse";
import AboutList from "../data/about.json";
import "../scss/collapse.scss"

function About() {
  return (
    <main>
    <Banner src={imgAbout} alt="Paysage de montagne eneigé" />
    {AboutList.map(list => (
      <Collapse
      key= {list.id}
      title={list.title}
      description={list.description}
      />
    ))}
  </main>
);
}

export default About