import React from 'react'
import styled from 'styled-components'

import NavBar from './littlecomponent/NavBar'
import FormsAnuncios from './littlecomponent/FormsAnuncios'
import VerMensagens from './littlecomponent/VerMensagens'
import VerAnuncios from './littlecomponent/VerAnuncios'

const SecaoAnuncioContainer = styled.section`

`

class SecaoAnuncio extends React.Component {
    
    state={
        secaoAtualEmAnuncio: 'FORMS'
    }

    onClickFormulario=()=>{
        this.setState({ secaoAtualEmAnuncio: 'FORMS'})
    }
    onClickVerAnuncios=()=>{
        this.setState({ secaoAtualEmAnuncio: 'ANUNCIOS'})
    }
    onClickVerMensagens=()=>{
        this.setState({ secaoAtualEmAnuncio: 'MENSAGENS'})
    }
    
    render(){

        let montarSubSecao = ()=>{
            if(this.state.secaoAtualEmAnuncio === 'FORMS'){
                return(
                    <FormsAnuncios
                    
                    />
                )
            }else if(this.state.secaoAtualEmAnuncio === 'ANUNCIOS'){
                return(
                    <VerAnuncios
                    
                    />
                )
            }else if(this.state.secaoAtualEmAnuncio === 'MENSAGENS'){
                return(
                    <VerMensagens
                    
                    />
                )
            }
        }

        return(
        
            <SecaoAnuncioContainer>
                <NavBar
                onClickFormulario={this.onClickFormulario}
                onClickVerAnuncios={this.onClickVerAnuncios}
                onClickVerMensagens={this.onClickVerMensagens}
                onClickVoltarParaLogin={this.props.onClickVoltarParaLogin}
                />

                {montarSubSecao()}

            </SecaoAnuncioContainer>
        )
    }
}
export default SecaoAnuncio