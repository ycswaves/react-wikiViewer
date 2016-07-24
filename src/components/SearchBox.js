import React from 'react'

const SearchBox = ({query, getResult, updateQuery}) => {
  function handleChange(e) {
    const queryVal = e.target.value
    updateQuery(queryVal)
  }

  function handleQ() {

  }

  return (
    <div>
      <label htmlFor="">
        <input name="search" onChange={handleChange.bind(this)} value={query} placeholder="Enter your subject..." type="text"/>
        <button onClick={getResult.bind(null, query)}>Search</button>
      </label>
    </div>
  ) 
}



export default SearchBox