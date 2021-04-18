import React from 'react';
import { Field, reduxForm } from "redux-form";
import { TextArea } from "../../common/FormsControls/FormsControls";
import { maxLengthCreator, required } from "../../../utils/validators/validators";

const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={TextArea}
          validate={[required, maxLength50]}
          placeholder='Enter your message' name="newMessageBody" />
      </div>
      <div>
        <button>Отправить</button>
      </div>
    </form>
  )
}

export default reduxForm({ form: 'dialog-add-message-form' })(AddMessageForm);
