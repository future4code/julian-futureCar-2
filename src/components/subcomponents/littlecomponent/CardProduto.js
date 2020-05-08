import React from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/Button';

const Card = styled.div`
  width: 210px;
  height: 290px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: 1px solid black;
  text-align: start;
  padding: 8px;
`

const NomeProduto = styled.p`
    margin: 8px 0 8px 0;
`

const DescricaoProduto = styled.p`
    margin: 8px 0 8px 0;
`

class CardProduto extends React.Component {

  render() {
        return(
            <Card>
                <img src={this.props.infoProduto.imagem} alt={"imagem"}/>
                <NomeProduto>{this.props.infoProduto.nomeDoProduto}</NomeProduto>
                <DescricaoProduto>{this.props.infoProduto.Descricao}</DescricaoProduto>
                <Button color='primary' variant='outlined'>Detalhes</Button>
            </Card>
        );
    }
}

export default CardProduto