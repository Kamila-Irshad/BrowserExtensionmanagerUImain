import React from 'react'

const Button = ({ children , onClick}) => {
    

    return (
        <div>
            <button 
            onClick={onClick} className='bg-[#545969] py-2 px-3 rounded-2xl border-gray-400 text-black '>{children}</button>
        </div>
    )
}

export default Button
