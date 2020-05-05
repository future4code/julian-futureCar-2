import React, { Component } from 'react'
import SecaoLogin from './subcomponents/SecaoLogin'
import SecaoCompra from './subcomponents/SecaoCompra'
import SecaoAnuncio from './subcomponents/SecaoAnuncio'
import styled from 'styled-components'

const TelaAppContainer = styled.main`
  margin: 0;
  width: 100vw;
  height: 100vh;
`
export class AppContainer extends Component {

  state={
    secaoAtual: 'LOGIN'
  }

  render() {

    let montarSecao = () =>{
      if(this.state.secaoAtual === 'LOGIN'){
        return (
          <SecaoLogin
        
          />
        )
      }else if(this.state.secaoAtual === 'COMPRA'){
        return(
          <SecaoCompra
        
          />
        )
      }else if(this.state.secaoAtual === 'ANUNCIO'){
        return(
          <SecaoAnuncio
        
          />
        )
      }
    }

    return (
      <TelaAppContainer>
        
        {montarSecao()}

      </TelaAppContainer>
    )
  }
}
