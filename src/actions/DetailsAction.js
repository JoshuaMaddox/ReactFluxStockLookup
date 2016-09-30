import AppDispatcher from '../AppDispatcher'

const DetailsAction = {
  receiveDetails(details){
    console.log('DetailsAction has a fresh set of Details: ', details)
    AppDispatcher.dispatch({
      type: 'FRESH_DETAILS',
      payload: { details }
    })
  }
}

export default DetailsAction

