import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../myCSS.css';

const CreateUser = () =>{
    const [state, setState] = useState({name:"",email:"",password:"",password_re:""});
    const [submit, setSubmit] = useState(false);
    const [passwordMatch, setPasswordMatch] = useState(true);
    const [message, setMessage] = useState(null);

    const handleChange = (event) => {
        setState({...state, [event.target.name]: event.target.value})
    }

    const handleSubmit = () => {
        if(passwordMatch && state.name.length !== 0 && state.email.length !== 0 && state.password.length !== 0){
            setMessage(null);
            var data = {name:state.name, email:state.email, password:state.password}
        }else{
            setMessage("Campos Inválidos")
        }

        setSubmit(true);
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
        <div>state: {JSON.stringify(state)}</div>
        <br/>
        <div>
                <p style={{color:"red"}}>{message}</p>
            </div>
        <br/>

        {submit && <div>
                <p>Você Clicou em Criar</p>
            </div>}
        <br/>
        <div>
        <label className="label">
            Nome: 
            <input name="name" type="text" value={state.name} onChange={handleChange}></input>
        </label>
        <br/>
        <label className="label">
            Email: 
            <input name="email" type="email" value={state.email} onChange={handleChange}></input>
        </label>
        <br/>
        <label className="label">
            Senha: 
            <input name="password" type="password" value={state.password} onChange={handleChange}></input>
        </label>
        <br/>
        <label className="label">
            Repetir Senha: 
            <input name="password_re" type="password" value={state.password_re} onChange={handleChange}></input>
            {!passwordMatch && <p style={{color: "red"}}>As senhas não são iguais!</p>}
        </label>
        <br/>
        <button onClick={handleSubmit}>Criar</button>
        </div>
    </div>);

}

export default CreateUser;