import React from 'react'

import BasicForm from './connectForms/basicForm'


class AuthContainer extends React.Component{

  constructor(props){
    super(props)
  }

  handleSubmit = (values) => {
    console.log(values);
  }

  render() {
    return (
      <BasicForm onSubmit={this.handleSubmit} />
    );
  }
}

export default AuthContainer
