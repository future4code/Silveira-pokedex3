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
        font-size: 40px;
        font-weight: 700;
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
            height: 25px;
            width: 5vw;
            border: none;
            background-image: linear-gradient(to right, #f78ca0 0%, #f9748f 19%, #fd868c 60%, #fe9a8b 100%);
            border-radius: 10px;
        }
    }
`