import styled from "styled-components";

export const cart = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const h1 = styled.h1`
    margin-top: 10px;
`

export const cartItems = styled.div`
`
export const checkout = styled.div`
    button {
        width: 150px;
        height: 56px;
        background-color: rgb(19, 19, 19);
        color: white;
        border: none;
        border-radius: 8px;
        margin: 10px;
        cursor: pointer;
    }
`

// CartItem

export const cartItem = styled.div`
  width: 700px;
  height: 250px;
  display: flex;
  align-items: center;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
  border-radius: 25px;
  margin: 30px;

    img {
        width: 200px;
    }

    @media (max-width: 700px) {
        width: 90vw;
        height: 350px;
        margin-top: 10px;
    }
`

export const description = styled.div`
    display: flex;
    align-items: start;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    font-size: 30px;
    gap: 30px;

    @media (max-width: 700px) {
        width: 50%;
    }
`

export const countHandler = styled.div`
    input {
        width: 40px;
        text-align: center;
        font-weight: bolder; 
    }
`
