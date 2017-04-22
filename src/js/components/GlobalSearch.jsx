import React from 'react'

export class GlobalSearch extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      placeholder: this.props.placeholder
    }

    this.handleInput = this.handleInput.bind(this)
    this.handleTypeahead = this.handleTypeahead.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
  }

  handleInput (event) {

  }

  handleTypeahead () {

  }

  handleSearch () {

  }

  render () {
    return (
      <div className="global-search">
        <div className="global-search__search search__global--ok">
          <form ref="form" action="#" method="get" className="global-search__search__form">
            <input ref="input" type="search" className="global-search__search__field" id="search-main" name="q" autocomplete="off" autocorrect="off" autocapitalize="off" onChange={this.handleInput} />
            <label ref="label" className="global-search__search__label" htmlFor="search-main">{ this.state.placeholder }</label>
            <button ref="button" type="submit" className="global-search__search__button">
              <span className="global-search__search__button__text">Søk</span>
            </button>
          </form>
        </div>

        <div className="global-search__suggestions">
          <ul className="global-search__suggestions__list">
            <li className="global-search__suggestions__item">
              <a className="link link--normal global-search__suggestions__trigger" href="/Skole-og-barnehage/Skole/Finn-skole/Barneskoler/Branas-skole/">
                <span className="link__text">Brånås skole</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
