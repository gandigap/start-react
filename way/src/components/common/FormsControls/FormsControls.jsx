const FormControl = ({ input, meta, child, ...props }) => {
  const hasError = meta.touched && meta.error;
  return (
    <div className={'form__textarea' + (hasError ? " error-validate" : "")}>
      {props.children}
      {hasError && <span className='message-error-validate'>{meta.error}</span>}
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