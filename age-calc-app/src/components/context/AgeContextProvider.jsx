import { createContext, useState } from "react";

const Calculations = createContext()

function Provider({children}) {

     const [day, setDay] = useState();
     const [month, setMonth] = useState();
     const [year, setYear] = useState();
     const [error, setIsError] = useState({
        first: "",
        second: "",
        third: "",
        fourth: "",
        
     });

     const [calculatedDays, setCalculatedDays] = useState(0)
     const [calculatedMonths, setCalculatedMonths] = useState(0)
     const [calculatedYears, setCalculatedYears] = useState(0)


    const handleSubmit = (event) => {
        event.preventDefault();

        calculateAge();
    }

      

        const calculateAge = () => {

            if (!day || !year || !month) {
                setIsError((prev) => { 
                  return { ...prev, fourth: 'Field cannot be empty'};
                });
                setCalculatedDays(0);
                setCalculatedMonths(0);
                setCalculatedYears(0);
              }

    
    if (day <= 0 || day > 31) {
      setIsError((prev) => { 
        return { ...prev, first: 'Please enter a valid day (1-31)'};
      });
      setCalculatedDays(0);
      setCalculatedMonths(0);
      setCalculatedYears(0);
    }

      if (month <= 0 || month > 12) {
        setIsError((prev) => {
        return { ...prev, second: 'Please enter a valid month'};
        
      })
      setCalculatedDays(0);
      setCalculatedMonths(0);
      setCalculatedYears(0);
      }
      if (year > new Date().getFullYear() || year <= 1923) {
        setIsError((prev) => {
        return {...prev, third: 'Please enter a valid year (not in the future)'};
      })
      
      setCalculatedDays(0);
      setCalculatedMonths(0);
      setCalculatedYears(0);
      } 
      
      const date = new Date().getTime();

      const birthday = new Date(`${year}-${month}-${day}`)

      const ageMilliseconds = date - birthday;
      const ageInYears = ageMilliseconds / 1000 /60 / 60 / 24 / 365;
      console.log(ageInYears)

      const ageInMonths = (ageInYears % 1) * 12;
      const ageInDays = (ageInMonths % 1) * 31;
      const days = Math.floor(ageInDays);
      const months = Math.floor(ageInMonths);
      const years = Math.floor(ageInYears);

      setCalculatedDays(days);
      setCalculatedMonths(months);
      setCalculatedYears(years);

    
  }
  

    
    
    
    return <Calculations.Provider value={{
        calculatedDays,
        calculatedMonths,
        calculatedYears,
        setDay,
        setMonth,
        setYear,
        day,
        month,
        year,
        calculateAge,
        error,
        handleSubmit,
        setIsError
        }}>
        {children}
    </Calculations.Provider>



}

export { Provider };
export default Calculations;