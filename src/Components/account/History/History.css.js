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