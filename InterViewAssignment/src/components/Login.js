import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LoginService from '../services/LoginService';
import Message from '../elements/Message';
import Error from '../elements/Error';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";

import dashboard_b from './dashboard_b';
import dashboard_c from './dashboard_c';
import axios from 'axios';
import {
  COMMON_FIELDS,
  REGISTRATION_FIELDS,
  LOGIN_FIELDS,
  LOGIN_MESSAGE,
  ERROR_IN_LOGIN,
} from '../MessageBundle';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user_name: '',
      password: '',
      error: false,
      
      dailog: 'C',
      loginSuccess: false,
    };
  }

  handleOnChangeUserName = (e) => {
    this.setState({
      user_name: e.target.value,
    });
  };

  handleOnChangePassword = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  aa = e => {
    this.setState ({
      dailog: e.target.value,
    });
  };
  onSubmit = async (e) => {
let formData = new FormData();
        formData.append('user_name', this.state.user_name)
        formData.append('password', this.state.password)
      
    axios({
      method: 'post',
      url: 'http://localhost/dashboard/API_SAH_Dashboard/SignInReact.php',
      data: formData,
      config: { headers: {'Content-Type': 'multipart/form-data' }}
  })
 .then(res => {
   console.log(res.data.error_code)
  if(res.data.error_code=='1'){

    alert("Email doesnot exist"); 
  }
  else if(res.data.error_code=='2'){

    alert("wrong password"); 
  }
  else if(res.data.error_code=='0'){
    if(this.state.dailog=="B"){
      console.log('naman')
      this.setState({ redirect: "/dashboard_b" });
    }
    if(this.state.dailog=="C"){
      this.setState({ redirect: "/dashboard_c" });
    }
    
    if(this.state.dailog=="A"){
      this.setState({ redirect: "/dashboard" });
    }}
})
.catch(function (response) {
   
    console.log(response)
});

};

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }

    const { loginSuccess, error } = this.state;

    return (
      <div className="Login" style={{marginTop:100}}>
        <h1> {LOGIN_FIELDS.LOGIN_HEADING} </h1> {' '}
        <form onSubmit={this.onSubmit}>
          <div>
          <div className="fields">
          <p> Select Section </p>
              {' '}
       
          <select
           onChange={this.aa}>
  <option value="A">A</option>
  <option value="B">B</option>
  <option selected value="C">C</option>
</select>
            </div> 
         
            <div className="fields">
              <p> {COMMON_FIELDS.USER_NAME} </p>    {' '}
              <input
                type="text"
                name="Name"
                onChange={this.handleOnChangeUserName}
                autoComplete="Username"
                required
              />
            </div>{' '}
            {' '}
            <div className="fields">
              {' '}
              <p> {COMMON_FIELDS.PASSWORD} </p>    {' '}
              <input
                type="password"
                name="Password"
                onChange={this.handleOnChangePassword}
                autoComplete="Password"
                required
              />{' '}
                  {' '}
            </div>{' '}
            {' '}
            <div className="buttons">
              {' '}
              <button
                type="button"
                onClick={this.onSubmit}
                className="btn btn-primary"
              >
                {' '}
                  {LOGIN_FIELDS.LOGIN}    {' '}
              </button>{' '}
                  <Link to="/register">
                     {REGISTRATION_FIELDS.REGISTER} </Link>  {' '}
               {' '}
            </div>{' '}
               {' '}
          </div>{' '}
           {' '}
        </form>{' '}
            {loginSuccess && <Message message={LOGIN_MESSAGE} />}    {' '}
        {error && <Error message={ERROR_IN_LOGIN} />}    {' '}
      </div>
    );
  }
}
