import React, { useState, useEffect } from 'react';

export default function Stopwatch() {
    const [time, setTime] = useState({ hour: 0, minute: 0, second: 0 });
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let timer;
        if (isRunning) {
            timer = setInterval(() => {
                setTime(prevTime => {
                    const newSecond = prevTime.second + 1;
                    const newMinute = prevTime.minute + Math.floor(newSecond / 60);
                    const newHour = prevTime.hour + Math.floor(newMinute / 60);
                    return {
                        hour: newHour%24,
                        minute: newMinute % 60,
                        second: newSecond % 60
                    };
                });
            }, 1000);
        } else {
            clearInterval(timer);
        }
        return () => clearInterval(timer);
    }, [isRunning]);

    const startStopwatch = () => {
        setIsRunning(true);
    };

    const stopStopwatch = () => {
        setIsRunning(false);
    };

    const resetStopwatch = () => {
        setTime({ hour: 0, minute: 0, second: 0 });
        setIsRunning(false);
    };

    return (
        <div>
            <h1>Stopwatch</h1>
            <div>{`${time.hour.toString().padStart(2, '0')}:${time.minute.toString().padStart(2, '0')}:${time.second.toString().padStart(2, '0')}`}</div>
            {!isRunning ? (
                <button onClick={startStopwatch}>Start</button>
            ) : (
                <button onClick={stopStopwatch}>Stop</button>
            )}
            <button onClick={resetStopwatch}>Reset</button>
        </div>
    );
}
