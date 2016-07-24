import {jsonp} from './ajax'
import * as Type from './actionTypes'

export function updateQuery(query) {
  return {
    type: Type.UPDATE_QUERY,
    query
  }
}

export function getResult(query) {
  console.log(query)
  const queryUrl = '//en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch='+query+'&callback=JSON_CALLBACK'
  return jsonp(queryUrl)
}