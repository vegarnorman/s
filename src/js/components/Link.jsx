import React from 'react'

export class Link extends React.Component {
  constructor (props) {
    super(props)

    this.styles = {
      normal: 'link link--normal',
      normalExternal: 'link link--normal link--external',
      light: 'link link--light',
      lightExternal: 'link link--light link--external',
      breadcrumb: 'link link--hpi',
      shortcut: 'link link--shortcut',
      shortcutExternal: 'link link--shortcut link--external',
      list: 'link link--list',
      listExternal: 'link link--list link--external',
      boxed: 'link link--boxed',
      boxedExternal: 'link link--boxed link--external',
      more: 'link link--more',
      prominent: 'link link--prominent'
    }
  }

  render () {
    return (
      <a href={ this.props.url } className={ this.styles[this.props.linkStyle] }><span className="link__text">{ this.props.children }</span></a>
    )
  }
}
