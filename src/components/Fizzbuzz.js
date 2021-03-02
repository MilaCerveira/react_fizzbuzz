import React, {useEffect, useState} from 'react';

const Fizzbuzz = () => {

    
    const [number, setNumber] = useState(1);
    const [answers, setAnswer] = useState(1);

    useEffect(() => {

    }, [number])

    const handleAdd = () => {
        setNumber(number + 1);
      }
    
      const handleSub = () => {
        setNumber(number - 1);
      }

    const gameLogic = () => {
        if (number % 3 === 0 && number % 5 === 0) {
            setAnswer("fizzbuz")
          } else if (number % 3 === 0) {
            setAnswer("fizz")
          } else if (number % 5 === 0) {
            setAnswer("buzz")
          } else {
            setAnswer(number);
          }
    }

    return (
        <>  
            <h1>The number is: {number}</h1>
            <button value={number} onClick={handleAdd}> + </button>
            <button value={number} onClick={handleSub}> - </button>
        </>
    )
}


export default Fizzbuzz;