import React, { Component } from 'react'
import styled from 'styled-components'
import BotaoLogin from '@material-ui/core/Button'

const SecaoLoginContainer = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
`

const SecaoLoginTitulo = styled.h1`
    text-align: center;
    
`

const SecaoLoginLogo = styled.img`

`

class SecaoLogin extends Component {

    render(){
        return(
            <SecaoLoginContainer>

                <SecaoLoginLogo src={'https://trello-attachments.s3.amazonaws.com/5eb0293c7e597d7cccf65f3b/5eb17134aa7fb505c2e7ccc2/ca3030f252ecc1afbf21dcc7d02a1238/https_3A_2F_2Fs3-us-west-2.amazonaws.com_2Fsecure.notion-static.com_2F6af9eda3-f4a0-46a8-96da-d290e1102a19_2Ffuturecar.png'}/>

                <SecaoLoginTitulo>
                    Seu interesse em carros usados é
                </SecaoLoginTitulo>

                <BotaoLogin onClick={this.props.onClickSecaoCompra}>
                Comprar?
                </BotaoLogin>

                <BotaoLogin onClick={this.props.onClickSecaoAnuncio}>
                Vender?
                </BotaoLogin>
                
            </SecaoLoginContainer>
        )
    }
}
export default SecaoLogin