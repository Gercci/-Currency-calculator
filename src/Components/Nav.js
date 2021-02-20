import React from 'react'

export const Nav = (valuteCode, onclick, selectedValue) => (
    <div className={'nav__box'}>
        { valuteCode.length > 0
            ? valuteCode.map(item =>
            <button onClick={e => onclick(e.target.innerText)} className={selectedValue === item ? 'nav__box__item active' : 'nav__box__item'}>{ item }</button>
        )
        : 'Wait'
        }
    </div>
)