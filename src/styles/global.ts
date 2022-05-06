import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500&display=swap');

    :root {
        --fundo: #111;
        --cor1: #00609c;
        --detalhe1: #fff;
    }

    *{
        margin: 0;
        padding: 0;
        font-family: 'Roboto', sans-serif;
        box-sizing: border-box;
        text-decoration: none;
        outline: none; border: none;
        transition: .2s linear;
    }
    html{
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }
        @media (max-width: 720px) {
            font-size: 87.5%;
        }
        overflow-x: hidden;
        scroll-padding-top: 9rem;
        scroll-behavior: smooth;
    }
    html::-webkit-scrollbar{
        width: .6rem;
    }
    html::-webkit-scrollbar-track{
        background: transparent;
    }
    html::-webkit-scrollbar-thumb{
        background: var(--cor1);
        border-radius: 5rem;
    }
    body{
        background: var(--fundo);
        -webkit-font-smoothing: antialiased;
    }
    button{
        cursor: pointer;
    }
    [disable] {
        opacity: 0.6;
        cursor: not-allowed;
    }

    .react-modal-overlay{
        background: rgba(0,0,0,0.5);
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .react-modal{
        width: 100%;
        max-width: 576px;
        background-color: #fff;
        padding: 3rem;
        position: relative;
        border-radius: 0.25rem;
    }

`