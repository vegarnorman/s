import React from 'react'
import DOM from 'react-dom'

import { PersonForm } from './components/PersonForm.jsx'
import { GlobalSearch } from './components/GlobalSearch.jsx'
import { ExternalContent } from './components/ExternalContent.jsx'

//DOM.render(<GlobalSearch url="https://www.skedsmo.kommune.no/api/search/suggestions" items={5} placeholder="Hva skjer'a Bagheera?" />, document.getElementById('app'))
//DOM.render(<PersonForm />, document.getElementById('app'))
DOM.render(<ExternalContent title="Dette er en tittel" url="https://skedsmo.kommunetv.no/bruker/full.aspx" />, document.getElementById('app'))
