import React from 'react'

export class GlobalSearch extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      placeholder: this.props.placeholder,
      hasError: false,
      hasResults: false,
      results: []
    }

    this.timer = null

    this.handleInput = this.handleInput.bind(this)
    this.handleTypeahead = this.handleTypeahead.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
    this.setResults = this.setResults.bind(this)
  }

  handleInput (event) {
    if (this.timer !== null) {
      window.clearTimeout(this.timer)
    }
    this.timer = window.setTimeout(() => { this.handleTypeahead() }, 650)
  }

  handleTypeahead () {
    let url = this.props.url + '?q=' + this.refs.input.value + '&n=' + this.props.items

    let xhr = new XMLHttpRequest()
    xhr.open('GET', url, true)
    xhr.onload = () => {
      let results

      if (typeof xhr.responseText === 'string') {
        results = JSON.parse(xhr.responseText)
      } else {
        results = xhr.responseText
      }

      this.setState({results: results, hasResults: true, hasError: false})
    }

    xhr.onerror = () => {
      this.setState({hasError: true, hasResults: false})
    }

    xhr.send()
  }

  handleSearch () {
    this.refs.form.submit()
  }

  setResults (results) {
    this.setState({results: results})
  }

  render () {
    let suggestions = []

    if (this.state.hasError) {
      suggestions.push(
        <li className="global-search__suggestions__item" key="global-search-error">
          <p className="paragraph paragraph--normal">Beklager, vi kunne ikke hente søkeforslag. Du kan fortsatt søke på fritekst som normalt.</p>
        </li>
      )
    } else {
      this.state.results.forEach((product, index) => {
        suggestions.push(
          <li className="global-search__suggestions__item" key={'global-search-suggestion-' + index}>
            <a className="link link--normal global-search__suggestions__trigger" href={ product.Url }>
              <span className="link__text">{ product.Title }</span>
            </a>
          </li>
        )
      })
    }

    return (
      <div className="global-search">
        <div className="global-search__search search__global--ok">
          <form ref="form" action="#" method="get" className="global-search__search__form">
            <input ref="input" type="search" className="global-search__search__field" id="search-main" name="q" autoComplete="off" autoCorrect="off" autoCapitalize="off" onChange={this.handleInput} />
            <label ref="label" className="global-search__search__label" htmlFor="search-main">{ this.state.placeholder }</label>
            <button ref="button" type="submit" className="global-search__search__button">
              <span className="global-search__search__button__text">Søk</span>
            </button>
          </form>
        </div>

        <div className="global-search__suggestions" style={ this.state.hasResults || this.state.hasError ? {display: 'block'} : {display: 'none'} }>
          <ul className="global-search__suggestions__list">
            { suggestions }
          </ul>
        </div>
      </div>
    )
  }
}
