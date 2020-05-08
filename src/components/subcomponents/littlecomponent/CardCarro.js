import React from 'react'
import styled from 'styled-components'
import ButtonMui from '@material-ui/core/Button';

const Card = styled.div`
  width: 210px;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: 1px solid black;
  padding: 8px;
`
const InfosCarro = styled.div`
    height: 20%;
    width: 90%;
    display:flex;
    flex-direction: column;
    align-items: flex-start;
`

const NomeCarro = styled.text`
    font-weight: bold;
    font-size: small;
    margin: 8px 0 8px 0;
`
const PrecoCarro = styled.text`
    font-size: small;

`
const ImgCarro = styled.img`
    height: 50%;
    width: 100%;
`
const Button = styled(ButtonMui)`

    height: 10%;
`
class CardCarro extends React.Component {

  render() {
        return(
            <Card>
                <ImgCarro src={this.props.objetoCarro.carPic} alt={"imagem"}/>

                <InfosCarro>
                    <NomeCarro>{this.props.objetoCarro.name}</NomeCarro>
                    <PrecoCarro>R$ {this.props.objetoCarro.price}</PrecoCarro>
                </InfosCarro>
                
                <Button color='primary' variant='outlined'>Detalhes</Button>
            </Card>
        );
    }
}

export default CardCarro