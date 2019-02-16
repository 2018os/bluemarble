import styled from "styled-components";

const Playerstate = styled.div `
    ${props=>props.location === 0 &&`
        position: relative; 
        bottom:13px;
    `}
    ${props=>props.location > 0 && props.location <10 &&`
    position: relative; 
    bottom:49px;
    `}
    ${props=>(props.location === 7 || props.location === 10 || props.location === 3) &&`
        position: relative; 
        bottom:17px;
    `}
    ${props=>props.location >= 11 && props.location <=20 &&`
        position: relative; 
        bottom:49px;
    `}
    ${props=>props.location >= 21 && props.location <=30 &&`
        position: relative; 
        bottom:41px;
    `}
    ${props=>props.location >= 31 && props.location <=40 &&`
        position: relative; 
        bottom:38px;
    `}

`


export default Playerstate;