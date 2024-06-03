import { useState } from 'react'
import CurrencyConvertor from './components/currency-convertor'

function App() {

  return (
    <div className='min-h-screen flex flex-col items-center justify-center' style={{backgroundImage: `url('https://images.pexels.com/photos/2091399/pexels-photo-2091399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`}}>
      <div className='container'>
      <CurrencyConvertor />
      </div>
    </div>
  )
}

export default App
