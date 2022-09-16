import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import * as actions from "../store/actions";
import { useNavigate } from "react-router-dom";

export const Logout = ({ user, setUser}) => {
  const navigate = useNavigate();
  
  
useEffect(() => {
    setUser(null)
    navigate("/login")
  }, [])

  return (
    <div>
    </div>
  )
}


const mapStateToProps = (state) => ({ user: state.user });
const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Logout)
