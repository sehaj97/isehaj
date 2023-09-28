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
        className="display-5 fw-bold animate__animated animate__pulse animate__infinite animate__slower"
        id="who"
      >
        &nbsp; The Unknown Software Developer
      </h1>
    </div>
  );
}
export default Hero;
