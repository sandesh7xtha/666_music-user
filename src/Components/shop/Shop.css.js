import styled from "styled-components";

export const root = styled.div`
  margin-top: 15vh;
  // background: #e6e6e6;
  min-height: 100vh;
  display: flex;
`;
export const div = styled.div`
  display:flex;
`;

export const categories = styled.div`
  // background-color: red;

  width: 30%;
  padding-left: 2rem;
  padding-right: 2rem;
  // position: fixed;
`;

export const CategoryHeading = styled.div`
  // background-color:#d65c5c;
  background-color: #121212;
  color: white;

  padding-top: 1rem;
  padding-bottom: 1rem;
  margin: auto;
  padding-left: 1rem;
`;

export const categoriesSection = styled.div`


p{
    background-color:white;
    padding-top:0.5rem;
    padding-bottom: 0.5rem;   
    padding-left: 1rem;
    margin:auto; 
    // border-style: outset;
    position: relative;
    transition: all 1s ease;
    
    &:hover {
        // border-style: inset;
        background-color:rgb(94, 94, 94);
        color:white;
        padding-left: 5rem;
        margin-left: 20px;
        
      },

}

`;

export const productSection = styled.div`
  // width: 60%;
  // display: flex;
  // justify-content: space-around;
  padding-top: 2rem;
  // margin-left: 20rem;

  // @media (max-width: 1246px) {
  //     margin-left: 1rem;
  //     margin-right: 1rem;
  //   },
  // @media (max-width: 1440px) {
  //     margin-left: 10rem;
  //     margin-right: 10rem;
  //   },
`;

export const filterHeading = styled.div`
  // background-color:#d65c5c;
  background-color: #121212;
  color: white;

  padding-top: 1rem;
  padding-bottom: 1rem;
  margin: auto;
  padding-left: 1rem;
`;

export const filterSection = styled.div`
  margin-left: 0rem;
  p {
    margin-left: 1rem;
  }
`;

export const input = styled.div`

display: flex;
justify-content:space-evenly;
align-items:center;
// margin-left: -0.6rem;

  .iconSearch{
    height:2rem;
    width: 2rem;
    color: #121212;
    &:hover{
      color: rgb(94, 94, 94);

    }

  }

input[type=text]    {
    width: 20%;
},
`;

export const sortBy = styled.div`
  margin: 1rem;
`;
