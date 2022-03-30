import styled from "styled-components";

export const root = styled.div`
  padding-top: 15vh;
  // background: #e6e6e6;
`;

export const post = styled.div`


margin-left: 30rem;
margin-right: 30rem;
border-radius: 6px;
padding-top: 1rem;
@media (max-width: 1246px) {
    margin-left: 1rem;
    margin-right: 1rem;
  },
@media (max-width: 1440px) {
    margin-left: 10rem;
    margin-right: 10rem;
  },


`;

export const content = styled.div`

background-color: white;
border-radius: 5px;
padding: 1rem;
margin-bottom:1rem; 
box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;

img{
    width: 100%;
    
},

  
`;

export const titleDateDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 425px) {
    flex-direction: column;
    align-items: normal;
  }

  ,
  .sponsorDIV {
    margin-top: -0.4rem;
    margin-left: 0.2rem;

    font-family: "Comic Sans MS", cursive, sans-serif;
    font-size: 12px;
    letter-spacing: 1.2px;
    word-spacing: 0.6px;
    color: #000000;
    font-weight: 400;
    text-decoration: none solid rgb(68, 68, 68);
    font-style: italic;
    font-variant: normal;
    text-transform: capitalize;
  }
`;

export const title = styled.div`
  font-family: "Open Sans", sans-serif;
  font-weight: 600;
  font-size: 3rem;

  font-family: "Comic Sans MS", cursive, sans-serif;
  letter-spacing: 2px;
  word-spacing: -3.4px;
  color: #000000;
  font-weight: 700;
  text-decoration: none solid rgb(68, 68, 68);
  font-style: normal;
  font-variant: normal;
  text-transform: capitalize;
`;

export const date = styled.div`
  // font-family: 'Open Sans', sans-serif;
  font-size: 0.8rem;
`;

export const des = styled.div`
    font-family: 'Open Sans', sans-serif;
    margin-top: -0.5rem;
    margin-left: 0.5rem;
    margin-bottom: 1rem;
    
    font-family: "Comic Sans MS", cursive, sans-serif;
    font-size: 15px;
    letter-spacing: 0.2px;
    word-spacing: 1.4px;
    color: #000000;
    font-weight: 400;
    text-decoration: none;
    font-style: normal;
    font-variant: normal;
    text-transform: none;

    button{
          color: #d65c5c;
          font-weight: bold;
          border: none;
          background: none;
          &:hover {
            text-decoration: underline;
          },



    },
   
   

`;
