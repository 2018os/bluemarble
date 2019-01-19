import styled from 'styled-components';

const StyledPlayer = styled.div`
  position: absolute;
  background-color: aqua;
  margin-left: 3%;
  margin-top: 2%;
  ${props => props.number && `
    margin-left: ${props.number * 3}%;
  `}
`;

export default StyledPlayer;