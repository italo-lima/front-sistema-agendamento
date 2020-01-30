import styled from "styled-components"
import {darken} from "polished"

export const Wrapper = styled.div`
height: 100%;
background: #f5f5f5;
padding-top:60px;
display:flex;
align-items:center;
flex-direction:column;
`;

export const Content = styled.div`
width: 100%;
max-width: 420px;
text-align: center;
display: flex;
    
    form {
        display: flex;
        flex-wrap: wrap;
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

        span {
            color: #fb6f91;
            align-self: flex-start;
            margin: 0 0 10px;
            font-weight: bold;
        }

        button{
            height: 44px;
            margin: 5px 10px 0;
            background: ${darken(0.08, '#0095DA')};
            font-weight: bold;
            color: #000;
            border-radius: 4px;
            font-size: 20px;
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