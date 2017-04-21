import React from 'react'

export class Title extends React.Component {
  constructor (props) {
    super(props)

    this.classes = 'title title--level-' + this.props.level
  }
  render () {
    return (
      <h1 className="title title--level-1">{ this.props.title }</h1>
    )
  }
}
