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

    componentDidMount(){
        console.log(this.state.infosPessoais)
    }

    componentDidUpdate(){
        console.log(this.state.infosPessoais)
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
    }
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
    }
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
    }


    //inputs controlados dos Dados do Veículo

    //inputs controlados dos Dados de Negociação

    render() {

        const selectUF = [
            {value:'SP', label:'SP'},{value:'RS', label:'RS'},{value:'PE', label:'PE'},{value:'AM', label:'AM'},{value:'DF', label:'DF'}
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
                        placeholder="Insira o DDD + telefone"
                        id="outlined-basic" label="Telefone" variant="outlined" size="small" type="tel" />

                    <TextField onChange={this.onChangeImgDono} defaultValue={this.state.infosPessoais.ownerPic}
                        placeholder="Insira a URL da imagem"
                        id="outlined-basic" label="Sua Foto" variant="outlined" size="small" type="url" />
                    
                </div>

                <div>
                    <p>Informações do veículo</p>
                    <TextField id="outlined-basic" label="Placa" variant="outlined" />
                    <TextField id="outlined-basic" label="Ano" variant="outlined" />
                    <TextField id="outlined-basic" label="Cor" variant="outlined" />
                    <FormControl>
                        <FormLabel>Categoria do Veículo</FormLabel>
                        <RadioGroup row >
                            <FormControlLabel value="Esportivo" control={<Radio />} label="Esportivo" />
                            <FormControlLabel value="Popular" control={<Radio />} label="Popular" />
                            <FormControlLabel value="Pickup" control={<Radio />} label="Pickup" />
                            <FormControlLabel value="Microvan" control={<Radio />} label="Microvan" />
                            <FormControlLabel value="Super Luxo" control={<Radio />} label="Super Luxo" />
                        </RadioGroup>
                    </FormControl>
                    <TextField multiline label="Descrição" variant="outlined" rowsMax="3" helperText="Informações adicionais sobre o carro" />
                </div>

                <div>
                    <p>Informações de Negociação</p>
                    <FormControl>
                        <FormLabel>Formas de pagamento</FormLabel>
                        <RadioGroup row label="Formas de pagamento" >
                            <FormControlLabel value="à vista" control={<Radio />} label="à vista" />
                            <FormControlLabel value="à prazo" control={<Radio />} label="à prazo" />
                            <FormControlLabel value="carnê" control={<Radio />} label="carnê" />
                        </RadioGroup>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Formas de entrega</FormLabel>
                        <RadioGroup row label="Formas de entrega" >
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

            </FormsContainer>
        )
    }

}
export default FormsAnuncios