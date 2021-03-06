import styled from "styled-components"

export const Menu = styled.div`
    height:100%;
    padding-top:15px;

    @media only screen and (min-width:150px) and (max-width:750px){
       display:flex;
       flex-direction:column;
       padding-left: calc(100% - 70%)
    }
`;

export const BoxInfo = styled.div`
    padding-top:15px;
    display: flex;
    justify-content: space-around;

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
flex-direction: column;

select {
    height: 30px;
}
`;

export const NoneDesktop = styled.div`
    display:none;

    @media only screen and (min-width:150px) and (max-width:750px){
        display:block;
    }
`;

export const NoneMobile = styled.div`
    display:block;

    @media only screen and (min-width:150px) and (max-width:750px){
        display:none;
    }
`;