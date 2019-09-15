import React from 'react';
import {Link} from 'react-router-dom';

class HomePage extends React.Component {
  componentDidMount() {
    let users = JSON.parse(localStorage.getItem('Users') || '[]');
    let adminUser = {};

    if (users.length === 0) {
      adminUser = { id: 1, name: 'Admin User', email: 'admin@example.com', mobile: '1234567890', password: 123456, admin: true };

      users = [...users, adminUser];
      localStorage.setItem('Users', JSON.stringify(users));
    }
  }
  
  render() {
    return(
      <>
        <Link to='/sign_up'>Sign Up</Link>
        <Link to='/booking'>Booking</Link>
      </>
    );
  }
}

export default HomePage;
