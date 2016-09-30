import AppDispatcher from '../AppDispatcher'

const LookupAction = {
  receiveTicker(tickerInfo, details){
    console.log('LookupAction: tickerInfo & details: ', tickerInfo, details)
    AppDispatcher.dispatch({
      type: 'NEW_TICKERINFO',
      payload: { tickerInfo, details }
    })
  }
}

export default LookupAction
