import styled from "styled-components"
import {darken} from "polished"

export const Wrapper = styled.div`
height: 100%;
padding-top:90px;
display:flex;
align-items:center;
justify-content:space-between;
`;

export const Content = styled.div`
width: 100%;
max-width: 200px;
text-align: center;

    div {
        padding: 5px;

        p{
            font-size:16px;
            font-weight:bold;
        }
    }

    form {
        display: flex;
        flex-direction: column;
        margin-top: 15px;
        margin-bottom: 15px;
        width: 100%;

        p{
            font-size:16px;
            font-weight:bold;
        }

        span {
            color: #fb6f91;
            align-self: flex-start;
            margin: 0 0 10px;
            font-weight: bold;
        }

        select {
            width: 100%;
        }

        input {
            background: rgba(0,0,0,.1);
            border: 0;
            border-radius: 4px;
            height: 44px;
            padding: 0 15px;
            color: #000;
            margin: 0 0 10px;

            &::placeholder{
                color: rgba(0,0,0,.6)
            }
        }

        label {
            margin: 0;
        }

        button{
            height: 44px;
            margin: 5px 0 0;
            background: ${darken(0.08, '#0095DA')};
            font-weight: bold;
            color: #fff;
            border-radius: 4px;
            font-size: 16px;
            border: none;
            transition: background 0.8s;

            &:hover {
                background: ${darken(0.13, '#0095DA')}
            }
        }

        a {
            color: #fff;
            margin-top: 15px;
            font-size: 15px;
            opacity: 0.8;

            &:hover{
                opacity: 1;
            }
        }
    }
`