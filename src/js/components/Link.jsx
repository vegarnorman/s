import React from 'react'

export class Link extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <a href={ this.props.link }>{ this.props.text }</a>
    )
  }
}
