import styled from "styled-components";

export const ContainerCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid black;
    width: 300px;
    height: 350px;
    padding: 10px;
    gap: 20px;
    justify-content: center;
    p{
        margin: 0;
        font-size: 30px;
    }
    img{
        width: 200px;
        height: 200px;
    }
    div{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 30px;
        align-items: baseline;
        button{
            height: 20px;
            width: fit-content;
        }
    }
`