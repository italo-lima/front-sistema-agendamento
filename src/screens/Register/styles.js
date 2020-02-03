import styled from "styled-components"
import {darken} from "polished"

export const Wrapper = styled.div`
height: 100%;
width: 100%;
background: #f5f5f5;
padding-top:90px;
display:flex;

@media only screen and (min-width:150px) and (max-width:750px){
        display:flex;
        flex-direction:column;
        padding-top:70px;
    }
`;

export const Content = styled.div`
width: 100%;
max-width: 260px;
text-align: center;
display: flex;
flex-direction:column;
background-color: #fff;
    
    form {
        margin-top: 30px;

        input {
            background: rgba(0,0,0,.1);
            border: 0;
            border-radius: 4px;
            height: 44px;
            padding: 0 15px;
            color: #000;
            margin: 10px;
            max-width: 190px;

            &::placeholder{
                color: rgba(000,000,000,.7)
            }
        }

        select {
            background: rgba(0,0,0,.1);
            height:44px;
            padding: 0 15px;
            color: #000;
            margin: 10px;
            max-width: 190px;
            width:90%;
            border:none;
            border-radius: 4px;
        }

        span {
            color: #fb6f91;
            align-self: flex-start;
            margin: 0 0 10px;
            font-weight: bold;
        }

        button{
            height: 44px;
            margin: 15px 10px 0;
            background: ${darken(0.08, '#0095DA')};
            font-weight: bold;
            color: #fff;
            border-radius: 4px;
            font-size: 16px;
            padding:10px 15px;
            border: none;
            transition: background 0.8s;

            &:hover {
                background: ${darken(0.13, '#0095DA')}
            }
        }

        a {
            color: #000;
            margin-top: 15px;
            font-size: 15px;
            opacity: 0.8;

            &:hover{
                opacity: 1;
            }
        }
    }
`

export const CardUser = styled.div`
    display: flex;

    div {
        display: flex;
        align-items:center;
        padding: 10px;

        svg{
            margin-right: 10px;
        }
    }
`;

export const CardInfo = styled.div`
    padding: 5px 10px; 

    p {
        padding: 5px;
    }
`;

export const Table = styled.table`
    width:100%;
    margin-top: 20px;

    @media only screen and (min-width:150px) and (max-width:750px){
       
            display:none;
        
    }
`;

export const NoneDesktop = styled.div`
    display:none !important;
    display:flex;
    align-items:center;

    @media only screen and (min-width:150px) and (max-width:750px){
        display:block !important;
        padding-left: calc(100% - 80%);
        overflow-x:auto
    }
`;

export const NoneMobile = styled.div`
    display:block ;
    width:100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;

    @media only screen and (min-width:150px) and (max-width:750px){
        display:none;
    }
`;