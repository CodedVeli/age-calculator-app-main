import React from 'react';
import { useContext } from 'react';
import Calculations from './context/AgeContextProvider';

const ShowAge = () => {
     
    const {calculatedDays,  calculatedMonths, calculatedYears  } = useContext(Calculations);

    const isNumber = (num) => !isNaN(num)
    return (
        <section className='flex flex-col mt-1 text-start gap-1 text-6xl text-Purple'>
           <p>
            <span>{isNumber(calculatedYears) ? calculatedYears: "--"}
                </span>
                {" "}
                years
            
           </p>
           <p>
            <span >
                {isNumber(calculatedMonths) ? calculatedMonths:"--"} 
            </span>
            {" "}
                months
            
           </p>
           <p>
            <span>
                {isNumber(calculatedDays) ? calculatedDays:"--"}
            </span>
            {" "}
                days
            
           </p>
        </section>
    );
};

export default ShowAge;