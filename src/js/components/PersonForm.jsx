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
          <FormInput id="firstname" labelText="Fornavn" required="true" onChange={this.handleInputChange} />
          <FormInput id="lastname" labelText="Etternavn" required="true" onChange={this.handleInputChange} />
          <FormInput id="email" labelText="E-post" required="true" onChange={this.handleInputChange} />
          <FormInput id="phone" labelText="Telefon" required="false" onChange={this.handleInputChange} />
          <FormInput id="password" labelText="Passord" required="true" inputType="password" onChange={this.handleInputChange} />
          <Button buttonType="primary" submit="true" text="Send inn" />
        </form>
      </div>
    )
  }
}
