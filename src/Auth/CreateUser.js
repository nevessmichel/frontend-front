import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CreateUserRequest } from "../requests/Requests";
import '../myCSS.css';

const CreateUser = () =>{
    const [state, setState] = useState({name:"",email:"",password:"",password_re:""});
    const [passwordMatch, setPasswordMatch] = useState(true);
    const [message, setMessage] = useState(null);
    const navigate = useNavigate();

    const handleChange = (event) => {
        event.preventDefault();
        setState({...state, [event.target.name]: event.target.value})
    }

    const handleSubmit =  () => {
        if(passwordMatch && state.name.length !== 0 && state.email.length !== 0 && state.password.length !== 0){
            setMessage("Criando Usuário");
            var data = {name:state.name, email:state.email, password:state.password}
            CreateUserRequest(data).then(result =>{
                console.log(result);
                setMessage("Cadastro Realizado")
                window.confirm("Cadastro Realizado");
                navigate("/login");
            }).catch(err=>{
                setMessage("Falha no cadastro")
                window.confirm(err.message);
            });
            
        }else{
            setMessage("Campos Inválidos")
        }
    }



    useEffect(() => {
        if(state.password === state.password_re){
            setPasswordMatch(true);
        }else{
            setPasswordMatch(false);
        }
      }, [state.password, state.password_re]);

    return(<div>
        <Link to='/'>Início</Link>
        <br/>
        <div>
                <p style={{color:"red"}}>{message}</p>
            </div>
        <br/>
        <br/>
        <div>
        <label className="label">
            Nome: 
            <input name="name" type="text" value={state.name} onChange={handleChange}></input>
        </label>
        <br/><br/>
        <label className="label">
            Email: 
            <input name="email" type="email" value={state.email} onChange={handleChange}></input>
        </label>
        <br/>
        <br/>
        <label className="label">
            Senha: 
            <input name="password" type="password" value={state.password} onChange={handleChange}></input>
        </label>
        <br/>
        <br/>
        <label className="label">
            Repetir Senha: 
            <input name="password_re" type="password" value={state.password_re} onChange={handleChange}></input>
            {!passwordMatch && <p style={{color: "red"}}>As senhas não são iguais!</p>}
        </label>
        <br/>
        <br/>
        <button onClick={handleSubmit}>Criar</button>
        <br/>
        <br/>
      <button onClick={()=>navigate("/login")}>Logar</button>
        </div>
    </div>);

}

export default CreateUser;