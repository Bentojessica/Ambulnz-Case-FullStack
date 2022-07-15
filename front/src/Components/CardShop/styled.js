import styled from 'styled-components'

export const ShopCartPage = styled.div `
    border-radius: 8px;
    background-color: white;
    box-shadow: 4px 4px 4px gray;
    height: vh;
    width: 25vw;
    opacity: 0;
    top: 40px; left: 40px;
    transition: opacity 1s, transform 1s;
    display:flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 10px;
`

export const OrdersComponent = styled.div`
    background-color: whitesmoke;
    width: 15vw;
    border-radius: 8px;
    opacity: 0;
    transition: opacity 1s, transform 1s;
`
export const ContainerOrderCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 4px;
    position: sticky;
    box-shadow: 1px 1px 1px  grey;
    width: 15vw;
`


