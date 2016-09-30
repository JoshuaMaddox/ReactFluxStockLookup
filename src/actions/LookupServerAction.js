import API from '../API'

const LookupServerAction = {
  getTickerInfo(symbol){
    console.log('I am the ticker symbol in LookupServerAction: ', symbol)
    API.APIpromise(symbol)
  }
}

export default LookupServerAction