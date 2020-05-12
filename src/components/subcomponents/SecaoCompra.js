import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import BotaoSairSecaoCompra from '@material-ui/core/Button';
import BotaoFiltrar from '@material-ui/core/Button';
import InputBuscarModelo from '@material-ui/core/Input';
import GridProduto from './littlecomponent/GridProduto';


    const ContainerPrincipal = styled.div`
        max-width: 98vw;
    `

    const ConteudoDaPagina = styled.div`
       background-color: white;
       width: 100vw;
       display: flex;
       justify-content: center;;
       align-items: flex-start;
    `

    const ContainerGrid = styled.div`
        width: 75%;
        margin:0;
    `

    const ColunaFiltro = styled.div`
        width: 35vw;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    `

    const BarraCabecalho = styled.div`
        height: 10vh;
        width: 100%;
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
        width: 20vw;
        height: 100%;
        padding: 25px;
        align-items: center;
        justify-content: space-around;
        margin-left: 3rem;
    `
    const PrecoContainer = styled.div`
        display: flex;
        flex-direction: row;
        align-items: center;       
    `

    const InputPreco = styled.input`
        width: 5vw;
        height: 5vh;
        padding-top: 1rem;
        margin: 2rem;
    `

    const Filtrar = styled.div`
       margin: 1rem;
    `
    
    const LimparFiltro = styled.div`
      
    `
    
       
class SecaoCompra extends Component {

    state = {   
        inputMarcaModelo: '',
        inputValorDe: '',
        inputValorAte: '',
        selectOrdenar: '',
        selectCategoria: '',
        
        listaFiltrada: [],
    }

    componentDidMount = () => {
    }
    componentDidUpdate(){
    } 

    onChangeSelectOrdenar = (event) => {
        this.setState({selectOrdenar: event.target.value})
    }

    onChangeMarcaModelo = (event) => {
    this.setState({inputMarcaModelo: event.target.value}); 
    }

    onChangeInputValorDe = (event) => {
         this.setState({inputValorDe: event.target.value});
    }

    onChangeInputValorAte = (event) => {
        this.setState({inputValorAte: event.target.value});
    } 

    onChangeSelectCategoria = (event) => {
        this.setState({ selectCategoria: event.target.value});
        
    }

    filtrarValorMaxMin = () => {
       return this.carros.price
           .filter((carros) => this.selectMinimo ? carros.price < this.selectMinimo : true)
           .filter((carros) => this.selectMaximo ? carros.price > this.selectMaximo : true)
           .filter((carros) => this.inputMarcaModelo ? carros.name === this.inputMarcaModelo : true)
           .filter((carros) => this.inputMarcaModelo ? carros.category === this.inputMarcaModelo : true)
           .ordenacao((a, b) => this.state.sort === "Maior Preço" ? a.price -b.price : b.price - a.price)
    }

    onClickAplicarFiltro=()=>{
        console.log(this.state) 
    }
   
    onClickLimparFiltro = () => {
       this.setState({ 
           inputMarcaModelo:"", 
           inputValorDe: "", 
           inputValorAte: "", 
           selectOrdenar:"",
           selectCategoria:""
        });
    }   
    
    render(){

        const carrosNaTela =()=>{
            if(
                this.state.selectCategoria === ''&&
                this.state.selectOrdenar === ''&&
                this.state.inputValorDe === ''&&
                this.state.inputValorAte === ''
            ){

                return <GridProduto />  
            }else{
                return(
                    <GridProduto 
                    listaFiltrada={this.state.listaFiltrada} 
                    listaDeCarros={this.state.cars} 
                    />
                )
            }
        }
            
        return(
            <ContainerPrincipal>
                <BarraCabecalho>
                <BotaoSairSecaoCompra variant='outlined' color="primary"  onClick={this.props.onClickVoltarParaLogin}>
                    VOLTAR
                </BotaoSairSecaoCompra>
                </BarraCabecalho>

                <ConteudoDaPagina>
                    <ColunaFiltro>
                        <InputBusca>
                            <InputBuscarModelo 
                            placeholder={'Digite marca ou modelo'} 
                            value={this.state.inputMarcaModelo}
                            onChange={this.onChangeMarcaModelo}
                            />
                        </InputBusca>

                        <FiltroContainer>
                            <div>
                                <p><strong>Categoria</strong></p>
                                <select onChange={this.onChangeSelectCategoria}>
                                    <option value=''>Selecione a categoria</option>
                                    <option value='Microvans'>Microvans</option>
                                    <option value='SuperLuxo'>Superluxo</option>
                                    <option value='Popular'>Popular</option>
                                    <option value='Esportivo'>Esportivo</option>
                                    <option value='Pick Ups'>Pick Ups</option>
                                </select>
                            </div>

                            <div>
                                <p><strong>Ordenar Por Preço</strong></p>
                                <select onChange={this.onChangeSelectOrdenar}>
                                    <option value=''>Selecione o Valor</option>
                                    <option value='Maior Preço'>Maior Preço</option>
                                    <option value='Menor Preço'>Menor Preço</option>
                                </select>
                            </div>        

                            <div>
                            <p><strong>Preço</strong></p>
                            </div>

                            <PrecoContainer>
                                <InputPreco
                                placeholder={'De'}
                                value={this.state.inputValorDe}
                                onChange={this.onChangeInputValorDe}
                                type='number'
                                />

                                <InputPreco
                                placeholder={'Até'}
                                value={this.state.inputValorAte}
                                onChange={this.onChangeInputValorAte}
                                type='number'
                                />
                            </PrecoContainer>

                            <Filtrar>
                                <BotaoFiltrar onClick={this.onClickAplicarFiltro} size="small"  variant="contained" color="primary">Filtrar</BotaoFiltrar>
                            </Filtrar>

                            <LimparFiltro>
                                <BotaoFiltrar onClick={this.onClickLimparFiltro} size="small"  variant="contained" color="primary">Limpar Filtros</BotaoFiltrar>
                            </LimparFiltro>
                            
                        </FiltroContainer>
                    </ColunaFiltro>

                    <ContainerGrid>
                        {carrosNaTela()}
                    </ContainerGrid>  

                </ConteudoDaPagina>
            </ContainerPrincipal>            
        );
    }
}
export default SecaoCompra