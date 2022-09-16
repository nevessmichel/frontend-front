import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import * as actions from "./store/actions";

const Home = ({user, setUser}) => {


    return(
        <div style={{textAlign:"center"}}>

            <h1>Home Page</h1>
            <div>
                usuário logado: {JSON.stringify(user)}
            </div>
            <br />
            <Link to="/cadastro">Criar Usuário</Link>
            <br/>
            <Link to="/login">Logar</Link>
            <br/>
            <Link to="/Logout">Deslogar</Link>
            <br/>
            <Link to="/objetivos/criar">Cadastro de Objetivos</Link>
            <br/>
            <Link to="/objetivos/listar">Listar Objetivos</Link>
            <br/>
                
        </div>
    );
}

const mapStateToProps = (state) => ({ user: state.user });
const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Home)