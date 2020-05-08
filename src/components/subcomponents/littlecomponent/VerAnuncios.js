import React from 'react';
import styled from 'styled-components';
import CardMui from "@material-ui/core/Card";
import { CardHeader } from "@material-ui/core";
import { CardMedia } from "@material-ui/core";
import { CardContent } from "@material-ui/core";
import { Typography } from "@material-ui/core";


const VerAnunciosContainer = styled.section`
    padding: 20px;
    
`;
const Card = styled(CardMui)`
    width: 300px;
    height: 300px;
`;
const Avatar = styled.img`
  width: 80px;
  border-radius: 10px;
`;

const CarPic = styled.img`
  width: 100px;
`;

const CardsContainer = styled.div`
    width: 50%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 10px;
`

class VerAnuncios extends React.Component {
    state = {
        
    }

    render() {

        let infosNegociacao = { paymentMethod: [], shipping: '', delivery: '', price: '' }

        let infosVeiculo = [
            { plate: 'AAA-1000', year: '2018', name: 'HYUNDAI', color: 'Amarelo', category: 'Luxo', carPic: 'https://3.bp.blogspot.com/-ec1reGyJmGE/Ua0gXkusStI/AAAAAAAAABM/SbiFvdV_fwM/s320/12281394042x59M4.jpg', description: 'Bem conservado' }, 
            { plate: 'xxx-5789', year: '2000', name: 'FORD', color: 'Preto', category: 'Esportivo', carPic: 'https://3.bp.blogspot.com/-ec1reGyJmGE/Ua0gXkusStI/AAAAAAAAABM/SbiFvdV_fwM/s320/12281394042x59M4.jpg', description: '' },
            { plate: 'JKL-0007', year: '2020', name: 'HONDA', color: 'Vermelho', category: 'Popular', carPic: 'https://3.bp.blogspot.com/-ec1reGyJmGE/Ua0gXkusStI/AAAAAAAAABM/SbiFvdV_fwM/s320/12281394042x59M4.jpg', description: '' }, 
            { plate: 'XYX-2456', year: '2008', name: 'FIAT', color: 'Branco', category: 'Popular', carPic: 'https://3.bp.blogspot.com/-ec1reGyJmGE/Ua0gXkusStI/AAAAAAAAABM/SbiFvdV_fwM/s320/12281394042x59M4.jpg', description: '' }
        ]
        let informacoesVeiculo = () => {
            const informacoesVeiculo = infosVeiculo.map(infor => {
                return (
                    <Card>
                        <CardHeader title={infor.name} />
                        <CarPic
                            src={infor.carPic}
                            title={infor.name}
                        />
                        <CardContent>
                            <Typography component="p">
                                <p>{infor.category} - {infor.year} - {infor.color}</p>
                                <p>{infor.description}</p>
                            </Typography>
                        </CardContent>
                    </Card>
                )
            })
            return informacoesVeiculo
        }

        let infosPessoais = [{owner: 'Nathalia', cpf: '000.235', address: { city: '', uf: '' }, phone: '(_) 8888-4444', ownerPic: 'https://www.w3schools.com/howto/img_avatar2.png'}]
        let informacoesPessoais = () => {
            for(let infos of infosPessoais){
                return (
                    <div>
                    <Avatar src={infos.ownerPic} />
                    <p>
                      {infos.owner} - {infos.cpf} - {infos.phone}
                    </p>
                  </div>
                )
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
                    <CardsContainer>
                        {informacoesVeiculo()}
                    </CardsContainer>
                </div>
            </VerAnunciosContainer>
        )
    }
}
export default VerAnuncios