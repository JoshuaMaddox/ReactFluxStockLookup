import { EventEmitter } from 'events'
import AppDispatcher from '../AppDispatcher'

let _newSymbolInfo = null
let _viewSymbolArray = []
let _detailedInfo = []

class StockStore extends EventEmitter {
  constructor(){
    super()
    AppDispatcher.register(action => {
      switch(action.type){
        case 'NEW_TICKERINFO':
          _newSymbolInfo = _viewSymbolArray.push(action.payload.tickerInfo[0])
          _detailedInfo.push(Object.assign({},action.payload.details))
          console.log('I am _newSymbolInfo in the Store: ', _detailedInfo)
          this.emit('CHANGE')
      }
    })
  }

  startListening(cb) {
    this.on('CHANGE', cb)
  }

  stopListening(cb) {
    this.on('CHANGE', cb)
  }

  getNewTickerInfo() {
    return _newSymbolInfo
  }

  getDetailedInfo() {
    return _detailedInfo
  }
}

export default new StockStore