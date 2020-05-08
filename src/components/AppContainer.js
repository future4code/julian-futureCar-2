import React from 'react'
import SecaoLogin from './subcomponents/SecaoLogin'
import SecaoCompra from './subcomponents/SecaoCompra'
import SecaoAnuncio from './subcomponents/SecaoAnuncio'
import styled from 'styled-components'

const TelaAppContainer = styled.main`
  margin: 0;
  width: 100vw;
  height: 100vh;
`
class AppContainer extends React.Component {

  state={
    secaoAtual: 'LOGIN'
  }

  onClickSecaoCompra =()=>{
    this.setState({ secaoAtual: 'COMPRA' })
  }

  onClickSecaoAnuncio = ()=>{
    this.setState({ secaoAtual: 'ANUNCIO' })
  }

  onClickVoltarParaLogin=()=>{
    this.setState({ secaoAtual: 'LOGIN' })
  }
  render() {

    let montarSecao = () =>{
      if(this.state.secaoAtual === 'LOGIN'){
        return (
          <SecaoLogin
          onClickSecaoCompra={this.onClickSecaoCompra}
          onClickSecaoAnuncio={this.onClickSecaoAnuncio}
          />
        )
      }else if(this.state.secaoAtual === 'COMPRA'){
        return(
          <SecaoCompra
           onClickVoltarParaLogin={this.onClickVoltarParaLogin}
          />
        )
      }else if(this.state.secaoAtual === 'ANUNCIO'){
        return(
          <SecaoAnuncio
          onClickVoltarParaLogin={this.onClickVoltarParaLogin}
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
export default AppContainer
