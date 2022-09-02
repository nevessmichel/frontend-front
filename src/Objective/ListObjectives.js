import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { ObjectivesListRequest } from "../requests/Requests";


const ListObjectives = () => {
    const [state, setState] = useState([])

    const formatObjectives = (objective) => {
        console.log(objective);
        return <tr>
            <td>{objective.name}</td>
            <td>{objective.description}</td>
        </tr>
    }

    useEffect(() =>{

        ObjectivesListRequest().then(objectives => {
            setState(objectives);
        });

    }, []);

    return(
        <div>
            <center>
            <Link to='/'>Início</Link>
            <table>
                <thead style={{justifyContent:'center'}}>
                    <tr>
                    <th colSpan={2}>
                        Lista de Objetivos
                    </th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                    <th>Nome</th>
                    <th>Descrição</th>
                </tr>
                
                {state.map(objective => formatObjectives(objective))}
                
            </tbody>
            </table>
            </center>
        </div>
    );
}

export default ListObjectives;