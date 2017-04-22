import React from 'react'

class Breadcrumbs extends React.Component {
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

class BreadcrumbItem extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <li className="hpi__item"><a href={ this.props.url } className="link link--hpi"><span className="link__text">{ this.props.text }</span></a></li>
    )
  }
}

export { Breadcrumbs, BreadcrumbItem }
