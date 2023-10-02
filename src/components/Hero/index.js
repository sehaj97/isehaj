"use client";
import styled from "styled-components";
const NamedText = styled.span`
  background-image: linear-gradient(135deg, #bfbfbf 0%, #000000 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: #0000;
`;
function Hero() {
  return (
    <div className="container-fluid py-5">
      <h1 className="display-4 fw-bold animate__animated animate__fadeInLeft">
        Hi, My Name is <NamedText>Sehajpreet Singh.</NamedText>
      </h1>
      <h1
        className="display-5 fw-bold  animate__animated animate__fadeInLeft animate__slow mb-5"
        id="who"
      >
        The Unknown Software Developer.
      </h1>
      <a href="/#intro" class="btn-animated my-5">
        <span>Know More </span>
      </a>
    </div>
  );
}
export default Hero;
