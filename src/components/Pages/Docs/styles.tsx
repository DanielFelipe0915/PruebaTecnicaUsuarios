import { styled } from "@mui/material";

export default styled('div')`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 20px;
  background-color: #21d4fd;
  background-image: linear-gradient(19deg, #21d4fd 0%, #b721ff 100%);
`;

export const ChartComponent= styled('div')`
z-index: 1;

`

export const UserComponent= styled('div')`
z-index: 2;

`
export const UserBox= styled('div')`
border:solid black 1px;
margin: 1rem ;
border-radius: 20px;
display: flex;
flex-direction: row;
align-items: center;
background-color: aliceblue;
padding: 1rem;
&:hover{
background-color:rgba(145, 167, 145, 0.562) ;
}
`

export const UserImage= styled('img')`
margin-right: 1rem;
width:80px;
border-radius: 100%;
transform: scale(3px);


`

export const UserDetails= styled('div')`
display: flex;
flex-direction: column;

`