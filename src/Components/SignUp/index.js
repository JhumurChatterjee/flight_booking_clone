import React from 'react';
import TextField from '../Shared/TextField';
import SubmitButton from '../Shared/SubmitButton';
import validateSignupInput from '../../Validators/signupValidator';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      mobile: '',
      password: '',
      passwordConfirmation: '',
      errors: {},
      isLoading: false
    }
  }
  
  onChange = (e) => {
    this.setState({ [e.target.name ] : e.target.value });
  }

  isValid = () => {
    const { errors, isValid } = validateSignupInput(this.state);
    if(!isValid) {
      this.setState({ errors });
    }
    return isValid;
  }

  onSubmit = (e) => {
    e.preventDefault();
    if(this.isValid()) {
      this.setState({ errors: {}, isLoading: true })
      this.storeUserData();
      this.props.history.push('/');
    }
  }

  storeUserData = () => {
    const { name, email, mobile, password, passwordConfirmation } = this.state;
    let users = JSON.parse(localStorage.getItem('Users') || '[]');
    let user = {};
    let userLists = []

    if(users.length === 0) {
      user = { id: 1, name: name, email: email, mobile: mobile, password: password }
    } else {
      let lastUser = users[users.length - 1]
      user = { id: lastUser.id + 1, name: name, email: email, mobile: mobile, password: password }
    }
    userLists = [...users, user];
    localStorage.setItem('Users', JSON.stringify(userLists));
  }

  render() {
    const { name, email, mobile, password, passwordConfirmation, isLoading, errors } = this.state;

    return(
      <div className='row justify-content-center mt-3'>
        <div className='col-md-6'>
          <div className='login-form'>
            <form>
              <h3 className='text-center'>Sign Up</h3>

              <TextField
                error={errors.name}
                label='Name'
                onChange={this.onChange}
                value={name}
                fieldName='name'
                type='text'
                autoComplete='off'
                id='signup_name'
                autoFocus={true}
              />

              <TextField
                error={errors.email}
                label='Email'
                onChange={this.onChange}
                value={email.toLowerCase()}
                fieldName='email'
                type='email'
                autoComplete='off'
                id='signup_email'
              />

              <TextField
                error={errors.mobile}
                label='Mobile Number'
                onChange={this.onChange}
                value={mobile}
                fieldName='mobile'
                type='number'
                autoComplete='off'
                id='signup_mobile'
              />

              <TextField
                error={errors.password}
                label='Password'
                onChange={this.onChange}
                value={password}
                fieldName='password'
                type='password'
                autoComplete='off'
                id='signup_password'
              />

              <TextField
                error={errors.passwordConfirmation}
                label='Password Confirmation'
                onChange={this.onChange}
                value={passwordConfirmation}
                fieldName='passwordConfirmation'
                type='password'
                autoComplete='off'
                id='signup_password_confirmation'
              />

              <SubmitButton
                value='Sign Up'
                disabled={isLoading}
                onClick={this.onSubmit}
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
