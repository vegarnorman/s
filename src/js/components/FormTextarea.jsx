import React from 'react'

export class FormTextarea extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      error: false,
      help: false,
      message: this.props.errorMessage || 'Default error message'
    }

    this.toggleHelp = this.toggleHelp.bind(this)
  }

  showError (message) {
    this.setState({error: true})
  }

  hideError () {
    this.setState({error: false})
  }

  toggleHelp () {
    this.setState({help: !this.state.help})
  }

  setValue (value) {
    this.refs.input.value = value
  }

  validate () {
    if (!this.props.validationRule) return true
    return this.props.validationRule.test(this.refs.input.value)
  }

  render () {
    return (
      <div className="form-input">
        <div className={'form-input__block form-input__block--main' + (this.state.error ? ' form-input__block--main--has-error' : '') + (!!this.props.infoText ? ' form-input__block--main--has-info' : '')}>
          <label
            ref="label"
            htmlFor={ this.props.id }
            className="form-input__label">
              { this.props.labelText } { this.props.required === 'true' ? <span className="form-input__label__required">*</span> : "" }
          </label>

          <div className="form-input-field-wrapper">
            <textarea
              ref="input"
              className="form-input-field form-input__textarea"
              id={ this.props.id }
              onChange={ this.props.onChange }
            ></textarea>
          </div>
        </div>

        <div className="form-input__block__wrapper" style={this.props.infoText ? {display: 'block'} : {display: 'none'}}>
          <button type="button" className="form-input__block__trigger form-input__message--info__trigger" onClick={ this.toggleHelp }>?</button>

          <div className="form-input__block form-input__message form-input__message--info" style={ this.state.help ? {display: 'block'} : {display: 'none'} }>{ this.props.infoText }</div>
        </div>

        <div className="form-input__block__wrapper">
          <div ref="message" className="form-input__block form-input__message form-input__message--error" style={ this.state.error ? {display: 'block'} : {display: 'none'}}> { this.state.message } </div>
        </div>
      </div>
    )
  }
}
