import React from 'react';
import { reduxForm, Field } from 'redux-form';
import Input from '../../general/input';

const SignUpForm = props => {
    const { handleSubmit, signUp } = props;
    return (
        <form onSubmit={handleSubmit(signUp)}>
            <div className="loginModalTitle">Sign Up</div>
            <div className="inputFieldsContainer">
                <Field col="s12" id="first_name" name="first_name" component={Input} placeholder="First Name" />
                <Field col="s12" id="last_name" name="last_name" component={Input} placeholder="Last Name" />
                <Field col="s12" id="height" name="height" type="number" component={Input} placeholder="Height (Inches)" />
                <Field col="s12" id="weight" name="weight" type="number" component={Input} placeholder="Weight (lbs)" />
                <Field col="s12" id="signupEmail" name="email" component={Input} placeholder="Email" />
                <Field col="s12" id="signupPassword" name="password" component={Input} type="password" placeholder="Password" />
                <Field col="s12" id="confirmpassword" name="confirmpassword" component={Input} type="password" placeholder="Confirm Password" />
            </div>
            <div className="buttonsContainer">
                <button className="signUpModalButton btn btn-info">Sign Up</button>
            </div>
        </form>
    )
}

function validate({ first_name, last_name, height, weight, email, password, confirmpassword }) {
    const errors = {};
    if (!first_name) {
        errors.first_name = 'Please enter first name';
    }
    if (!last_name) {
        errors.last_name = 'Please enter last name';
    }
    if (!height) {
        errors.height = 'Please enter your height';
    }
    if (!weight) {
        errors.weight = 'Please enter your weight';
    }
    if (!email) {
        errors.email = 'Please enter your email';
    }
    if (!password) {
        errors.password = 'Please enter your password';
    }
    if (!confirmpassword) {
        errors.confirmpassword = 'Required';
    } else if (confirmpassword !== password) {
        errors.confirmpassword = 'Password did not match! Please try again.';
    }
    return errors;
}

export default reduxForm({
    form: 'sign-up-form',
    validate: validate
})(SignUpForm);
