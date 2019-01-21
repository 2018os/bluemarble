import styled from 'styled-components';

const StyledCountry = styled.div`
  width: 9%;
  height: 70px;
  display: inline-flex;
  // font-size: 1rem;
  user-select: none;
  border: 1px solid green;
  background-color: green;
  color: green;
  ${props => props.id%10===0 && `
    background-color: white;
    border: 1px solid black;
    color: black;
  `}

  ${props => props.id-10<1 && `
    background-color: white;
    border: 1px solid black;
    color: black;
  `}

  ${props => props.id+10>100 && `
    background-color: white;
    border: 1px solid black;
    color: black;
  `}
  
  ${props => props.id%10===9 && `
    background-color: white;
    border: 1px solid black;
    color: black;
  `}
  `;

export default StyledCountry;