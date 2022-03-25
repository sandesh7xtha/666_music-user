import styled from "styled-components";

export const root = styled.div`
  margin-top: 15vh;
  // background: #e6e6e6;
`;

export const cartBox = styled.div`


// height: 85vh;
margin-left: 20rem;
margin-right: 20rem;
margin-top: 5rem;
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
// height: 40vh;
border-radius: 5px;
// padding: 1rem;
margin-bottom:1rem; 
box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;


img{
    width: 100%;
    
},

  
`;

export const head = styled.div`
  // background-color:#d65c5c;
  background-color: #121212;

  height: 9vh;
  display: flex;
  height: 5vh;
  align-items: center;
  justify-content: space-around;
  // margin-left:5rem;
  // alignContent: center;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap:0.2rem;
`;

export const Item = styled.div`
  display: flex;
  //   flex-direction:column;
  padding: 0.5rem;
  // width: 15rem;
  // height: 15rem;
  background-color: white;
  // border-radius:5px;
  border-style: none none solid none;

  img {
    width: 30%;
    height: 100%;
  }
  ,
  price {
  }
`;
export const detail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  name {
    margin-left: 1rem;
  }
  dis {
    margin-left: 1rem;
    margin-top: -5rem;
  }
`;
export const quantity = styled.div`
  // background-color:pink;
  padding-right: 2.5rem;
  padding-left: 2.5rem;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  quantity {
    margin-left: 1.5rem;
  }
`;
export const price = styled.div`
  // background-color:orange;

  width: 10rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
