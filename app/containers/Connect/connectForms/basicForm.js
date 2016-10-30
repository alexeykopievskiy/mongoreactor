import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class BasicForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    console.log(this.props.authCheck);
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="server_address">Server Address</label>
          <Field name="server_address" component="input" type="text"/>
        </div>
        <div>
          <label htmlFor="server_port">Server Port</label>
          <Field name="server_port" component="input" type="text"/>
        </div>
        <div>
          <label htmlFor="use_auth">Use auth</label>
          <Field name="use_auth" id="use_auth" onChange={value => console.log(value.target)} component="input" type="checkbox"/>
        </div>
        <button type="submit">Connect</button>
      </form>
    );
  }
}

// Decorate the form component
BasicForm = reduxForm({
  form: 'contact' // a unique name for this form
})(BasicForm);

export default BasicForm;
