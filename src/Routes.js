import './App.css';
import {BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import CreateUser from './Auth/CreateUser';
import CreateObjective from './Objective/CreateObjective';
import ListObjectives from './Objective/ListObjectives';
import Home from './Home';

const MyRoutes = () => {
  return (
    <div className="App">
        <Routes>
          <Route path="/">
            <Route index  element={<Home />}/>
            <Route path="cadastro" element={<CreateUser />} />
            <Route path="/objetivos/criar" element={<CreateObjective />} />
            <Route path="/objetivos/listar" element={<ListObjectives />} />
          </Route>
        </Routes>
    </div>
  );
}

export default MyRoutes;
