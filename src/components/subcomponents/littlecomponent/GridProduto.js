import React from 'react'
import styled from 'styled-components'
import CardProduto from './CardProduto'

const DivContainer = styled.div`
    width: 50%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 15px;
`

class GridProduto extends React.Component {

    render() {
        const listaDeComponentes = this.props.listaDeProdutos.map((produto)=> {
            return <CardProduto key={produto.id} infoProduto={produto}/>
          })

        return(
            <DivContainer>
                {listaDeComponentes}
            </DivContainer>
        )
    }
}
export default GridProduto