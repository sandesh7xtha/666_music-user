import styled from "styled-components";

export const root = styled.div`
  margin-top: 13vh;
  // background: #e6e6e6;
  min-height: 100vh;

  display: flex;
`;

export const div = styled.div`
  margin-left: 13rem;
  min-height: 150vh;
`;

export const NavMenu = styled.div`
background-color: white;

width: 15%;
position: fixed;
margin-top:5rem;

p{
    background-color:white;
    padding-top:0.5rem;
    padding-bottom: 0.5rem;   
    padding-left: 1rem;
    margin:auto; 
    // border-style: outset;
    // border-color:transparent;
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

export const userName = styled.div`
  // background-color:#d65c5c;
  background-color: #121212;
  color: white;
  padding-top: 1rem;
  padding-bottom: 1rem;
  margin: auto;
  padding-left: 1rem;
`;

export const productSection = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-around;
  padding-top: 2rem;
  margin-left: 20rem;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem 0.5rem 0rem 0.5rem;
  // width: 15rem;
  // height: 15rem;
  background-color: white;
  border-style: solid;
  border-width: 0.1px;
  border-color: #cccccc;
  border-radius: 5px;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }

  ,
  .img {
    max-width: 100%;
    height: 100%;
  }
  ,
  .name {
    font-family: "Comic Sans MS", cursive, sans-serif;
    font-size: 15px;
    letter-spacing: 2px;
    word-spacing: 2px;
    color: #000000;
    font-weight: 400;
    text-decoration: none;
    font-style: normal;
    font-variant: normal;
    text-transform: none;
  }

  .price {
    font-family: "Comic Sans MS", cursive, sans-serif;
    font-size: 15px;
    letter-spacing: 2px;
    word-spacing: 2px;
    color: #d65c5c;
    font-weight: 400;
    text-decoration: none;
    font-style: normal;
    font-variant: normal;
    text-transform: none;
  }
`;

export const subGrid = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
`;
