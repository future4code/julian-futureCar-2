import React from 'react';
import styled from 'styled-components'

import TextInput from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';

const FormsContainer = styled.form`
    padding: 30px;
`

const TextField = styled(TextInput)`
    width: 28ch;
`
const ImgInput = styled.input`

`

class FormsAnuncios extends React.Component {
    state = {
        infosPessoais: { owner: '', cpf: '', address: { city: '', uf: '' }, phone: '', ownerPic: '' },
        infosVeiculo: { plate: '', year: '', name: '', color: '', category: '', carPic: '', description: '' },
        infosNegociacao: { paymentMethod: [], shipping: '', delivery: '', price: '' },
        formsEnviado: false
    };

    componentDidMount() {
        console.log(this.state.infosNegociacao)
    }

    componentDidUpdate() {
        console.log(this.state.infosNegociacao)
    }

    //inputs controlados dos Dados Pessoais

    onChangeDoNome = (e) => {
        this.setState({
            infosPessoais: {
                owner: e.target.value,
                cpf: this.state.infosPessoais.cpf,
                address: this.state.infosPessoais.address,
                phone: this.state.infosPessoais.phone,
                ownerPic: this.state.infosPessoais.ownerPic
            }
        })
    }
    onChangeDoCPF = (e) => {
        this.setState({
            infosPessoais: {
                owner: this.state.infosPessoais.owner,
                cpf: e.target.value,
                address: this.state.infosPessoais.address,
                phone: this.state.infosPessoais.phone,
                ownerPic: this.state.infosPessoais.ownerPic
            }
        })
    }
    onChangeCidade = (e) => {
        this.setState({
            infosPessoais: {
                owner: this.state.infosPessoais.owner,
                cpf: this.state.infosPessoais.cpf,
                address: { city: e.target.value, uf: this.state.infosPessoais.address.uf },
                phone: this.state.infosPessoais.phone,
                ownerPic: this.state.infosPessoais.ownerPic
            }
        })
    }
    onChangeUF = (e) => {
        this.setState({
            infosPessoais: {
                owner: this.state.infosPessoais.owner,
                cpf: this.state.infosPessoais.cpf,
                address: { city: this.state.infosPessoais.address.city, uf: e.target.value },
                phone: this.state.infosPessoais.phone,
                ownerPic: this.state.infosPessoais.ownerPic
            }
        })
    };
    onChangeDoTelefone = (e) => {
        this.setState({
            infosPessoais: {
                owner: this.state.infosPessoais.owner,
                cpf: this.state.infosPessoais.cpf,
                address: {
                    city: this.state.infosPessoais.address.city,
                    uf: this.state.infosPessoais.address.uf
                },
                phone: e.target.value,
                ownerPic: this.state.infosPessoais.ownerPic
            }
        })
    };
    onChangeImgDono = (e) => {
        this.setState({
            infosPessoais: {
                owner: this.state.infosPessoais.owner,
                cpf: this.state.infosPessoais.cpf,
                address: {
                    city: this.state.infosPessoais.address.city,
                    uf: this.state.infosPessoais.address.uf
                },
                phone: this.state.infosPessoais.phone,
                ownerPic: e.target.value
            }
        })
    };


    //inputs controlados dos Dados do Veículo

