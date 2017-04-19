import React from 'react'
import DOM from 'react-dom'

import { Title } from './components/Title.jsx'
import { Link } from './components/Link.jsx'
import { Button } from './components/Button.jsx'
import { FormInput } from './components/FormInput.jsx'
import { PersonForm } from './components/PersonForm.jsx'

DOM.render(<PersonForm />, document.getElementById('app'))
