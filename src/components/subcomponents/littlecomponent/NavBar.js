import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Badge from '@material-ui/core/Badge';


class NavBar extends React.Component {

    render() {
        return (
            <AppBar color='secondary' position="static">
                <Toolbar >
                    <Button color="inherit" onClick={this.props.onClickFormulario}>Criar anúncio</Button>
                    <Button color="inherit" onClick={this.props.onClickVerAnuncios}>Ver meus anúncios</Button>
                    <Badge color="primary" badgeContent={'03'} >
                        <Button color="inherit" onClick={this.props.onClickVerMensagens}>Ver minhas mensagens</Button>
                    </Badge>
                    <Button edge="end" color="inherit" onClick={this.props.onClickVoltarParaLogin}>Sair</Button>
                </Toolbar>
            </AppBar>
        )
    }
}
export default NavBar