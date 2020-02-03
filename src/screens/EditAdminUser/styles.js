import styled from "styled-components"

export const Wrapper = styled.div`
height: 100%;
background: #f5f5f5;
padding-top:60px;
display:flex;
align-items:center;
flex-direction:column;
    h4 {
        color: #000;
    }
`;

export const NoneDesktop = styled.div`
    display:none !important;
    display:flex;
    align-items:center;
    flex-direction:column;

    @media only screen and (min-width:150px) and (max-width:750px){
        display:block !important;
    }
`;

export const NoneMobile = styled.div`
    display:block !important;
    display:flex !important;
    align-items:center !important;
    flex-direction:column !important;
    width:100%;

    select{
        max-width:180px;
    }

    @media only screen and (min-width:150px) and (max-width:750px){
        display:none !important;
    }
`;