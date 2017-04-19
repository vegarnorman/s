import React from 'react'

export class Button extends React.Component {
  constructor (props) {
    super(props)

    this.buttonTypes = {
      primary: 'button button--primary',
      secondary: 'button button--secondary',
      disabled: 'button button--disabled',
      link: 'button button--link'
    }
  }

  render () {
    return (
      <button type={ this.props.submit === 'true' ? 'submit' : 'button'} className={ this.buttonTypes[this.props.buttonType] }><span className="button__text">{ this.props.text }</span></button>
    )
  }
}
