import styled from 'styled-components';

const StyledCountry = styled.div`
  width: 9%;
  height: 10.8%;
  display: inline-block;
  font-size: 1rem;
  user-select: none;
  border: 1px solid black;
  background-color: black;
  ${props => props.id%10===0 && `
    background-color: white;
  `}
  ${props => props.id-10<1 && `
    background-color: white;
  `}
  ${props => props.id+10>100 && `
    background-color: white;
  `}
  ${props => props.id%10===9 && `
    background-color: white;
  `}
  `;

export default StyledCountry;