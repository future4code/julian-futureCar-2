import React from 'react'
import styled from 'styled-components'
import CardCarro from './CardCarro'
import axios from 'axios'

const DivContainer = styled.div`
    width: 50%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 15px;
`

class GridProduto extends React.Component {

    state={
        
    }

    componentDidMount(){
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/futureCarTwo/cars").then(response => {
            
            this.setState({listaDeCarros: response.data})
        }).catch(erro => {
        }) 
    }

    componentDidUpdate(){

    }

    render() {
        const listaDeComponentes =()=>{ 
            if(this.state.listaDeCarros !== undefined){
                const listaCarros = this.state.listaDeCarros.cars

                const listaMontada = listaCarros.map(carro => {
                    return <CardCarro key={carro.id} objetoCarro={carro}/>
                });

                return listaMontada
            }
        }
        return(
            <DivContainer>
                {listaDeComponentes()}
            </DivContainer>
        )
    }
}
export default GridProduto