import React from "react";
import { Link } from "react-router-dom";

const Home = () => {


    return(
        <div style={{textAlign:"center"}}>
            <h1>Home Page</h1>
            <br />
                <Link to="/objetivos/criar">Cadastro de Objetivos</Link>
                <br/>
                <Link to="/objetivos/listar">Listar Objetivos</Link>
                <br/>
                <Link to="/cadastro">Criar Usuário</Link>
        </div>
    );
}

export default Home;