    onChangePlaca = (e) => {
        this.setState({
            infosVeiculo: {
                plate: e.target.value,
                year: this.state.infosVeiculo.year,
                name: this.state.infosVeiculo.name,
                color: this.state.infosVeiculo.color,
                category: this.state.infosVeiculo.category,
                carPic: this.state.infosVeiculo.carPic,
                description: this.state.infosVeiculo.description
            }
        })
    };
    onChangeAno = (e) => {
        this.setState({
            infosVeiculo: {
                plate: this.state.infosVeiculo.plate,
                year: e.target.value,
                name: this.state.infosVeiculo.name,
                color: this.state.infosVeiculo.color,
                category: this.state.infosVeiculo.category,
                carPic: this.state.infosVeiculo.carPic,
                description: this.state.infosVeiculo.description
            }
        })
    };
    onChangeMarca = (e) => {
        this.setState({
            infosVeiculo: {
                plate: this.state.infosVeiculo.plate,
                year: this.state.infosVeiculo.year,
                name: e.target.value,
                color: this.state.infosVeiculo.color,
                category: this.state.infosVeiculo.category,
                carPic: this.state.infosVeiculo.carPic,
                description: this.state.infosVeiculo.description
            }
        })
    };
    onChangeCor = (e) => {
        this.setState({
            infosVeiculo: {
                plate: this.state.infosVeiculo.plate,
                year: this.state.infosVeiculo.year,
                name: this.state.infosVeiculo.name,
                color: e.target.value,
                category: this.state.infosVeiculo.category,
                carPic: this.state.infosVeiculo.carPic,
                description: this.state.infosVeiculo.description
            }
        })
    };
    onChangeCategoria = (e) => {
        this.setState({
            infosVeiculo: {
                plate: this.state.infosVeiculo.plate,
                year: this.state.infosVeiculo.year,
                name: this.state.infosVeiculo.name,
                color: this.state.infosVeiculo.color,
                category: e.target.value,
                carPic: this.state.infosVeiculo.carPic,
                description: this.state.infosVeiculo.description
            }
        })
    };
    onChangeImgCarro = (e) => {
        this.setState({
            infosVeiculo: {
                plate: this.state.infosVeiculo.plate,
                year: this.state.infosVeiculo.year,
                name: this.state.infosVeiculo.name,
                color: this.state.infosVeiculo.color,
                category: this.state.infosVeiculo.category,
                carPic: e.target.value,
                description: this.state.infosVeiculo.description
            }
        })
    };
    onChangeDescricao = (e) => {
        this.setState({
            infosVeiculo: {
                plate: this.state.infosVeiculo.plate,
                year: this.state.infosVeiculo.year,
                name: this.state.infosVeiculo.name,
                color: this.state.infosVeiculo.color,
                category: this.state.infosVeiculo.category,
                carPic: this.state.infosVeiculo.carPic,
                description: e.target.value
            }
        })
    };

    //inputs controlados dos Dados de Negociação

