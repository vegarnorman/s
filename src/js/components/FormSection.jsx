import React from 'react'

export class FormSection extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      name: this.props.name,
      description: this.props.description,
      complete: this.props.complete || false,
      active: this.props.active || false
    }

    this.getStyle = this.getStyle.bind(this)
    this.setComplete = this.setComplete.bind(this)
    this.setActive = this.setActive.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  getStyle () {
    return 'form-section-header form-section-header--clickable' +
      (this.state.complete ? ' form-section-header--complete' :  ' form-section-header--incomplete') +
      (this.state.active ? ' form-section-header--active' : 'form-section-header--inactive')
  }

  setComplete (status) {
    this.setState({complete: status})
  }

  setActive (status) {
    this.setState({active: status})
  }

  handleClick (event) {
    event.preventDefault()
    this.setState({active: !this.state.active})
  }

  render () {
    return (
      <div>
        <button ref="button" className={ this.getStyle() } onClick={ this.handleClick }>
          <span className="form-section-header__name">{ this.state.name }</span>
          <span className="form-section-header__description">{ this.state.description }</span>
        </button>

        <div ref="content" style={ this.state.active ? {display: 'block'} : {display: 'none'} }>
          { this.props.children }
        </div>
      </div>
    )
  }
}
