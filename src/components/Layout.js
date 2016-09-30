import React, { Component } from 'react'
import  { Link } from 'react-router'
import StockStore from '../stores/StockStore'
import DetailedView from './DetailedView'
import SymbolSearch from './SymbolSearch'
export default class Layout extends Component {
  // constructor() {
  //   super();
    
  // }


render() {







    return (
      <div className='container'>
    
          <video poster="/ReactFluxStockLookup/src/imgs/stockPreview.jpg" id="bgvid" playsInLine autoPlay muted loop >
            <source src="/ReactFluxStockLookup/src/video/stock.mp4" type="video/mp4" />
          </video>
          <div className="row topRow">
            <div className="col-sm-4">
              <Link to='/detailed-view' activeClassName='disabled' className='linkBtns'>
                Detailed View 
              </Link>
              <Link to='/search-by-symbol' activeClassName='disabled' className='linkBtns'>
                Search By Symbol
              </Link>
            </div>
            <div className="col-sm-8">
              {this.props.children} 
            </div>
          </div> 
      </div>
    )
  }
}
