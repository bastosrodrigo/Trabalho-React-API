import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    background-color: ${({theme}) => theme.colors.buttonsAndLinks};
    width: 100%;
    height: 100%;
    border-radius: 8px;
    &:hover{
        cursor:pointer;
        filter: brightness(0.9);
    }
`

export const ButtonTitle = styled.p`
    font-weight: 600;
    color: ${({theme}) => theme.colors.Titles};
`
export const ButtonIcon = styled(FontAwesomeIcon)`
    height: 60%;
`