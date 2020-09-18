import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import classNames from 'classnames';
import axios from 'axios';
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


export default class dashboard extends Component {

 
  render () {
 
    return (<div> 
  <Link to="/login" >
                     <h3 style={{marginRight:100,textAlign: 'right'}}>Logout</h3> </Link>
                    
      <img   style={{ width: '70%', height: 500,margin:30 }} src={require('../images/e.jpg')} />
  
      
      </div> 
          );

  
  }
}
