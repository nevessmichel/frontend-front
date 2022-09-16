import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import * as actions from "../store/actions";
import { useNavigate } from "react-router-dom";
import { LoginRequest } from '../requests/Requests';

export const Login = ({ user, setUser}) => {
  const navigate = useNavigate();
  const [state, setState] = useState({name:"",email:"",password:"",password_re:""});
  const [message, setMessage] = useState(null);

  const handleChange = (event) => {
    event.preventDefault();
    setState({...state, [event.target.name]: event.target.value})
  }

  const handleSubmit =  () => {
    if(state.email.length !== 0 && state.password.length !== 0){
        setMessage("Logando Usuário");
        var data = {email:state.email, password:state.password}
        LoginRequest(data).then(result =>{
            console.log(result);
            setUser(result.data)
            window.confirm("Login Realizado");
            navigate("/");
        }).catch(err=>{
            console.log(err);
            window.confirm(err.message);
        });
        
    }else{
        setMessage("Campos Inválidos")
    }
}

  return (
    <div>
      <h2>Login</h2>
      <br/>
      <div>
                <p style={{color:"red"}}>{message}</p>
            </div>
      <br/>
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
      <button onClick={handleSubmit}>Logar</button>
      <br/>
      <br/>
      <button onClick={()=>navigate("/cadastro")}>Registrar</button>
    </div>
  )
}


const mapStateToProps = (state) => ({ user: state.user });
const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Login)
