import styled from "styled-components"

export const Menu = styled.div`
    height:100%;
    padding-top:15px;

    @media only screen and (min-width:150px) and (max-width:750px){
       display:flex;
       justify-content:space-around;
    }
`;

export const BoxInfo = styled.div`
    padding-top:15px;
    display: flex;
    justify-content: space-between;

    @media only screen and (min-width:150px) and (max-width:750px){
        flex-wrap: wrap;
    }
`;

export const Graph = styled.div`
background-color:#fff;
height:100%;
width:100%;
padding:20px;
height: 40vh;
display:flex;
justify-content:space-around;

select {
    height: 30px;
}
`;