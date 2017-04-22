import React from 'react'

export class Ribbon extends React.Component {
  constructor (props) {
    super(props)

    this.styles = {
      normal: 'ribbon ribbon--normal',
      content: 'ribbon ribbon--content',
      warning: 'ribbon ribbon--warning',
      profile: 'ribbon ribbon--profile'
    }

    this.state = {
      ribbonStyle: this.styles[this.props.ribbonStyle]
    }
  }

  render () {
    return (
      <div className={ this.state.ribbonStyle }>{ this.props.children }</div>
    )
  }
}
