import React, { Component } from 'react'
import StockStore from '../stores/StockStore'

export default class DetailedView extends Component {

  constructor(props){
    super(props)
      this.state = {
        detailedInfo: StockStore.getDetailedInfo()
      }
      this.onChange = this.onChange.bind(this) 
  }

  componentWillMount(){
    StockStore.startListening(this.onChange)
  }
  
  componentWillUnmount(){
    StockStore.stopListening(this.onChange)
  }

  onChange(){
    this.setState({
      detailedInfo: StockStore.getDetailedInfo()
    })
  }

  render(){
    const { detailedInfo } = this.state
    let detailedInfoDisplay
    if(detailedInfo){
      detailedInfoDisplay= (
        detailedInfo.map((item, num) => {
          return (
          <div className="shortContainer text-center">
            <div className="col-sm-6 individualShortContainer" key={num}>
              <p className='stockInfo'>{item.Name}</p>
              <p className='stockInfo'>{item.Symbol}</p>
              <p className='stockInfo'>{item.LastPrice}</p>
              <p className='stockInfo'>{item.High}</p>
              <p className='stockInfo'>{item.Low}</p>
              <p className='stockInfo'>{item.LastPrice}</p>
              <p className='stockInfo'>{item.MarketCap}</p>
              <p className='stockInfo'>{item.Volume}</p>
              <p className='stockInfo'>{item.ChangePercent}</p>
            </div>
          </div>
          )
        })
       
      )
    } else {
      detailedInfoDisplay = <div></div>
    }

    return (
      <div>
      {detailedInfoDisplay}
      </div>
    )
  }
}