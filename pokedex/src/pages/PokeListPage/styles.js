import styled from "styled-components"

export const StyledList = styled.div`
text-align: center;
border: 5px solid  #FECB05;
background-color: #c9cdde;
padding:2rem;
padding-bottom: 15rem;
font-family: Arial, Helvetica, sans-serif;
color: #1F356B;
margin: 0;
box-sizing: border-box;

span {
  font-weight: bold; 
}

button {
  margin: 9px;
  background-color: #13aa52;
  border: 1px solid #13aa52;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, .1) 0 2px 4px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  font-family: "Akzidenz Grotesk BQ Medium", -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 1rem;
  font-weight: 400;
  outline: none;
  outline: 0;
  padding: 1rem 1rem;
  text-align: center;
  transform: translateY(0);
  transition: transform 150ms, box-shadow 150ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

button:hover {
  box-shadow: rgba(0, 0, 0, .15) 0 3px 9px 0;
  transform: translateY(-2px);
}

@media (min-width: 768px) {
  button {
    padding: 1rem 1rem;
  }
}

div{
justify-content: center;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  padding: 0px 2rem 0px 2rem;
 
}

@media screen and (min-device-width: 320px) and (max-device-width: 480px){
div{
  grid-template-columns: 1fr;
}
}

`