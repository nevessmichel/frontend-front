import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import * as actions from "../store/actions";
import { ObjectivesListRequest } from "../requests/Requests";
import {checkAuth} from "../Auth/checkAuth";


const ListObjectives = ({user}) => {
    const [state, setState] = useState([])
    const navigate = useNavigate();

    const formatObjectives = (objective) => {
        console.log(objective);
        return <tr>
            <td>{objective.name}</td>
            <td>{objective.description}</td>
        </tr>
    }

    useEffect(() =>{
        checkAuth(user, navigate)

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

const mapStateToProps = (state) => ({ user: state.user });
const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(ListObjectives)