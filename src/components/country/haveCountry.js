import styled from 'styled-components';

const HaveCountry = styled.div`
    ${props => props.owner === 'player0' &&`
        background-color: burlywood;
        width: 10px;
        height: 10px;
        margin: auto;
        margin-top: 3px;
    `}

    ${props => props.owner === 'player1' &&`
        background-color: red;
        width: 10px;
        height: 10px;
        margin: auto;
        margin-top: 3px;    
    `}

    ${props => props.owner === 'player2' &&`
        background-color: #a2d3ff;
        width: 10px;
        height: 10px;
        margin: auto;
        margin-top: 3px;    
    `}

    ${props => props.owner === 'player3' &&`
        background-color: yellow;
        width: 10px;
        height: 10px;
        margin: auto;
        margin-top: 3px;
    `}
`

export default HaveCountry;