import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import BotaoSairSecaoCompra from '@material-ui/core/Button';
import BotaoFiltrar from '@material-ui/core/Button';
import InputBuscarModelo from '@material-ui/core/Input';


    const Principal = styled.div`
       background-color: white;
    `

    const BarraCabecalho = styled.div`
        height: 10vh;
        background-color: black;
        margin-bottom: 5rem;

    `

    const InputBusca = styled.div`
        margin-left: 5rem;
        margin-bottom: 1rem;
        
    
    ` 

    const FiltroContainer = styled.div`
        display: flex;
        flex-direction: column;
        border: 2px solid black;
        width: 25vw;
        height: 80vh;
        align-items: center;
        justify-content: space-around;
        margin-left: 3rem;
    
    `
    const PrecoContainer = styled.div`
        display: flex;
        flex-direction: row;
              
    `

    const InputPreco = styled.input`
        width: 5vw;
        height: 5vh;
        padding-top: 1rem;
        margin: 2rem;
     
    `
       
    


class SecaoCompra extends Component {

     state = {

        inputMarcaModelo: '',
        inputValorDe: '',
        inputValorAte: '',
        maiorPreco: '',
        selectMaximo: '',
        selectMinimo: '',
        ordenacao: "Maior Preço",
        modeloSelecionado: '',



        "cars": [
            {
                "ownerPic": "https://lh3.googleusercontent.com/-IoqLGrpikJI/XRIgXC8Pj-I/AAAAAAAAAfw/vQ6tIGsXCy0sDdIzCVpBSKOwyjxdOFtVwCEwYBhgL/w140-h140-p/pp.jpg",
                "year": "2019",
                "shipping": 3,
                "paymentMethod": [
                    "cartão",
                    "dinheiro"
                ],
                "plate": "ABC-2020",
                "city": "Recife",
                "carPic": "https://autovolostorage.blob.core.windows.net/advertimages-8189675/ford-ka-2015-939l.jpg",
                "price": 20000,
                "color": "FF0000",
                "phone": "81999999999",
                "description": "Carro com apenas 18 mil km rodados, IPVA 2020 quitado.",
                "state": "PE",
                "owner": "Osman",
                "name": "Ford",
                "category": "Popular",
                "id": "mukKMX29v4WkPX2BMuKK"
            }
        ]
       
     }

  //  componentDidMount = () => {
  //     this.filtrarProdutos() 
   // } 

    onChangeSelecionaValor = (event) => {
        this.setState({ordenacao: event.target.value})
        console.log(this.state.ordenacao)
    }

     onChangeMarcaModelo = (event) => {
         this.setState({inputMarcaModelo: event.target.value});
     }

     onChangeinputValorDe = (event) => {
         this.setState({inputValorDe: event.target.value});
     }

    onChangeinputValorAte =  (event) => {
        this.setState({inputValorAte: event.target.value});
    } 

    filtrarProdutos = () => {
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/futureCarTwo/cars").then(response => {
            
            this.setState({cars: response.data})
        }).catch(err => {
            console.log(err)
        })
       
    }
    
    filtrarValorMaxMin = () => {
        return this.carros.price
           .filter((carros) => this.selectMinimo ? carros.price < this.selectMinimo : true)
           .filter((carros) => this.selectMaximo ? carros.price > this.selectMaximo : true)
           .ordenacao((a, b) => this.state.sort === "Maior Preço" ? a.price -b.price : b.price - a.price)
      
        
    }

   
    onClickLimparFiltro = () => {
       this.setState({ inputMarcaModelo: "", inputValorDe: "", inputValorAte: "" });
    }
    
    render(){
        
        return(
            <Principal>
                 <BarraCabecalho>
                    <BotaoSairSecaoCompra variant='outlined' color="primary"  onClick={this.props.onClickVoltarParaLogin}>
                        VOLTAR
                    </BotaoSairSecaoCompra>
                </BarraCabecalho>

                <InputBusca>
                    <InputBuscarModelo 
                    placeholder={'Digite marca ou modelo'} 
                    value={this.state.inputMarcaModelo}
                    onChange={this.onChangeMarcaModelo}
                    />
                </InputBusca>
            

                <FiltroContainer> 
                    <div>
                       
                    <p><strong>Ordenar Por Preço</strong></p>
                        <select value={this.state.ordenacao} onChange={this.onChangeSelecionaValor}>
                            <option >Selecione o Valor</option>
                            <option value='Maior Preço'>Maior Preço</option>
                            <option value='Menor Preço'>Menor Preço</option>
                        </select>
                    </div>    
 
                    <div>
                    <p><strong>Modelo</strong></p>
                        <select value={this.modeloSelecionado} onChange={this.onChangeSelectModelo}>
                            <option value={}>Selecione o modelo</option>
                            <option value={}>Microvans</option>
                            <option value={}>Superluxo</option>
                            <option value={}>Popular</option>
                            <option value={}>Esportivo</option>
                            <option value={}>Pick Ups</option>
                        </select>
                    </div>    

                    <div>
                     <p><strong>Preço</strong></p>
                    </div>

                    <PrecoContainer>
                   
                        <InputPreco
                        placeholder={'De'}
                        value={this.state.inputValorDe}
                        onChange={this.onChangeinputValorDe}
                        type='number'
                        />

                        <InputPreco
                        placeholder={'Até'}
                        value={this.state.inputValorAte}
                        onChange={this.onChangeinputValorAte}
                        type='number'
                        />
                    </PrecoContainer>

                    <div>
                        <BotaoFiltrar onClick={this.filtrarProdutos} size="small"  variant="contained" color="primary">Filtrar</BotaoFiltrar>
                    </div>

                    <div>
                        <BotaoFiltrar onClick={this.onClickLimparFiltro} size="small"  variant="contained" color="primary">Limpar Filtros</BotaoFiltrar>
                    </div>

                </FiltroContainer>
            </Principal>
                    
        )
    }
}
export default SecaoCompra