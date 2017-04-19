import React from 'react'

export class Title extends React.Component {
  render () {
    return (
      <h1 className="title title--level-1">{ this.props.title }</h1>
    )
  }
}
