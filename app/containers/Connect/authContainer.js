import React from 'react'

import BasicForm from './connectForms/basicForm'


class AuthContainer extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      useAuth: false
    }

    this.useAuth = this.useAuth.bind(this)
  }

  handleSubmit = (values) => {
    console.log(values);
  }
  useAuth = () => {
    this.setState({
      useAuth: !this.state.useAuth
    })
    console.log(this.state);
  }
  render() {
    return (
      <BasicForm onSubmit={this.handleSubmit} />
    );
  }
}

export default AuthContainer
