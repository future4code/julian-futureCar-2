import React from 'react';
import styled from 'styled-components'

import TextInput from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const FormsContainer = styled.form`
    padding: 30px;
`

const TextField = styled(TextInput)`
    width: 28ch;
`

class FormsAnuncios extends React.Component {
    state = {
        infosPessoais:{ nome: '', cpf: '', endereco: '' },
        infosVeiculo:{ placa:'', ano: '', cor:'', categoria:'' },
        infosNegociacao:{ pagamento: '', entrega:'', prazo:'' },
        formsEnviado: false
    };


    onChangeDoNome = (e) => {
        this.setState({
            infosPessoais: {
                nome: e.target.value,
                cpf: this.state.infosPessoais.cpf,
                endereco: this.state.infosPessoais.endereco
            }
        })

        console.log(this.state.infosPessoais)
    }
    onChangeDoCPF = (e) => {
        this.setState({
            infosPessoais: {
                nome: this.state.infosPessoais.nome,
                cpf: e.target.value,
                endereco: this.state.infosPessoais.endereco
            }
        })

        console.log(this.state.infosPessoais)
    }
    onChangeDoEndereco = (e) => {
        this.setState({
            infosPessoais: {
                nome: this.state.infosPessoais.nome,
                cpf: this.state.infosPessoais.cpf,
                endereco: e.target.value
            }
        })

        console.log(this.state.infosPessoais)
    }

    render() {

        const selectPagamento = [
            { value: 'à vista', label: 'à vista' }, { value: 'A prazo', label: 'A prazo' }, { value: 'carnê', label: 'carnê' }
        ];

        const selectEntrega = [
            { value: 'Entrega em casa', label: 'Entrega em casa' }, { value: 'Buscar na casa do anunciante', label: 'Buscar na casa do anunciante' }, { value: 'Local a combinar', label: 'Local a combinar' }
        ];
        const selectPrazoDeEntrega = [
            { value: '24 horas', label: '24 horas' }, { value: '72 horas', label: '72 horas' }, { value: '07 dias', label: '07 dias' }, { value: '15 dias', label: '15 dias' }
        ];
        const selectCategoria = [
            { value: "Esportivo", label:"Esportivo" }, { value:"Popular", label:"Popular" }, { value:"Pickup", label:"Pickup" }, { value:"Microvan", label:"Microvan" }, { value:"Super Luxo", label:"Super Luxo" }
        ];

        return (

            <FormsContainer>

                <h3> Forms em produção </h3>
                <div>
                    <p>Informações pessoais</p>

                    <TextField onChange={this.onChangeDoCPF} defaultValue={this.state.infosPessoais.cpf}
                        id="outlined-basic" label="CPF" variant="outlined" size="small" />

                    <TextField onChange={this.onChangeDoNome} defaultValue={this.state.infosPessoais.nome}
                        id="outlined-basic" label="Nome" variant="outlined" size="small" />

                    <TextField onChange={this.onChangeDoEndereco} defaultValue={this.state.infosPessoais.endereco}
                        id="outlined-basic" label="Endereço" variant="outlined" size="small" />
                </div>

                <div>
                    <p>Informações do veículo</p>
                    <TextField id="outlined-basic" label="Placa" variant="outlined" />
                    <TextField id="outlined-basic" label="Ano" variant="outlined" />
                    <TextField id="outlined-basic" label="Cor" variant="outlined" />
                    <TextField select label="Categoria do Veículo" id="outlined-basic" variant="outlined">
                        {selectCategoria.map(option => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </div>

                <div>
                    <p>Informações de Negociação</p>
                    <TextField id="outlined-basic" label="" variant="outlined" />
                    <div>
                        <FormLabel>Formas de pagamento</FormLabel>
                        <RadioGroup label="Formas de pagamento" name="formasDePagamento" >
                            <FormControlLabel value="à vista" control={<Radio />} label="à vista" />
                            <FormControlLabel value="à prazo" control={<Radio />} label="à prazo" />
                            <FormControlLabel value="carnê" control={<Radio />} label="carnê" />
                        </RadioGroup>
                    </div>
                    <TextField select label="Formas de entrega" id="outlined-basic" variant="outlined">
                        {selectEntrega.map(option => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField select label="Prazo de entrega" id="outlined-basic" variant="outlined">
                        {selectPrazoDeEntrega.map(option => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>


                </div>

            </FormsContainer>
        )
    }

}
export default FormsAnuncios