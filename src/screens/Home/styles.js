import styled,{css, keyframes} from "styled-components"

export const Welcome = styled.div`
    padding-left: 45px;

    h1{
        color: #fafafa;
        font-size: 32px;
        font-weight: bold;
    }

    p {
        padding-top: 15px;
        color: #fafafa;
        font-size: 24px;
        font-style: italic;
    }

    @media only screen and (min-width:150px) and (max-width:750px){
        padding-left: 25px;
        h1{
            color: #fafafa;
            font-size: 22px;
        }

        p {
            padding-top: 10px;
            font-size: 16px;
        }
    }
`;

export const Agender = styled.div`
    display:flex;
    flex-direction: column;
    align-items:center;

    h2 {
        font-size: 32px;
    }

    span {
        padding: 10px;
        font-style: italic;
        font-size: 24px;
    }

    button{
        margin-top: 30px;
        border:none;
        border-radius: 10px;
        padding: 15px;
        background-color: transparent;
        border: 1px solid #fff;
        transition: background 1.0s;
        
        &:hover{
            background-color: rgba(238,238,238, 0.2);
        }

        p{
            padding: 0;
            font-size: 22px;
            color: #fff;
            margin-bottom:0px;
        }
    }

    @media only screen and (min-width:150px) and (max-width:750px){
        h2 {
            text-align:center;
            font-size: 22px;
        }
        
        span {
            padding: 5px;
            font-size: 20px;
        }

        p {
            padding-top: 10px;
            font-size: 16px;
        }
    }
`;

export const About = styled.section`
    display:flex;
    align-items: center;
    flex-direction: column;
    
    
    h1 {
        margin-top: 30px;
        text-align: center;
        font-size: 32px;
    }

    div {
        width: 100%;
        max-width: 980px;
        display:flex;
        padding-top: 15px;

        div {
            flex-direction: column;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
            p{  
                font-style:italic;
                font-weight: bold;
                padding: 10px;
                text-align: justify;
            }
        }        
    }

    @media only screen and (min-width:150px) and (max-width:750px){
        h1 {
            font-size: 26px;
        }
        div {
            padding-top: 0px;
            flex-direction:column;
        }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
    }

    @media only screen and (min-width:750px) and (max-width:1100px){
        padding-right: 0px;

        div {

            div {
                padding-right: 10px;
            }
            
        }
    }

`;

export const LogoSobre = styled.div`
    display:flex;
    justify-content:center;
    align-items: center;
    max-width: 380px !important;
    padding-right: 30px;

    img {
            height: 230px;
            width: 230px;
        }

    @media only screen and (min-width:150px) and (max-width:750px){
        padding-right: 0px;
        img {
            height: 100px;
            width: 115px;
        }
    }
`;


export const KeyboardArrowUp = styled.div`
    position:fixed;
    right:0;
    bottom:0;
    margin: 10px;
    border-radius:50%;
    background-color:#ED1C24;
    z-index: 2;
    
    @media only screen and (min-width:150px) and (max-width:750px){
        right:10px;
        bottom:5px;
        margin: 0px;
        button {
            padding: 5px;
        }
    }
`;

export const ButtonFixed = styled.div`
    position:fixed;
    left:0;
    bottom:0;
    margin: 10px;
    z-index: 2;

    button {
        padding: 15px;
        background-color: #76ff03;
        border: none;
        color: #fff;
        border-radius: 10px;
        transition: background 0.6s;
        
        &:hover{
            background-color: #357a38;
        }
    }
    
    @media only screen and (min-width:150px) and (max-width:750px){
        left:10px;
        bottom:5px;
        margin: 0px;
        button {
            padding: 5px;
        }
    }
`;

export const Instructions = styled.section`
    display:flex;
    align-items: center;
    flex-direction: column;

    h1 {
            color:#fff;
            margin-top: 30px;
            text-align: center;
            font-size: 32px;
        }
    
    div {
    width: 100%;
    max-width: 980px;
    padding-top: 15px;

        p{  
            font-style:italic;
            font-weight: bold;
            padding: 10px;
            color: #fff;
            text-align: justify;
        }        
    }
`;

export const Equip = styled.section`
    background-color:#fff;
    display:flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    padding-bottom: 30px;

    h1 {
        color:#000;
        margin-top: 30px;
        text-align: center;
        font-size: 32px;
        }

    div {
        width: 100%;
        max-width: 980px;
        padding-top: 15px;

        p {
            font-style:italic;
            font-weight: bold;
            padding: 10px;
            color: #000;
            text-align: justify;
        }
    }
`;

export const FooterUfalLeft = styled.div`
    display: flex;
    flex-direction: row;
    padding: 20px 0px;

    img {
        width: 80px;
        height: 120px;
    }

    h2 {
        margin: 0;
        padding: 25px 20px;
        color: #fff;
    }

    @media only screen and (min-width:150px) and (max-width:750px){
        display: flex;
        justify-content: center;
        padding: 20px 0px 20px 30px;

        img {
            width: 60px;
            height: 80px;
        }

        h2 {
            font-size: 22px;
            padding: 15px 0px 0px 20px;
        }
    }
`;

export const Sociais = styled.div`
    display: flex;
    flex-direction: row;

    svg {
        &:hover {
            color: #000 !important;
            background-color: #fff;
        }
    }

    @media only screen and (min-width:150px) and (max-width:750px){
        justify-content: center;
    }
`;

export const FooterRight = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 20px;

    h6 {
        color: #fff;
    }

    div {
        display: flex;
        

        img {
            width: 140px;
            height: 120px;
            padding: 15px;
        }
    }
    @media only screen and (min-width:150px) and (max-width:750px){
        align-items: center;

        h6 {
            margin-bottom: 30px;
        }
    }
`;