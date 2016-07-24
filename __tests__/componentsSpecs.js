import SearchBox from '../src/components/SearchBox'
import React from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-addons-test-utils'

describe('testing components', () => {

  describe('testing SearchBox', () => {
    it('should have an input box', () => {      
      const searchBoxComponent = TestUtils.renderIntoDocument(<div><SearchBox /></div>)
      const searchInput = $j('input[name="search"]', ReactDOM.findDOMNode(searchBoxComponent))

      expect(searchInput.length).toBe(1)
      expect(searchInput.attr('placeholder')).toEqual('Enter your subject...')
    })
  })
})