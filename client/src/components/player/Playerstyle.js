import styled from "styled-components";

const Playerstate = styled.div`
    ${props =>
      props.userid === 0 &&
      `
    background-color: red;
    `}
    ${props =>
      props.userid === 1 &&
      `
    background-color: yellow;
    `}
    ${props =>
      props.userid === 2 &&
      `
    background-color: green;
    `}
    ${props =>
      props.userid === 3 &&
      `
    background-color: blue;
    `}
`;

export default Playerstate;
