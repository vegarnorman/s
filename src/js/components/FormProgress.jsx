import React from 'react'

export class FormProgress extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      progress: this.props.progress || 0
    }

    this.setProgress = this.setProgress.bind(this)
    this.getProgress = this.getProgress.bind(this)
  }

  setProgress (progress) {
    this.setState({ progress: progress })
  }

  getProgress () {
    return this.state.progress
  }

  render () {
    return (
      <div className="form-progress">
        <div className="form-progress__bar">
          <div className="form-progress__done" style={{ width: this.state.progress + '%' }}></div>
        </div>

        <span className="form-progress__text">{ this.state.progress }% fylt ut</span>
      </div>
    )
  }
}
