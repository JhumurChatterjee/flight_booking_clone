import React from 'react';

import HomePage from '../Components/HomePage';
import SignUp from '../Components/SignUp';
import SignIn from '../Components/SignIn';

import {Route, BrowserRouter} from 'react-router-dom';

const routing = () => {
  return(
    <BrowserRouter>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/sign_in' component={SignIn} />
      <Route exact path='/sign_up' component={SignUp} />
    </BrowserRouter>
  );
}

export default routing;
