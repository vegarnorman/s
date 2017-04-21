import React from 'react'

export class FormReference extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className="content-wrapper content-wrapper--m">
        <div className="form-receipt">
          <h2 className="title title--level-2">Din referanse for denne henvendelsen er</h2>
          <div className="form-receipt__content">
            <p className="paragraph paragraph--normal">{ this.props.refCode }</p>
          </div>
        </div>
      </div>
    )
  }
}
