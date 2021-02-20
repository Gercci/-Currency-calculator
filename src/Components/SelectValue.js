import React from 'react'

import {CalculateValute} from "./Calculate";

export const SelectValue = ( valuteCode, valutes, selectedValue ) => (
    <>
        { valuteCode.map(item => {
            if(item !== selectedValue){
                return (
                    <div className={'valutesList__item'}>
                        <p className={'valutesList__item__name'}>{valutes[item]}</p>
                        <span className={'valutesList__item__button'}>{selectedValue}{item}</span>
                        <CalculateValute price={valutes[item]} />
                    </div>
                )
            }}
            )}
    </>
)