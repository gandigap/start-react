import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { required } from '../../utils/validators/validators';
import { Input } from '../common/FormsControls/FormsControls';
import { connect } from 'react-redux';
import { login } from '../../redux/authReducer'
import { Redirect } from 'react-router';

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field type="text" name="email" id="" placeholder={'Email'}
                component={Input}
                validate={[required]} /></div>
            <div><Field type="password" name="password" id="" placeholder={'Password'}
                component={Input}
                validate={[required]} /></div>
            <div><Field type="checkbox" name="rememberMe" id=""
                component={Input}
                validate={[required]} />Remember me</div>
            <div><button>Login</button></div>
        </form>

    )
}
const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"} />
    }

    return (
        <div>
            <h2>Login</h2>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login })(Login);
