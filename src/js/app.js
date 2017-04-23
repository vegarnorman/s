import React from 'react'
import DOM from 'react-dom'

import { PersonForm } from './components/PersonForm.jsx'
import { GlobalSearch } from './components/GlobalSearch.jsx'

//DOM.render(<GlobalSearch url="https://www.skedsmo.kommune.no/api/search/suggestions" items={5} placeholder="Hva skjer'a Bagheera?" />, document.getElementById('app'))
DOM.render(<PersonForm />, document.getElementById('app'))
