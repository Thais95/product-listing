import styled from 'styled-components';

export const Card = styled.div`
    text-align: center;
    position: relative;
    width: 210px;
    padding: 5px;
    height: auto;
    margin-bottom: 20px;
    border-radius: 6px;
    border: 1px solid transparent;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.08);
    transition: 0.5s;
    overflow: hidden;
    &:hover {
        transform: scale(1.01);
        background-color: #e3e3e3;
        transition: 0.5s;
        box-shadow: 0px 15px 15px rgb(0, 91, 148, 0.15);
        border-color: #c4c4c4;
    }
`

export const Cover = styled.div`
    display: flex;
    justify-content: center;
    border-radius: 6px;
    transition: 1s;
    img {
        border-radius: 6px;
        box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.04);
        width: 200px;
        height: auto;
        background-color: white;
        object-fit: contain;
        object-position: center;
    }
`

export const Title = styled.h2`
    font-size: 1rem;
    color: var(--cor-de-texto);
    line-height: 1.75rem;
    font-weight: 600;
    margin-top: 10px;
    margin-bottom: 28px;
    padding: 10px 4px;
    cursor: default;
`

export const Subtitle = styled.p`
    font-weight: 600;
    color: var(--cor-de-texto);
    font-size: 0.8rem;
`

export const More = styled.span`
    background-color: #1c1c1c;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.9rem;
    font-weight: 500;
    border-bottom-right-radius: 6px;
    border-bottom-left-radius: 6px;
    width: 100%;
    height: 34px;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    transition: 0.5s;
    border: 1px solid black;
    cursor: pointer;
    &:hover {
        transition: 0.5s;
        font-size: 0.95rem;
        color: var(--cor-destaque);
    }
`