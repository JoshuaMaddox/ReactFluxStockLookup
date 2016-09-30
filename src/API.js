import jsonp from 'jsonp'
import LookupAction from './actions/LookupAction'
import LookupServerAction from './actions/LookupServerAction'


const API = {

  APIpromise: (ticker) => {
    console.log('IN apipromise', ticker)
    let promise = new Promise((resolve, reject) => {
      console.log('IN apipromise', ticker)
      jsonp(`//dev.markitondemand.com/MODApis/Api/v2/Lookup/jsonp?input=${ticker}`, (err1, tickerInfo) => {
        if(err1) {
          reject(err1)
        } else {
          //Response.data will pull the info out of the larger object
          resolve(tickerInfo)
        }
      })
    })

    // Used to find the type of promise and what's contained inside: console.log('typeof promise: ', typeof promise, 'promise = ', promise);
    promise
    .then((tickerInfo) => {
        jsonp(`//dev.markitondemand.com/MODApis/Api/v2/Quote/jsonp?symbol=${tickerInfo[0].Symbol}`, (err, details) => {
          console.log('APIpromise tickerInfo: ', tickerInfo)
          console.log('APIpromise details', details)
          return LookupAction.receiveTicker(tickerInfo, details)
        })
      })
    .catch((err1) => console.log('Err1 in promise .catch'))
  }

}

export default API




