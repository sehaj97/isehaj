"use client";

import Link from "next/link";
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
        className="display-5 fw-bold  animate__animated animate__fadeInLeft animate__slow"
        id="who"
      >
        The Unknown Software Developer
      </h1>
      <Link href="/#intro" passHref>
        <div class="btn-animated">
          <span>Know More </span>
        </div>
      </Link>
    </div>
  );
}
export default Hero;
