import React from 'react'

export class FormInput extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      error: false,
      message: 'Vennligst fyll ut dette feltet som beskrevet'
    }
  }

  showError (message) {
    this.setState({message: message, error: true})
  }

  hideError () {
    this.setState({error: false})
  }

  validate () {
    if (!this.props.validationRule) return true
    return this.props.validationRule.test(this.refs.input.value)
  }

  render () {
    return (
      <div className="form-input">
        <div className={'form-input__block form-input__block--main' + (this.state.error ? ' form-input__block--main--has-error' : '')}>
          <label
            ref="label"
            htmlFor={ this.props.id }
            className="form-input__label">
              { this.props.labelText } { this.props.required === 'true' ? <span className="form-input__label__required">*</span> : "" }
          </label>

          <div className="form-input-field-wrapper">
            <input
              ref="input"
              className="form-input-field form-input__text"
              type={ this.props.inputType || "text" }
              id={ this.props.id }
              onChange={ this.props.onChange }
            />
          </div>
        </div>

        <div className="form-input__block__wrapper">
          <div ref="message" className="form-input__block form-input__message form-input__message--error" style={ this.state.error ? {display: 'block'} : {display: 'none'}}> { this.state.message } </div>
        </div>
      </div>
    )
  }
}
