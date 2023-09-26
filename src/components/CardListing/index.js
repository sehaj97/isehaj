"use client";

import styled from "styled-components";
import Card from "../Card/index.js";

const Wrapper = styled.section`
  width: 100vw;
  height: 100vh;
  background: #ffffff;
`;
function CardListing() {
  return (
    <Wrapper className="mx-auto my-auto p-5 d-flex flex-col align-items-center justify-content-start">
      <h1>Services</h1>
      <Wrapper className="row d-flex space-around align-items-center justify-content-start px-5">
        <div className="col">
          <Card />
        </div>
        <div className="col">
          <Card />
        </div>
        <div className="col">
          <Card />
        </div>
      </Wrapper>
    </Wrapper>
  );
}
export default CardListing;
