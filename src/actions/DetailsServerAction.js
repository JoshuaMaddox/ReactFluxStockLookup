import API from '../API'

const DetailsServerAction = {
  getDetails(symbol){
   console.log('I am the symbol in DetailsServerAction: ', symbol)
   API.fetchDetialedInfo(symbol) 
  }
}

export default DetailsServerAction
