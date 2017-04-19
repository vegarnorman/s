import React from 'react'

export class FormInput extends React.Component {
  render () {
    return (
      <div className="form-input">
        <div className="form-input__block form-input__block--main">
          <label htmlFor={ this.props.id } className="form-input__label">{ this.props.labelText } { this.props.required === 'true' ? <span className="form-input__label__required">*</span> : "" }</label>
          <div className="form-input-field-wrapper">
            <input className="form-input-field form-input__text" type={ this.props.inputType || "text" } id={ this.props.id } onChange={ this.props.onChange } />
          </div>
        </div>
      </div>
    )
  }
}
