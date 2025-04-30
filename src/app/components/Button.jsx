import React from 'react'

const Button = ({ children }) => {

    return (
        <div>
            <button className='dark:bg-[#545969] bg-[#EDEDED] py-2 px-3 rounded-2xl border-gray-400 text-black '>{children}</button>
        </div>
    )
}

export default Button
