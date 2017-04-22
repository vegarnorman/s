import React from 'react'
import DOM from 'react-dom'

import { PersonForm } from './components/PersonForm.jsx'
import { GenericMap } from './components/GenericMap.jsx'

DOM.render(<PersonForm />, document.getElementById('app'))
//DOM.render(<GenericMap position={[59.955, 11.04]} zoom={14}/>, document.getElementById('app'))
