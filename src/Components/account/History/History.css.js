import styled from "styled-components";

export const root = styled.div`
  margin-top: 13vh;
  // background: #e6e6e6;
  display: flex;
  min-height: 100vh;

  // height:30vh;
`;

export const div = styled.div`
  margin-left: 13rem;
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

export const historyMainDiv = styled.div`
  margin-top: 5rem;
  margin-bottom: 2rem;
  //   padding-bottom:1 rem;
  height: auto;

  justify-content: space-around;
  padding-top: 2rem;
  padding-bottom: 2rem;

  margin-left: 20rem;
  background-color: white;
  // border-style: solid;
  // border-width: 0.1px;
  // border-color: #cccccc;
  // border-radius: 25px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);

  p {
    display: flex;
    justify-content: center;
  }
`;
export const historyDataDiv = styled.div`
  // background-color: red;
  margin-left: 2rem;
  margin-right: 2rem;
  padding: 0.2rem;

  width: 43rem;
  border-style: solid;
  border-width: 0.1px;
  border-color: #cccccc;
  border-radius: 5px;
  // box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  &:hover {
    background-color: #e6e6e6;
  }

  .info {
    display: flex;
    justify-content: space-evenly;
  }
`;
