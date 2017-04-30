import React from 'react'

export class ExternalContent extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      title: this.props.title,
      url: this.props.url
    }
  }

  render () {
    return (
      <div className="ribbon ribbon--content">
        <div className="external-content" style={{height: '565px', width: '980px'}}>
          <div className="external-content__inner">
            <iframe title={ this.state.title } src={ this.state.url } frameborder="0" className="external-content__frame"></iframe>
          </div>
        </div>
      </div>
    )
  }
}
