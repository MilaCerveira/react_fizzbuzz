import React, {useEffect, useState} from 'react';

const Fizzbuzz = () => {

    
    const [number, setNumber] = useState(1);
    const [answer, setAnswer] = useState(1);

    useEffect(() => {
        gameLogic();
    }, [number])

    const handleAdd = () => {
        setNumber(number + 1);
      }
    
      const handleSub = () => {
        setNumber(number - 1);
      }

    const gameLogic = () => {
        if (number % 3 === 0 && number % 5 === 0) {
            setAnswer("Ding Ding Bottle")
          } else if (number % 3 === 0) {
            setAnswer("Ding Ding")
          } else if (number % 5 === 0) {
            setAnswer("Bottle")
          } else {
            setAnswer(number);
          }
    }

    return (
        <>  
            <h1>The number is: {number}</h1>
            <button value={number} onClick={handleAdd}> + </button>
            <button value={number} onClick={handleSub}> - </button>
            <h2>The DingDing bottle number is: {answer}</h2>
        </>
    )
}


export default Fizzbuzz;