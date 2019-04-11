import styled from 'styled-components';

export const ButtonContainer = styled.button`
    text-transform: capitalize;
    font-size: 1.4rem;
    background: transparent;
    border: 0.05rem solid var(--lightBlue);
    border-color:${props => props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
    color:${props => props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
    color:${props => props.disabled ? "var(--lightGrey)" : ""};
    border-color: ${props => props.disabled? "var(--mainGrey)" : ""};
    border-radius: 0.5rem;
    padding: 0.2rem 0.5rem;
    cursor: pointer;
    margin: 0.2rem 0.5rem 0.2rem 0;
    transition: all .5s ease;
    &:hover{
        background: ${props => props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
        background: ${props => props.disabled ? "var(--mainGrey)" : ""};
        color:${props => props.disabled ? "var(--lightGrey)" : "var(--mainBlue)"};

    }
    &:focus{
        outline:none;
    }
`
