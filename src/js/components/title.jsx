import React from 'react'

export class Title extends React.Component {
  constructor (props) {
    super(props)

    this.classes = 'title title--level-' + this.props.level
  }
  render () {
    return (
      <h1 className={ this.classes }>{ this.props.children }</h1>
    )
  }
}
