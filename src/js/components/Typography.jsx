import React from 'react'

class H1 extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <h1 className="title title--level-1">{ this.props.children }</h1>
    )
  }
}

class H2 extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <h2 className="title title--level-2">{ this.props.children }</h2>
    )
  }
}

class H3 extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <h3 className="title title--level-3">{ this.props.children }</h3>
    )
  }
}

class H4 extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <h4 className="title title--level-4">{ this.props.children }</h4>
    )
  }
}

class Paragraph extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <p className="paragraph paragraph--normal">{ this.props.children }</p>
    )
  }
}

class Lead extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <p className="paragraph paragraph--intro">{ this.props.children }</p>
    )
  }
}

class FooterText extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <p className="paragraph paragraph--footer">{ this.props.children }</p>
    )
  }
}

class MetaData extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return {
      <p className="metadata">{ this.props.children }</p>
    }
  }
}

export { H1, H2, H3, H4, Paragraph, Lead, FooterText, MetaData }
