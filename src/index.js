import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import Layout from './components/Layout'
import SymbolSearch from './components/SymbolSearch'
import DetailedView from './components/DetailedView'

render(
  <Router history={browserHistory}>
    <Route path='/ReactFluxStockLookup/' component={Layout}>
      <Route path='/search-by-symbol' component={SymbolSearch}></Route>
      <Route  path='/detailed-view' component={DetailedView}></Route>
    </Route>
  </Router>,
  document.getElementById('root')
);
