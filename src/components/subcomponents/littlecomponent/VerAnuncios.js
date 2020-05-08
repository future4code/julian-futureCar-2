import React from 'react';
import styled from 'styled-components';
import CardMui from "@material-ui/core/Card";
import { CardHeader } from "@material-ui/core";
import { CardMedia } from "@material-ui/core";
import { CardContent } from "@material-ui/core";
import { Typography } from "@material-ui/core";


const VerAnunciosContainer = styled.section`

`;
const Card = styled(CardMui)`
    width: 300px;
    height: 300px;
`;

class VerAnuncios extends React.Component {
    state = {
        expanded: false,
        infosNegociacao: { paymentMethod: [], shipping: '', delivery: '', price: '' },
    }
    handleExpandClick = () => {
        this.setState(state => ({ expanded: !state.expanded }));
    };
    render() {

        let infosVeiculo = [{ plate: 'xxx-5789', year: '2020', name: 'Fors', color: 'Amarelo', category: 'Esportivo', carPic: '', description: '' }, { plate: 'xxx-5789', year: '2020', name: 'Fors', color: 'Amarelo', category: 'Esportivo', carPic: '', description: '' }]
        let informacoesVeiculo = () => {
            console.log("Chamando função")
            for(let infor of infosVeiculo){
                return (
                    <Card>
                        <CardHeader title={infor.name} />
                        <CardMedia
                            image={infor.carPic}
                            title={infor.name}
                        />
                        <CardContent>
                            <Typography component="p">
                                <p>{infor.category}</p>
                                <p>{infor.year}</p> 
                                <p>{infor.color}</p>  
                                <p>{infor.description}</p>
                            </Typography>
                        </CardContent>
                    </Card>
                )
            }
        }


        let infosPessoais = [{owner: 'Nathalia', cpf: '000.235', address: { city: '', uf: '' }, phone: '', ownerPic: ''}]
        let informacoesPessoais = () => {
            for(let infos of infosPessoais){
                return (<p>{infos.owner}</p>)
            }
        }
        return (
            <VerAnunciosContainer >
                <div>
                    <h3>Informações Pessoais</h3>
                    {informacoesPessoais()}
                </div>
                <div>
                    <h3>Meus Anuncios</h3>
                    {informacoesVeiculo()}
                </div>
            </VerAnunciosContainer>
        )
    }
}
export default VerAnuncios