import React from 'react'

const Container = ({ children }) => {
    return (
        <div className=' dark:bg-[#060E2A] w-[100%] h-[100%] lg:px-20 px-10 bg-[#FFFFFF]  '>
            {children}
        </div>
    )
}

export default Container
