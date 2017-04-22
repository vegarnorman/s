import React from 'react'

export class ContentWrapper extends React.Component {
  constructor (props) {
    super(props)

    this.styles = {
      m: 'content-wrapper content-wrapper--m',
      l: 'content-wrapper content-wrapper--l',
      xl: 'content-wrapper content-wrapper--xl',
      xxl: 'content-wrapper content-wrapper--xxl',
      xxxl: 'content-wrapper content-wrapper--xxxl',
      xxxxl: 'content-wrapper content-wrapper--xxxxl',
      xxxxxl: 'content-wrapper content-wrapper--xxxxxl',
    }

    this.state = {
      size: this.props.size || 'xxl'
    }

    this.setSize = this.setSize.bind(this)
  }

  setSize (size) {
    this.setState({size: size})
  }

  render () {
    return (
      <div className={ this.state.size }>{ this.props.children }</div>
    )
  }
}
