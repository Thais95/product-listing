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
    transition: 1s;
    overflow: hidden;
    &:hover {
        transform: translateY(-5px);
        background-color: #e3e3e3;
        transition: 1s;
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
    font-weight: 600;
    margin-top: 10px;
    margin-bottom: 32px;
    padding: 10px 4px;
    cursor: default;
`
export const More = styled.span`
    font-family: 'Source Sans Pro', sans-serif;
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
    transition: 0.2s;
    border: 1px solid black;
    cursor: pointer;
    &:hover {
        transition: 0.2s;
        color: var(--cor-destaque);
        background-color: #101010;
    }
`

export const ModalContent = styled.div`
    position: "absolute";
    margin: 0 auto;
    background-color: white;
    width: 300px;
    height: auto;
    border: "none";
    border-radius: "5px";
    text-align: "center";
    box-shadow: 20;
    display: "flex";
    flex-direction: row;
    justify-content: "center";
    align-items: "center";
    &:hover {
        border: "none"
    };
    &:active {
        border: "none"
    };
    img {
        border: "none";
        width: "100px";
        object-fit: cover;
        &:hover {
            border: "none";
        };
        &:active {
            border: "none";
        }
    }
`

export const ModalImage = styled.img`
    margin-left: -60px;
    width: 200px;
    height: 400px;
    object-fit: cover;
`

export const ModalText = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 240px;
`

export const ModalTitle = styled.h1`
    font-family: 'Source Sans Pro', sans-serif;
    text-align: left;
    font-size: 2.2rem;
    color: var(--cor-destaque);
    margin-bottom: 20px;
    cursor: default;
`
export const Subtitle = styled.h4`
    font-family: 'Source Sans Pro', sans-serif;
    text-align: left;
    font-size: 1.3rem;
    color: var(--cor-de-texto);
    cursor: default;
`