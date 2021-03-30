import React from 'react'
import { useHistory } from 'react-router-dom'

const Menu = () => {
  const history = useHistory()
  return (
    <>
      <h1>Select option</h1>
      <h3>For checking currency exchange rate</h3>
      <button onClick={() => history.push('/exchangeRate')}>Press Here</button>
      <h3>For comparing currency exchange rate in 2 dates</h3>
      <button onClick={() => history.push('/exchangeComparison')}>Press Here</button>
    </>
  )
}

export default Menu;
