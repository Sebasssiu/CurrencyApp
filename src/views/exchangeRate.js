import React, { useState } from 'react'

const ExchangeRate = () => {
  const [data, setData] = useState({})
  const [body, setBody] = useState({currency: 'USD'})
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
    fetch('http://127.0.0.1:8000/exchangeRate/',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
    .then(response => response.json())
    .then(response => setData(response))
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
      <label>Select Date:  </label>
      <input 
        type="date"
        id="start"
        name="trip-start"
        min="2015-01-01"
        max={today()}
        onChange={(e) => setBody({
          ...body,
          date: e.target.value
        })}
      />
      <br />
      <button onClick={getData}>Request data</button>
      {data?.coin ? (
        <>
          <h5>Date: {body.date}</h5>
          <h5>Currency: {body.currency}</h5>
          <h5>Rate: {data.exchangeRate}</h5>
        </>
      ) : null}
    </>
  )
}

export default ExchangeRate
