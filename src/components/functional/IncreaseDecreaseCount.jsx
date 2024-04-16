import React, { useState } from 'react';
import './IncreaseDecreaseCount.css';

function IncreaseDecreaseCount() {
    const [count, setCount] = useState(0);
    return (
        <div className="increase-decrease-container">
            <h1 className="count-display">{count}</h1>
            <button className="button reset-button" onClick={() => setCount(0)}>Reset</button>
            <button className="button" onClick={() => setCount(count + 1)}>Increase</button>
            <button className="button" onClick={() => {if (count > 0) setCount(count - 1)}}>Decrease</button>
        </div>
    )
}

export default IncreaseDecreaseCount;
