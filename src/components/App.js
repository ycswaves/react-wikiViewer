import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actionCreators from '../actions/actionCreators'

import SearchBox from './SearchBox'



function mapStateToProps(state) {
  return {
    query: state.query,
    wikiResult: state.wikiResult
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const Layout = React.createClass({
  render() {
    return (
      <div className="main">
        <SearchBox {...this.props}/>
      </div>
    )
  }
})

const App = connect(mapStateToProps, mapDispatchToProps)(Layout);

export default App