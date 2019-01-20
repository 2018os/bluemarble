import styled from 'styled-components';

const width = 50;

const StyledPlayer = styled.div`
  width: ${width}px;
  height: 30px;
  position: absolute;
  background-color: aqua;
  text-align: center;
  border: 1px solid black;
  margin-left: 2%;
  margin-top: 1%;
  ${props => props.number && `
    margin-left: ${width * 2 * props.number - props.number * 4}px;
  `}
`;

export default StyledPlayer;