import React from 'react';

import HomePage from '../Components/HomePage';
import SignUp from '../Components/SignUp';
import SignIn from '../Components/SignIn';
import Booking from '../Components/Bookings';

import {Route, BrowserRouter} from 'react-router-dom';

const routing = () => {
  return(
    <BrowserRouter>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/sign_in' component={SignIn} />
      <Route exact path='/sign_up' component={SignUp} />
      <Route exact path='/booking' component={Booking} />
    </BrowserRouter>
  );
}

export default routing;
