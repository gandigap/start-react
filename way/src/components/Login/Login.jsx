import React from 'react'
import { Field, reduxForm } from 'redux-form'

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field type="text" name="login" id="" placeholder={'Login'} component={'input'} /></div>
            <div><Field type="text" name="password" id="" placeholder={'Password'} component={'input'} /></div>
            <div><Field type="checkbox" name="rememberMe" id="" component={'input'} />Remember me</div>
            <div><button>Login</button></div>
        </form>

    )
}
const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)
const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData);
    }

    return (
        <div>
            <h2>Login</h2>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

export default Login;
