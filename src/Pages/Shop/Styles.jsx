import styled from "styled-components";

export const Shop = styled.div`

`

export const shopTitle = styled.div`
    margin-top: 100px;
    text-align: center;
    font-size: 40px;
`

export const H1 = styled.h1`

`

export const Products = styled.div`
    width: 100%;
    height: auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    place-items: center;
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
`

export const img = styled.img`
    width: 400px;
`

export const description = styled.div`
    text-align: center;
`

export const p = styled.p`

`

export const button = styled.button`
    
`