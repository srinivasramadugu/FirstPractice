import React from 'react';

export default function CustomHooks() {
    const [count,setCount] = React.useState(0);

    const btnIncrement = () => {
        setCount(prevCount => prevCount + 1)
    }

    const btnDecrement = () => {
        setCount(prevCount => prevCount - 1)
    }

    const btnReset = () => {
        setCount(0)
    }


    return (
        <div className="customstates_block">
            <p>{count}</p>

            <button onClick={btnIncrement}>Increment</button>
            <button onClick={btnDecrement}>Decrement</button>
            <button onClick={btnReset}>Reset</button>
        </div>
    )
}
