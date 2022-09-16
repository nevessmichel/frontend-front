import React, { useState } from "react";
import { Link } from "react-router-dom";

const CreateObjective = () => {
    const [state,setState] = useState({name:"",description:""});
    const [submit, setSubmit] = useState(false);
    const [message, setMessage] = useState(null);

    const handleChange = (event) => {
        setState({...state, [event.target.name]: event.target.value})
    }

    const handleSubmit = () => {
        if(state.name.length !== 0 && state.description.length !== 0){
            var data = {...state};
            setMessage(null);
        }else{
            setMessage("Campos Inválidos")
        }
        setSubmit(true);
    }

    return(
        <div id="createObjective">
            <Link to='/'>Início</Link>
            <br/>
            <br/>
            <form>
            <label>
                Título: 
                <input type="text" name="name" value={state.name} onChange={handleChange}></input>
            </label>
            <br/>
            <label>
                Descrição: 
                <textarea name="description" value={state.description} onChange={handleChange}></textarea>
            </label>
            <br/>
            <button onClick={handleSubmit}>Criar</button>
            </form>
        </div>
    );
}

export default CreateObjective;