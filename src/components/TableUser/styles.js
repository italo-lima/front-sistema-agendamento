import styled from "styled-components"
import {darken} from "polished"

export const Content = styled.div`
width: 100%;
max-width: 315px;
text-align: center;

    div {
        padding: 10px;

        p{
            font-size:28px;
            font-weight:bold;
        }
    }

    form {
        display: flex;
        flex-direction: column;
        margin-top: 15px;
        margin-bottom: 15px;

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

        span {
            color: #fb6f91;
            align-self: flex-start;
            margin: 0 0 10px;
            font-weight: bold;
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