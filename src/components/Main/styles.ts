import styled from 'styled-components'

export const Container = styled.main`
    margin: 0 auto;
    margin-top: 2rem;
    border-radius: .25rem;
    padding-top: 2rem;
    padding-left: 4rem;

    .filme{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        grid-gap: 1rem;

        .osFilmes{ 
            width: fit-content;
            
            .title{
                text-align: right;
                font-size: .9rem;
                color: var(--detalhe1);
                
            }
        }
    }
    
    h4{
        color: var(--detalhe1);
        text-align: right;
        font-size: .8rem;


        span{
            color: var(--cor1);
        }
    }

    img{
        width:170px; height: 220px;
    }
`