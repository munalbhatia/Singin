import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import classNames from 'classnames';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import dashboard from './dashboard';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import { withRouter } from "react-router-dom";


import {
  UserRegistration,
  UsernameValidation,
} from '../services/RegistrationService';
import Message from '../elements/Message';
import Error from '../elements/Error';
import {
  REGISTRATION_FIELDS,
  REGISTRATION_MESSAGE,
  COMMON_FIELDS,
  ERROR_IN_REGISTRATION,
} from '../MessageBundle';

export default class Registration extends Component {
  constructor (props) {
    super (props);
    this.state = {
      first_name: '',
      last_name: '',
      user_name: '',
      password: '',
      register: false,
      error: false,
      redirect: null
    };
  }

  handleOnChangeFirstName = e => {
    this.setState ({
      first_name: e.target.value,
    });
  };
  handleOnChangeLastName = e => {
    this.setState ({
      last_name: e.target.value,
    });
  };

  handleOnChangeUserName = e => {
    this.setState ({
      user_name: e.target.value,
    });
  };

  handleOnChangePassword = e => {
    this.setState ({
      password: e.target.value,
    });
  };
  function1 () {
    this.setState({ redirect: "/dashboard" });
}
  onSubmit = async e => {
  //  const history = useHistory();
    e.preventDefault ();
//    alert("First name : "+this.state.first_name+" Last name : "+this.state.last_name+"Selected Section"+this.state.dailog)
   
    const data = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      user_name: this.state.user_name,
      password: this.state.password,
    };
    let formData = new FormData();
    formData.append('user_name', this.state.user_name)
    formData.append('password', this.state.password)
    axios({
      method: 'post',
      url: 'http://localhost/dashboard/API_SAH_Dashboard/SignUpReact.php',
      data: formData,
      config: { headers: {'Content-Type': 'multipart/form-data' }}
  }) 
     .then(res => {
    if(res.data.error_code=='0'){
    alert("email Accout Already Exist");
//      this.setState({ redirect: "/register" });
    }
    if(res.data.error_code=='1'){
     
      alert("Sucessfully Register.")
      this.setState({ redirect: "/login" });
    }
  })
  .catch(function (response) {
      //handle error
      console.log(response)
  });

  };
  
  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }
    const {register, error, user_name_taken} = this.state;

    return (
      <div className="Registration" style={{marginTop:100}}>
        <h1> {REGISTRATION_FIELDS.REGISTRATION_HEADING} </h1> 
        <form
          onSubmit={this.onSubmit}
        >
          <div>
            <div className="fields">
              <p> {REGISTRATION_FIELDS.FIRST_NAME} </p>
              {' '}
              <input
                type="text"
                value={this.state.first_name}
                name="FirstName"
                onChange={this.handleOnChangeFirstName}
              />
              {' '}
            </div> <div className="fields">
              <p> {REGISTRATION_FIELDS.LAST_NAME} </p>
              {' '}
              <input
                type="text"
                value={this.state.last_name}
                name="LastName"
                onChange={this.handleOnChangeLastName}
              />
              {' '}
            </div> <div className="fields">
              <p> {COMMON_FIELDS.USER_NAME} </p>
              {' '}
              <input
                type="text"
                className={classNames ({error: user_name_taken})}
                value={this.state.user_name}
                name="Username"
                
                onBlur={this.handleOnBlur}
                onChange={this.handleOnChangeUserName}
                autoComplete="Username"
                required
              />

            </div> 
            <div className="fields">
              <p> {COMMON_FIELDS.PASSWORD} </p>
              {' '}
              <input
                type="password"
                value={this.state.password}
                name="Password"
                onChange={this.handleOnChangePassword}
                autoComplete="password"
                required
              />
            </div>
             <div className="buttons">
              <button
                type="submit"
                className="btn btn-primary"
                disabled={user_name_taken}
              >
                {' '}{REGISTRATION_FIELDS.REGISTER}{' '}
              </button>
              {' '}
              <Link to="/login"> {REGISTRATION_FIELDS.CANCEL} </Link>
              {' '}
            </div>{' '}
          </div>{' '}
        </form>
        {' '}
        {error && <Error message={ERROR_IN_REGISTRATION} />}
        {' '}
        {register && <Message message={REGISTRATION_MESSAGE} />}
        {' '}
      </div>
    );
  }
}
