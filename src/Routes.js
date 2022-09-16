import './App.css';
import {Routes, Route } from "react-router-dom";

import CreateUser from './Auth/CreateUser';
import CreateObjective from './Objective/CreateObjective';
import ListObjectives from './Objective/ListObjectives';
import Login from './Auth/Login';
import Logout from './Auth/Logout';
import Home from './Home';

const MyRoutes = () => {
  return (
    <div className="App">
        <Routes>
          <Route path="/">
            <Route index  element={<Home />}/>
            <Route path="login" element={<Login />} />
            <Route path="logout" element={<Logout />} />
            <Route path="cadastro" element={<CreateUser />} />
            <Route path="objetivos/criar" element={<CreateObjective />} />
            <Route path="objetivos/listar" element={<ListObjectives />} />
          </Route>
        </Routes>
    </div>
  );
}

export default MyRoutes;
