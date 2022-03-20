import styled from "styled-components";

export const root = styled.div`
  margin-top: 15vh;
  background: #e6e6e6;
  display: flex;
`;

export const div = styled.div`
  margin-left: 13rem;
`;

export const ProductDetail = styled.div`
  margin-top: 4rem;
  width: 66.5rem;
  background-color: white;
  display: flex;

`;
export const imgDiv = styled.div`
  // background:blue;
  height: 27rem;
  width: 27rem;
  display: flex;
  justify-content: center;
  img {
    margin: 0.5rem;
  }
`;

export const detail = styled.div`
  margin-top: -3rem;
  .title {
    font-family: Palatino Linotype;
    font-size: 2.5em;
  }
  .price {
    font-family: Palatino Linotype;
    font-size: 1.5em;
    color: #cf1313;
    margin-left: 2rem;
    margin-top: -1rem;
  }
  .usedDuration {
    font-family: Palatino Linotype;
    font-size: 1.5em;
    margin-left: 2rem;
  }
  .contact {
    font-size: 1.5em;
    font-family: Palatino Linotype;
    margin-left: 2rem;
  }
  .email {
    font-size: 1.5em;
    font-family: Palatino Linotype;
    margin-left: 2rem;
  }
  .location {
    font-size: 1.5em;
    font-family: Palatino Linotype;
    margin-left: 2rem;
  }
`;

export const productInfo = styled.div`
  margin-top: 1rem;
  // height: 52rem;
  width: 66.5rem;
  padding-top: 1rem;
  padding-bottom: 1rem;

  background-color: white;

  p {
    margin-left: 1rem;
    font-family: Palatino Linotype;
    font-size: 1em;
  }
`;

export const comment = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
  width: 66.5rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  background-color: white;

  p {
    margin-left: 1rem;
    font-family: Palatino Linotype;
    font-size: 1em;
  }
  .commmentDiv {
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
    margin-right: 1rem;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 2rem;
`;

export const item = styled.div`
  // display: flex;
  // padding: 0.5rem;
  // width: 15rem;
  // height: 15rem;
  // background-color: blue;
  margin-top:"-6rem"
  justify-content: space-evenly;

  `;
