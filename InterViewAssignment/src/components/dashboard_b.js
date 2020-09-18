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


export default class dashboard_b extends Component {

 
  render () {
 
    return (<div class="row"> 
    
    <Link to="/login" >
                     <h3 style={{marginRight:100,textAlign: 'right'}}>Logout</h3> </Link>
    <div class="element1 col-md-5" style={{marginLeft:100}}> 
    <img   style={{ width: '70%', height: 500,margin:30 }} src={require('../images/b.jpg')} />
    </div> 
    <div class="element2 col-md-5">
    <img   style={{ width: '70%', height: 500,margin:30 }} src={require('../images/c.webp')} /> 
    </div> 
    </div> 
        );
    
  }
}
