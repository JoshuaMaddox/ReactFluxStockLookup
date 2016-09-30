import React, { Component } from 'react'
import LookupServerAction from '../actions/LookupServerAction'
import StockStore from '../stores/StockStore'
// import DetailsServerAction from '../actions/DetailsServerAction'


export default class SymbolSearch extends Component {

  constructor(props){

    super(props)
      this.state = {
        newTickerInfo: StockStore.getNewTickerInfo(),
        detailedInfo: StockStore.getDetailedInfo()
      }
      this.onChange = this.onChange.bind(this) 
      this.getNewTicker = this.getNewTicker.bind(this);
    console.log('newTickerInfo in SymbolSearch: ', this.state.newTickerInfo)
  }

  componentWillMount(){
    StockStore.startListening(this.onChange)
  }

  componentWillUnmount(){
    StockStore.stopListening(this.onChange)
  }

  onChange(){
    this.setState({
      newTickerInfo: StockStore.getNewTickerInfo(),
      detailedInfo: StockStore.getDetailedInfo()
    })
  }

  getNewTicker(e){
    e.preventDefault()
    let { ticker } = this.refs
    let tickerSymbol = ticker.value 
    ticker.value = ''
    LookupServerAction.getTickerInfo(tickerSymbol)
  }

  saveToDetailedView() {

  }

  deleteFromSimpleView() {

  }

  //delete to here

  render(){

    const { newTickerInfo, detailedInfo } = this.state
    let tickerInfoDispaly;

    if(detailedInfo){
      tickerInfoDispaly = (
        detailedInfo.map((item, num) => {
          return (
          <div className="shortContainer text-center content-container">
            <div className="col-sm-6 individualShortContainer blur" key={num}>
              <p className='stockInfo'>{item.Name}</p>
              <p className='stockInfo'>{item.Symbol}</p>
              <p className='stockInfo'>{item.LastPrice}</p>
              <p className='stockInfo'>{item.Change}</p>
            </div>
          </div>
          )
        })
       
      )
    } else {
      tickerInfoDispaly = <div></div>
    }

    //Delete to here

    return (
      <div className='row text-center'>
        <div className="col-sm-12 text-center">
          <form onSubmit={this.getNewTicker}>
            <div className="form-group">
              <input type="text" ref='ticker' className="form-control" id="tickerSymbol" placeholder="Enter Ticker Symbol Or Company Name" />
              <button type='submit' className="btn btn-block searchBtn">Submit</button>
            </div>
          </form>
          {/*<div className="row text-center">*/}
          {tickerInfoDispaly}
          {/*</div>*/}
        </div>
      </div>
    )
  }
}

