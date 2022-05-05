import styled from "styled-components";


// export const Title = styled.div`
// display: flex;
// `


export const ContainerMaster = styled.div`
display: grid;
grid-template-rows: 1fr 1fr 1fr 1fr; 
grid-template-columns: 1fr 1fr 1fr;
// grid-template: 
// "Photo1 Status Type"
// "Photo1 Status Moves"
// "Photo2 Status Moves" 
// "Photo2 Status Moves"  
// / 1fr 1fr 1fr;  
`
export const Photo1 = styled.div`
background-color: black;
padding: 20px;
grid-area: Photo1;
`

export const Photo2 = styled.div`
background-color: red;
padding: 20px;
grid-area: Photo2;
`

export const Stats = styled.div`
background-color: yellow;
padding: 20px;
grid-area: Stats;
`

export const Types = styled.div`
background-color: blue;
padding: 20px;
grid-area: Types;
`

export const Moves = styled.div`
background-color: green;
padding: 20px;
grid-area: Moves;
`