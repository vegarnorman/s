import React from 'react'

export class Selectable extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      checked: this.props.selected || false,
    }

    this.onCheck = this.onCheck.bind(this)
    this.getStatus = this.getStatus.bind(this)
    this.getValue = this.getValue.bind(this)
  }

  onCheck () {
    this.setState({checked: !this.state.checked})
  }

  getStatus () {
    return this.state.checked
  }

  getValue () {
    return this.refs.checkbox.value
  }

  render () {
    return (
      <div className="form-child">
        <label className="form-child__trigger">
          <input ref="checkbox" checked={ this.state.checked } type="checkbox" onChange={ this.onCheck } value={ this.props.value } />
          <div className="label">
            <div ref="mainLabel" className="form-child__property form-child__property--main">{ this.props.mainLabel }</div>
            <div ref="subLabel" className="form-child__property">{ this.props.subLabel }</div>
          </div>
        </label>
      </div>
    )
  }
}
