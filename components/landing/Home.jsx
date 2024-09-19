'use client'

import React, { useState } from 'react'

const Home = () => {
  const [inputValue, setInputValue] = useState('')
  const [resultData, setResultData] = useState(null)
  
  const handleSubmit = (e) => {
    e.preventDefault()
    const lowercaseInput = inputValue.toLowerCase()
    const encodedInput = encodeURIComponent(lowercaseInput)
    const url = `https://legacy.cryptool.org/ncidapi/evaluate/single_line/ciphertext?ciphertext=${encodedInput}&architecture=Transformer&architecture=FFNN&architecture=LSTM&architecture=RF&architecture=NB`
    fetch(url, 
      {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(response => response.json())
    .then(data => {
      console.log('Submitted:', lowercaseInput, data)
      setResultData(data.payload)
    })
    console.log(encodedInput)
  }
  return (
    <div className='bg-slate-700 w-100 h-[1000vh] m=[20vh]'>
      <h1 className='font-bold text-white flex-row text-center pt-[30vh] text-4xl'>Welcome to CryptoKhan!</h1>
      <form onSubmit={handleSubmit} className='flex flex-col items-center mt-4'>
        <textarea
          className='rounded-lg px-4 py-2 w-[600px] h-32 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-200 text-gray-800 placeholder-gray-500 resize-y'
          placeholder='Enter text here'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          type='submit'
          className='mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
        >
          Submit
        </button>
      </form>
      {resultData && (
        <div className='mt-8 w-[600px] mx-auto bg-white rounded-lg p-4'>
          <h2 className='text-2xl font-bold mb-4 text-gray-800'>Results</h2>
          <table className='w-full border-collapse'>
            <thead>
              <tr className='bg-gray-200'>
                <th className='border p-2 text-left text-black font-bold'>Cipher</th>
                <th className='border p-2 text-left text-black font-bold'>Confidence</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(resultData)
                .sort(([, a], [, b]) => b - a)
                .map(([cipher, confidence]) => (
                  <tr key={cipher} className='hover:bg-gray-100'>
                    <td className='border p-2 text-black'>{cipher}</td>
                    <td className='border p-2 text-black'>{(confidence * 100).toFixed(2)}%</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>  
      )}
    </div>
  )
}

export default Home
