import React from 'react'

export class Breadcrumbs extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <ul className="hpi">
        { this.props.children }
      </ul>
    )
  }
}
