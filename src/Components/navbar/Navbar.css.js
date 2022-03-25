import styled from "styled-components";

export const Main = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 6;
`;
export const Root = styled.div`
// background-color: #d65c5c;
background-color: #121212;
#000000
height: 9vh;
display: flex;


justify-content: space-between; 
align-items:center;

// border: 2px solid black;

// border-radius: 50px 5px 50px 5px;



.mainLogo{
    margin-left:13rem;
    height:3rem;
    animation-name: spin;
    animation-duration: 5000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear; 

  }
  
  @keyframes spin {
      from {
          transform:rotate(0deg);
      }
      to {
          transform:rotate(360deg);
      }

    @media (max-width: 425px) {
      height:2rem;
      margin-left:1rem;
      
    },
},


.bandLogo{
  height:3.5rem;
  margin-bottom:-0.1rem;
 

}


},


`;
export const NavMenu = styled.div`
display: flex;
align-items: center;
padding-bottom: 0.5rem;

// margin-right:100rem; 

  @media (max-width: 425px) {
    margin-right:0.1rem; 
},

.searchBar{
  height:2rem;
  @media (max-width: 425px) {
    // margin-right:1rem;
    // height:2.7rem;
    
},
},

.iconNotify{
  color:white;
  margin-left: 1.5rem;
  
  @media (max-width: 425px) {
   font-size: 1.5rem;  
   
 },
},

.iconCart{
  color:white;
  margin-left: 1.5rem;
  @media (max-width: 425px) {
    font-size: 1.5rem;   
  },
},


p{
    // font-size:1.5rem;
    margin-left: 1.5rem;
    margin-right:7.5rem;
    margin-top: 0.6rem;
    color: white;
    @media (max-width: 425px) {
      font-size: 1rem;
      margin-left: 0.5rem;
      margin-right: 0.5rem;
      
    },
},



`;
export const Search = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  // .searchBar{
  //   ::placeholder {
  //     color: red;
  //     opacity: 1; /* Firefox */
  //   }
  // }
`;
export const SearchIconWrapper = styled.div``;

export const SubNavbar = styled.div`
  height: 6vh;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
    rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
`;

export const SubnavMenuItem = styled.div`

display: flex;
align-items: center;
justify-content: center;
margin-left:5rem;
// align-content: center;


p{
  
    margin-right:2rem;
    padding: 0.5rem;
    color: black; 
    &:hover {
        color: white; 
        background-color: #121212;
        border-radius: 5px;
        
      },
},





`;
