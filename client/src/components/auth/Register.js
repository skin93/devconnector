import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import PropTypes from 'prop-types';

const Register = ({ setAlert }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const { name, email, password, password2 } = formData;

  const handleChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    if (password !== password2) {
      setAlert('Password do not match', 'danger');
    } else {
      console.log('SUCCESS');
    }
  };

  return (
    <Fragment>
      <h1 className='large text-primary'>Sign Up</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Create Your Account
      </p>
      <form className='form' onSubmit={e => handleSubmit(e)}>
        <div className='form-group'>
          <input
            onChange={e => handleChange(e)}
            type='text'
            placeholder='Name'
            name='name'
            value={name}
            required
          />
        </div>
        <div className='form-group'>
          <input
            onChange={e => handleChange(e)}
            type='email'
            placeholder='Email Address'
            name='email'
            value={email}
            required
          />
          <small className='form-text'>
            This site uses Gravatar so if you want a profile image, use a
            Gravatar email
          </small>
        </div>
        <div className='form-group'>
          <input
            onChange={e => handleChange(e)}
            type='password'
            placeholder='Password'
            name='password'
            value={password}
            minLength='6'
            required
          />
        </div>
        <div className='form-group'>
          <input
            onChange={e => handleChange(e)}
            type='password'
            placeholder='Confirm Password'
            name='password2'
            value={password2}
            minLength='6'
            required
          />
        </div>
        <input type='submit' className='btn btn-primary' value='Register' />
      </form>
      <p className='my-1'>
        Already have an account? <Link to='/login'>Sign In</Link>
      </p>
    </Fragment>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired
};

export default connect(null, { setAlert })(Register);
