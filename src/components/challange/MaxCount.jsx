import React, { useState, useEffect } from 'react';

export default function MaxCount() {
    const [count, setCount] = useState(0);
    const [time, setTime] = useState(10);

    useEffect(() => {
        let timer;
        if (time > 0) {
            timer = setInterval(() => {
                setTime(time - 1);
            }, 1000);
        } else {
            clearInterval(timer);
        }
        
        // Cleanup function
        return () => clearInterval(timer);
    }, [time]); // Include time as a dependency

    return (
        <div>
            <h2>Number of clicks until expires</h2>
            <p>{count}</p>
            <p>Time left: {time} second(s)</p>
            {time !== 0 ? <button onClick={() => setCount(count + 1)}>+</button> : null}
        </div>
    );
}
