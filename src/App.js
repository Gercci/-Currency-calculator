import React,{useState, useEffect} from 'react'

import {Nav} from "./Components/Nav";
import {SelectValue} from "./Components/SelectValue";

import './main.css'

export const App = () => {
  const [valutes, setValutes] = useState()
  const [selectedValue, changeSelectedValue] = useState('USD')
  const [valuteCodes, setValuteCodes] = useState()

  useEffect(() => {
    fetch(`https://api.exchangeratesapi.io/latest?base=${selectedValue}`)
        .then(res => res.json())
        .then(data => {
          const array = new Array()
            for (const item in data.rates) {
                array.push(item)
            }
            setValutes(data.rates)
          return array
        })
        .then (array => setValuteCodes(array))
  }, [selectedValue])

  return (
      <>
          <details placeholder={'text'} className={'nav'}>
              <summary>{selectedValue}</summary>
            { valuteCodes !== undefined ? Nav(valuteCodes, changeSelectedValue, selectedValue, valutes) : 'wait' }
          </details>
      <ul className={'valutesList'}>
          { valuteCodes !== undefined ? SelectValue(valuteCodes, valutes, selectedValue) : 'wait' }
      </ul>
      </>
  )
}