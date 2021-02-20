import React, {useState} from 'react'

export const CalculateValute = ({price}) => {
    const [enteredNumber, setEnteredNumber] = useState(1)
    return (
        <div className={'valutesList__item__calculater'}>
            <input type="number" value={enteredNumber} onChange={e => setEnteredNumber(e.target.value)} />
            <input disabled={true} type="number" value={enteredNumber * price} />
        </div>
    )
}