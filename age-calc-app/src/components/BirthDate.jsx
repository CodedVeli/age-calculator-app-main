import React from 'react'

const BirthDate = ({title, initialData, setData, errorMessage, errorEmpty} ) => {
    
        return (
        <div className='flex flex-col gap-2  items-center'>
            <label className='uppercase text-smokey-grey flex self-start p-2'>{title}</label>
            <input type='number' value={initialData} onChange={(e)=>setData(e.currentTarget.valueAsNumber)} className='border border-light-grey p-2 w-[100%] rounded-[0.2rem] self-start -my-2.5'/>
            <p className='text-red-500'>{errorMessage} {errorEmpty}</p>
        </div>
    )  
}

export default BirthDate;