    render() {

        const selectUF = [
            { value: 'SP', label: 'SP' }, { value: 'RS', label: 'RS' }, { value: 'PE', label: 'PE' }, { value: 'AM', label: 'AM' }, { value: 'DF', label: 'DF' }
        ];

        const selectPagamento = [
            { value: 'à vista', label: 'à vista' }, { value: 'A prazo', label: 'A prazo' }, { value: 'carnê', label: 'carnê' }
        ];

        const selectPrazoDeEntrega = [
            { value: '01 dia', label: '01 dia' }, { value: '03 dias', label: '03 dias' }, { value: '07 dias', label: '07 dias' }, { value: '15 dias', label: '15 dias' }
        ];

        return (

            <FormsContainer>

                <h3> Forms em produção </h3>
                <div>
                    <p>Informações pessoais</p>

                    <TextField onChange={this.onChangeDoCPF} defaultValue={this.state.infosPessoais.cpf}
                        placeholder="Digite apenas números"
                        id="outlined-basic" label="CPF" variant="outlined" size="small" type="number" />

                    <TextField onChange={this.onChangeDoNome} defaultValue={this.state.infosPessoais.owner}
                        id="outlined-basic" label="Nome" variant="outlined" size="small" type="text" />

                    <TextField onChange={this.onChangeCidade} defaultValue={this.state.infosPessoais.address.city}
                        id="outlined-basic" label="Cidade" variant="outlined" size="small" type="text" />

                    <TextField select onChange={this.onChangeUF} defaultValue={this.state.infosPessoais.address.uf}
                        label="UF" id="outlined-basic" variant="outlined">
                        {selectUF.map(option => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>

                    <TextField onChange={this.onChangeDoTelefone} defaultValue={this.state.infosPessoais.phone}
                        placeholder="Insira DDD + telefone"
                        id="outlined-basic" label="Telefone" variant="outlined" size="small" type="tel" />

                    <TextField onChange={this.onChangeImgDono} defaultValue={this.state.infosPessoais.ownerPic}
                        placeholder="Insira a URL da imagem"
                        id="outlined-basic" label="Sua Foto" variant="outlined" size="small" type="url" />

                </div>

                <div>
                    <p>Informações do veículo</p>
                    <TextField onChange={this.onChangePlaca} defaultValue={this.state.infosVeiculo.plate}
                        id="outlined-basic" label="Placa" variant="outlined" placeholder="Ex.: AAA-0000" />

                    <TextField onChange={this.onChangeMarca} defaultValue={this.state.infosVeiculo.name}
                        id="outlined-basic" label="Marca" variant="outlined" />

                    <TextField onChange={this.onChangeAno} defaultValue={this.state.infosVeiculo.year}
                        id="outlined-basic" label="Ano" variant="outlined" type="number" />

                    <TextField onChange={this.onChangeCor} defaultValue={this.state.infosVeiculo.color}
                        id="outlined-basic" label="Cor" variant="outlined" />

                    <FormControl>
                        <FormLabel >Categoria do Veículo</FormLabel>
                        <RadioGroup onChange={this.onChangeCategoria} defaultValue={this.state.infosVeiculo.category} row >
                            <FormControlLabel value="Esportivo" control={<Radio />} label="Esportivo" />
                            <FormControlLabel value="Popular" control={<Radio />} label="Popular" />
                            <FormControlLabel value="Pickup" control={<Radio />} label="Pickup" />
                            <FormControlLabel value="Microvan" control={<Radio />} label="Microvan" />
                            <FormControlLabel value="Super Luxo" control={<Radio />} label="Super Luxo" />
                        </RadioGroup>
                    </FormControl>

                    <TextField onChange={this.onChangeDescricao} defaultValue={this.state.infosVeiculo.description}
                        multiline label="Descrição" variant="outlined" rowsMax="3" helperText="Informações adicionais sobre o carro" />

                    <TextField onChange={this.onChangeImgCarro} defaultValue={this.state.infosVeiculo.carPic}
                        placeholder="Insira a URL da imagem"
                        id="outlined-basic" label="Foto do Veículo" variant="outlined" size="small" type="url" />

                </div>

                <div>
                    <p>Informações de Negociação</p>
                    <FormGroup row>
                        <FormLabel>Formas de pagamento</FormLabel>
                        <FormControlLabel control={<Checkbox value="à vista" />} label="à vista" />
                        <FormControlLabel control={<Checkbox value="à prazo" />} label="à prazo" />
                        <FormControlLabel control={<Checkbox value="carnê" />} label="carnê" />
                    </FormGroup>
                    <FormControl>
                        <FormLabel>Formas de entrega</FormLabel>
                        <RadioGroup>
                            <FormControlLabel value="Entrega em casa" control={<Radio />} label="Entrega em casa" />
                            <FormControlLabel value="Buscar na casa do anunciante" control={<Radio />} label="Buscar na casa do anunciante" />
                            <FormControlLabel value="Local a combinar" control={<Radio />} label="Local a combinar" />
                        </RadioGroup>
                    </FormControl>

                    <TextField select label="Prazo de entrega" id="outlined-basic" variant="outlined">
                        {selectPrazoDeEntrega.map(option => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField id="outlined-basic" label="Preço estimado" variant="outlined" InputProps={{
                        startAdornment: <InputAdornment position="start">R$</InputAdornment>,
                    }} />

                </div>
                <div>
                    <Button variant="outlined" color="secondary" size="large">
                        Enviar
                    </Button>
                </div>
            </FormsContainer>
        )
    }

}
export default FormsAnuncios