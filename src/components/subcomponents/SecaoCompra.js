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
        width: 25vw;
        height: auto;
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
       
class SecaoCompra extends Component {

     state = {
              listaDeProdutos: [
                {
                id: 1,
                imagem: "https://picsum.photos/178/134?a=1",
                nomeDoProduto: "Nome do Veículo",
                Descricao: "Descrição",
              },
              {
                id: 2,
                imagem: "https://picsum.photos/178/134?a=2",
                nomeDoProduto: "Nome do Veículo",
                Descricao: "Descrição",
              },
              {
                id: 3,
                imagem: "https://picsum.photos/178/134?a=3",
                nomeDoProduto: "Nome do Veículo",
                Descricao: "Descrição",
              },
              {
                id: 4,
                imagem: "https://picsum.photos/178/134?a=4",
                nomeDoProduto: "Nome do Veículo",
                Descricao: "Descrição",
              },
              {
                id: 5,
                imagem: "https://picsum.photos/178/134?a=5",
                nomeDoProduto: "Nome do Veículo",
                Descricao: "Descrição",
              },
              {
                id: 6,
                imagem: "https://picsum.photos/178/134?a=6",
                nomeDoProduto: "Nome do Veículo",
                Descricao: "Descrição",
              },
              {
                id: 7,
                imagem: "https://picsum.photos/178/134?a=7",
                nomeDoProduto: "Nome do Veículo",
                Descricao: "Descrição",
              },
              {
                id: 8,
                imagem: "https://picsum.photos/178/134?a=8",
                nomeDoProduto: "Nome do Veículo",
                Descricao: "Descrição",
              },
              {
                id: 9,
                imagem: "https://picsum.photos/178/134?a=9",
                nomeDoProduto: "Nome do Veículo",
                Descricao: "Descrição",
              },
              {
                id: 10,
                imagem: "https://picsum.photos/178/134?a=10",
                nomeDoProduto: "Nome do Veículo",
                Descricao: "Descrição",
              },
              {
                id: 11,
                imagem: "https://picsum.photos/178/134?a=11",
                nomeDoProduto: "Nome do Veículo",
                Descricao: "Descrição",
              },
              {
                id: 12,
                imagem: "https://picsum.photos/178/134?a=12",
                nomeDoProduto: "Nome do Veículo",
                Descricao: "Descrição",
              },
              {
                id: 13,
                imagem: "https://picsum.photos/178/134?a=13",
                nomeDoProduto: "Nome do Veículo",
                Descricao: "Descrição",
              },
              {
                id: 14,
                imagem: "https://picsum.photos/178/134?a=14",
                nomeDoProduto: "Nome do Veículo",
                Descricao: "Descrição",
              },
              {
                id: 15,
                imagem: "https://picsum.photos/178/134?a=15",
                nomeDoProduto: "Nome do Veículo",
                Descricao: "Descrição",
              },
              {
                id: 16,
                imagem: "https://picsum.photos/178/134?a=16",
                nomeDoProduto: "Nome do Veículo",
                Descricao: "Descrição",
              }
              ],
              

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

    componentDidMount = () => {
      this.filtrarProdutos() 
     } 

    onChangeSelecionaValor = (event) => {
        this.setState({ordenacao: event.target.value})
        console.log(this.state.ordenacao)
    }

     onChangeMarcaModelo = (event) => {
         this.setState({inputMarcaModelo: event.target.value});
         console.log(this.state.inputMarcaModelo)
         
     }

     onChangeinputValorDe = (event) => {
         this.setState({inputValorDe: event.target.value});
     }

    onChangeinputValorAte =  (event) => {
        this.setState({inputValorAte: event.target.value});
    } 

    onChangeSelectModelo = (event) => {
        this.setState({ modeloSelecionado: event.target.value});
        console.log(this.state.modeloSelecionado)
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
           .filter((carros) => this.inputMarcaModelo ? carros.name === this.inputMarcaModelo : true)
           .filter((carros) => this.inputMarcaModelo ? carros.category === this.inputMarcaModelo : true)
           .ordenacao((a, b) => this.state.sort === "Maior Preço" ? a.price -b.price : b.price - a.price)
          }
   
    onClickLimparFiltro = () => {
       this.setState({ inputMarcaModelo: "", inputValorDe: "", inputValorAte: "" });
    }

   
    
    render(){
         
       let produtosFiltrados = this.state.cars.price;
       if(this.state.inputValorDe !== ""){
           produtosFiltrados = produtosFiltrados.filter(produto => {
               return produto.price >= this.state.inputValorDe
           })
       }
       if(this.state.inputValorAte !== ""){
           produtosFiltrados = produtosFiltrados.filter(produto => {
               return produto.value <= this.state.inputValorAte
           })
       }  
       if(this.state.inputMarcaModelo !== ""){
           produtosFiltrados = produtosFiltrados.filter(produto => {
               return produto.category.toLowerCase().includes(this.state.inputMarcaModelo.toLowerCase());
           });
          
           console.log(this.state.inputValorAte, this.state.inputValorDe, this.state.inputMarcaModelo)
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
                            
                            <p><strong>Ordenar Por Preço</strong></p>
                                <select value={this.state.ordenacao} onChange={this.onChangeSelecionaValor}>
                                    <option >Selecione o Valor</option>
                                    <option value='Maior Preço'>Maior Preço</option>
                                    <option value='Menor Preço'>Menor Preço</option>
                                </select>
                            </div>    
        
                               <div>
                                  <p><strong>Modelo</strong></p>
                                      <select value={this.state.modeloSelecionado} onChange={this.onChangeSelectModelo}>
                                          <option value=''>Selecione o modelo</option>
                                          <option value='Microvans'>Microvans</option>
                                          <option value='SuperLuxo'>Superluxo</option>
                                          <option value='Popular'>Popular</option>
                                          <option value='Esportivo'>Esportivo</option>
                                          <option value='Pick Ups'>Pick Ups</option>
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
                    </ColunaFiltro>

                    <ContainerGrid>
                        <GridProduto listaDeProdutos={this.state.listaDeProdutos} />  
                    </ContainerGrid>  

                </ConteudoDaPagina>
            </ContainerPrincipal>            
        );
    }
}
export default SecaoCompra