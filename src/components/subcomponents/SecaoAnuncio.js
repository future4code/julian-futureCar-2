import React from 'react'
import styled from 'styled-components'
import BotaoSairSecaoAnuncio from '@material-ui/core/Button'

class SecaoAnuncio extends React.Component {

    render(){
        return(
            <div>
                <BotaoSairSecaoAnuncio variant='outlined' onClick={this.props.onClickVoltarParaLogin}>
                    VOLTAR
                </BotaoSairSecaoAnuncio>
            </div>
        )
    }
}
export default SecaoAnuncio