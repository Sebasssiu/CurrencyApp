import React, { useState } from 'react'

const ExchangeComparison = () => {
  const [data, setData] = useState({isLoading: true})
  const [body, setBody] = useState({currency: 'USD'})
  const [isLoading, setIsLoading] = useState(false)
  const today = () => {
    var today = new Date()
    var dd = today.getDate()
    var mm = today.getMonth()+1
    var yyyy = today.getFullYear()
    if(dd<10){
      dd='0'+dd
    } 
    if(mm<10){
      mm='0'+mm
    }
    today = yyyy+'-'+mm+'-'+dd
    return today
  }

  const getData = () => {
    setIsLoading(true)
    fetch('http://127.0.0.1:8000/exchangeRateComparison/',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
    .then(response => response.json())
    .then(response => {
      setData(response)
      setIsLoading(false)
    })
    .catch(error => setData(error))
  }

  return (
    <>
      <h1>Currency exchange rate</h1>
      <label>Select currency:  </label>
        <select 
          onChange={(e) => setBody({
            ...body,
            currency: e.target.value
          })} 
          name="cars"
          id="cars"
        >
        <option value="USD">USD</option>
        <option value="EU">EU</option>
      </select>
      <br />
      <label>Select start date:  </label>
      <input 
        type="date"
        id="start"
        name="trip-start"
        min="2015-01-01"
        max={today()}
        onChange={(e) => setBody({
          ...body,
          date1: e.target.value
        })}
      />
      <br />
      <label>Select end date:  </label>
      <input 
        type="date"
        id="start"
        name="trip-start"
        min="2015-01-01"
        max={today()}
        onChange={(e) => setBody({
          ...body,
          date2: e.target.value
        })}
      />
      <br />
      <button onClick={getData}>Request data</button>
      {data?.mean ? (
        <>
          <h5>Start date: {body.date1}</h5>
          <h5>End date: {body.date2}</h5>
          <h5>Currency: {body.currency}</h5>
          <h5>mean: {data.mean}</h5>
          <h5>max: {data.max}</h5>
          <h5>min: {data.min}</h5>
        </>
      ) : null}
      {isLoading ? (
        <h5>Is loading...</h5>
      ) : null}
    </>
  )
}

export default ExchangeComparison
