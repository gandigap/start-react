import { Field } from 'redux-form';

const FormControl = ({ input, meta: { touched, error }, children }) => {
  const hasError = touched && error;
  return (
    <div className={'form__textarea' + (hasError ? " error-validate" : "")}>
      {children}
      {hasError && <span className='message-error-validate'>{error}</span>}
    </div>
  )
}
export const TextArea = (props) => {
  const { input, meta, child, ...restProps } = props;
  return (<FormControl {...props}>
    <textarea {...input} {...restProps} name="" ></textarea>
  </FormControl>)
}

export const Input = (props) => {
  const { input, meta, child, ...restProps } = props;
  return (<FormControl {...props}>
    <input {...input} {...restProps} name="" ></input>
  </FormControl>)
}

export const createField = (placeholder, name, validators, component, props = {}, text) => (
  <div>
    <Field type="text"
      name={name}
      id=""
      placeholder={placeholder}
      component={component}
      validate={validators}
      {...props} />{text}
  </div>
)