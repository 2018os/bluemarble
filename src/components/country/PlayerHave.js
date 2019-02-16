import styled from 'styled-components';

const PlayerHave = styled.div`
    ${props => props.owner === 'player0' &&`
        background-color: burlywood;
    `}

    ${props => props.owner === 'player1' &&`
        background-color: red;    
    `}

    ${props => props.owner === 'player2' &&`
        background-color: #a2d3ff;
  
    `}

    ${props => props.owner === 'player3' &&`
        background-color: yellow;  
    `}
`

export default PlayerHave;