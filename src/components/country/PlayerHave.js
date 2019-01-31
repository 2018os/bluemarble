import styled from 'styled-components';

const PlayerHave = styled.div`
    ${props => props.owner === 'player0' &&`
        background-color: red;
    `}

    ${props => props.owner === 'player1' &&`
        background-color: yellow;    
    `}

    ${props => props.owner === 'player2' &&`
        background-color: green;
  
    `}

    ${props => props.owner === 'player3' &&`
        background-color: blue;  
    `}
`

export default PlayerHave;