import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { required } from '../../utils/validators/validators'
import { Input } from '../common/FormsControls/FormsControls'

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field type="text" name="login" id="" placeholder={'Login'}
                component={Input}
                validate={[required]} /></div>
            <div><Field type="text" name="password" id="" placeholder={'Password'}
                component={Input}
                validate={[required]} /></div>
            <div><Field type="checkbox" name="rememberMe" id=""
                component={Input}
                validate={[required]} />Remember me</div>
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
