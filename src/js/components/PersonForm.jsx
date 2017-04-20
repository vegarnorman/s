import React from 'react'
import { Button } from './Button.jsx'
import { FormInput } from './FormInput.jsx'

export class PersonForm extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      phone: ''
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInputChange (event) {
    if (!this.refs[event.target.id].validate()) {
      this.refs[event.target.id].showError('Vennligst fyll ut feltet som beskrevet.')
    } else {
      this.refs[event.target.id].hideError()
    }

    let newState = {}
    newState[event.target.id] = event.target.value
    this.setState(newState)
  }

  handleSubmit (event) {
    event.preventDefault()
    console.info("Hi! I thought you might like to know what the current state looks like since you're submitting this form. Here's what I got:", this.state)
  }

  render () {
    return (
      <div className="content-wrapper content-wrapper--xxxl">
        <form onSubmit={this.handleSubmit}>
          <FormInput ref="firstname" id="firstname" labelText="Fornavn" required="true" validationRule={/^[a-zA-Z0-9 ]+$/} onChange={this.handleInputChange} />
          <FormInput ref="lastname" id="lastname" labelText="Etternavn" required="true" validationRule={/^[a-zA-Z0-9 ]+$/} onChange={this.handleInputChange} />
          <FormInput ref="email" id="email" labelText="E-post" required="true" onChange={this.handleInputChange} />
          <FormInput ref="phone" id="phone" labelText="Telefon" required="false" validationRule={/^[0-9]{8}$/}onChange={this.handleInputChange} />
          <Button ref="submit" buttonType="primary" submit="true" text="Send inn" />
        </form>
      </div>
    )
  }
}
