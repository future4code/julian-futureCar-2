import React from 'react'
import styled from 'styled-components'
import BotaoSairSecaoCompra from '@material-ui/core/Button'

class SecaoCompra extends React.Component {

    render(){
        return(
            <div>
                <BotaoSairSecaoCompra variant='outlined' onClick={this.props.onClickVoltarParaLogin}>
                    VOLTAR
                </BotaoSairSecaoCompra>
            </div>
        )
    }
}
export default SecaoCompra