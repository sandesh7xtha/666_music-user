import styled from "styled-components";

export const root = styled.div`
  margin-top: 15vh;
  background: #e6e6e6;
  display: flex;
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
    border-style: outset;
    position: relative;
    transition: all 1s ease;
    
    &:hover {
        border-style: inset;
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

export const addSellForm = styled.div`
  margin-top: 5rem;
  margin-bottom: 2rem;
//   padding-bottom:1 rem;
  height: auto;

  justify-content: space-around;
  padding-top: 2rem;
  margin-left: 20rem;
  background-color: white;
  p {
    display: flex;
    justify-content: center;
  }
`;

export const part = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 3rem;
  margin-right: 3rem;
  margin-top: 1rem;
  align-items: center;

  .title {
    width: 30rem;
    margin-right: 3.7rem;
  }

  .Description {
    width: 30rem;
    height: 10rem;
    border-color: blue;
    z-index: -0;
    margin-right: 3.7rem;
  }
  .cropperDiv {
    // margin-left: 7.9rem;
    // margin-right: 7.9rem;
  }
  .category {
    margin-right: 19.9rem;
    width: 13.9rem;
  }
  .Price {
    margin-right: 19.9rem;
  }
  .UsedDuration {
    margin-right: 19.9rem;
  }
  .contactNumber {
    margin-right: 19.9rem;
  }
  .Email {
    margin-right: 19.9rem;
  }
  .location {
    margin-right: 19.9rem;
  }
  .addbutton {
    margin-left: 7.9rem;
    margin-bottom:1rem;
  }
`;
