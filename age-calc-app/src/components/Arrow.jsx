import ArrowDown from '../assets/images/icon-arrow.svg'
import Calculations from './context/AgeContextProvider'
import { useContext } from 'react'
const Arrow = () => {

    const { setIsError } = useContext(Calculations);

    const handleShow = () => {
        setIsError(false)
    }
    return(
        <div className="mt-10 relative">
            <div className="border border-light-grey w-full absolute top-[40%]"></div>
            <button type="submit" onClick={handleShow} className="w-20 aspect-square bg-ourple rounded-full mx-auto flex items-center justify-center relative z-10 sm:sx-0 sm:ml-[87%]" >
                <img src={ArrowDown} alt="ArrowDown" />
            </button>
        </div>
    )
}

export default Arrow;