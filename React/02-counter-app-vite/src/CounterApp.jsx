import PropTypes from 'prop-types'
import { useState } from 'react'

export const CounterApp =({value}) => {

    const [counter, setCounter] = useState(value);

    const handleAdd = () => {

        setCounter((c)=> c+1)

    };

    const handleSustract = () => setCounter ((c)=> c-1);
    const Reset = () => setCounter(value)

    return(
        <>
            <h1>CounterApp</h1>
            <h2>{counter}</h2>
            <button onClick={handleAdd}> +1 </button>
            <button onClick={handleSustract}> -1 </button>
            <button onClick={Reset}> reset </button>
        </>
    )

}


CounterApp.propTypes = {
  value : PropTypes.number.isRequired
}

