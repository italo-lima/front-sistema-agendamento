import styled from "styled-components"
import {darken} from "polished"

export const Wrapper = styled.div`
height: 100%;
background: linear-gradient(-60deg, darken(0.08, #f5f5f5), #f5f5f5);
display: flex;
align-items: center;
justify-content: center;
`;

export const Content = styled.div`
width: 100%;
max-width: 490px;
text-align:center;

    h3 {
        display: none;
    }

    div {
        display: flex;
        justify-content: center;
        padding: 10px;

        p{
            font-size:28px;
            font-weight:bold;
        }
    }

    form {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        margin-top: 30px;

        div {
            display: flex;
            align-items:center;
            justify-content: space-between;
            padding: 10px;
        }

        input {
            background: rgba(0,0,0,.1);
            border: 0;
            border-radius: 4px;
            height: 44px;
            padding: 0 15px;
            color: #000;

            &::placeholder{
                color: rgba(0,0,0,.9)
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
            padding: 0px 20px;
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
            color: #000;
            margin-top: 25px;
            font-size: 18px;
            opacity: 0.8;

            &:hover{
                opacity: 1;
            }
        }
    }

    @media only screen and (min-width:150px) and (max-width:750px){
        margin-top: 160px;
        h3 {
            display: block;
        }
        div {
            padding: 0;

            img {
                  display: none;
            }
        }
        form {
            margin-top: 10px;

            div {
                flex-direction: column;
                padding: 0px 10px;

                input{
                    margin: 5px;
                }
            }

            button {
                margin-top: 5px;
            }
        
        a { 
            margin-top: 5px;
            padding: 10px;
        }
    }
    }
`