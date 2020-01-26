import {createGlobalStyle} from "styled-components"
import "react-toastify/dist/ReactToastify.css"

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto+Slab:400,500,600,700,800,900&display=swap');
@import url('https://fonts.googleapis.com/css?family=Michroma&display=swap');

* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
}

*:focus {
    outline: 0;
}

body, html, #root{
    background-color: #f5f5f5;
    height: 100%;
    scroll-behavior: smooth;
}

body{
    -webkit-font-smoothing: antialiased;
}
 
body, input, button{
    font: 14px 'Roboto Slab', sans-serif;
}

a {
    text-decoration: none;
}

a:visited, a:active,a:link {
    color: #000;
}


li {
    list-style: none;
}

button {
    cursor: pointer;
}
`