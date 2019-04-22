import React from 'react';
import { reduxForm, Field } from 'redux-form';
import Input from '../../general/input';

const LoginForm = props => {
    const { handleSubmit, logIn } = props;
    return (
        <form onSubmit={handleSubmit(logIn)}>
            <div className="row">
                <Field col="s12" id="email" name="email" component={Input} type="email" placeholder="Email" />
                <Field col="s12" id="password" name="password" component={Input} type="password" placeholder="Password"/>
            </div>
            <div className="row">
                <div className="col s12 center">
                    <button className="btn btn-info">Log In</button>
                </div>
            </div>
        </form>
    )
}

function validate({ email, password }) {
    const errors = {};
    if (!email) {
        errors.email = 'Please enter your email';
        console.log('hello')
    }
    if (!password) {
        errors.password = 'Please enter your password';
    }
    return errors;
}

export default reduxForm({
    form: 'login-form',
    validate: validate
})(LoginForm);
