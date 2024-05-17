import styled from "styled-components";

export const Shop = styled.div`

`

export const shopTitle = styled.div`
    margin-top: 100px;
    text-align: center;
    font-size: 40px;

    @media (max-width: 700px) {
        font-size: 20px;
        margin-top: 10px;
    }
`

export const H1 = styled.h1`

`

export const Products = styled.div`
    width: 100%;
    height: auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    place-items: center;

    @media (max-width: 700px) {
        width: 100vw;
        grid-template-columns: 1fr;
        margin-top: 10px;
    } 
`

// Product style

export const product = styled.div`
    border-radius: 15px;
    width: 300px;
    height: 350px;
    margin: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &:hover {
        transition: 0.3s ease-in;
        cursor: pointer;
    }

    @media (max-width: 700px) {
        width: 100vw;
        margin: 0;
    } 
`

export const img = styled.img`
    width: 400px;

    @media (max-width: 700px) {
        width: 200px;
    }
`

export const description = styled.div`
    text-align: center;
`

export const p = styled.p`

`

export const button = styled.button`
    background-color: transparent;
    border: 2px solid rgb(19, 19, 19);
    min-width: 100px;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 5px;
    padding-bottom: 5px;
    border-radius: 15px;

    &:hover {
        background-color: rgb(19, 19, 19);
        color: white;
        cursor: pointer;
    }
`