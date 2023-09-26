"use client";

import styled from "styled-components";

const Wrapper = styled.section`
  width: 100vw;
  height: 100vh;
  background: #ffffff;
`;

function Hero() {
  return (
    <Wrapper className="mx-auto my-auto p-5 d-flex align-items-center justify-content-start">
      <div className="container-fluid py-5">
        <h1 className="display-5 fw-bold">Custom jumbotron</h1>
        <p className="col-md-8 fs-4">
          Using a series of utilities, you can create this jumbotron, just like
          the one in previous versions of Bootstrap. Check out the examples
          below for how you can remix and restyle it to your liking.
        </p>
        <button className="btn btn-primary btn-lg" type="button">
          Example button
        </button>
      </div>
    </Wrapper>
  );
}
export default Hero;
