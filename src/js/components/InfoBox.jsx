import React from 'react'

export class InfoBox extends React.Component {
  constructor (props) {
    super(props)

    this.styles = {
      normal: 'ribbon ribbon--normal',
      warning: 'ribbon ribbon--warning',
      info: 'ribbon ribbon--content',
      error: 'ribbon ribbon--profile'
    }

    this.state = {
      level: this.props.level || 'normal',
      content: this.props.content
    }

    this.setLevel = this.setLevel.bind(this)
    this.setContent = this.setContent.bind(this)
  }

  setLevel (level) {
    this.setState({level: level})
  }

  setContent (content) {
    this.setState({content: content})
  }

  render () {
    return (
      <div className={this.styles[this.state.level]}>
        <div className="content-wrapper content-wrapper--xxxxxl">
          { this.state.content }
        </div>
      </div>
    )
  }
}
