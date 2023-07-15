import React, { useContext } from 'react'
import BirthDate from './BirthDate'
import Calculations from './context/AgeContextProvider'

const CardHeader = () => {
    
const {  day, setDay, month, setMonth, year, setYear, error  } = useContext(Calculations);
    return (
        <div className='flex flex-row gap-2 max-w-sm   '>
            <BirthDate title='Day' initialData={day} setData={setDay} errorMessage={error?.first} errorEmpty={error?.fourth}/>
            <BirthDate title='Month' initialData={month} setData={setMonth} errorMessage={error?.second} errorEmpty={error?.fourth}/>
            <BirthDate title='Year' initialData={year} setData={setYear} errorMessage={error?.third} errorEmpty={error?.fourth}/>
        </div>
    )
}

export default CardHeader