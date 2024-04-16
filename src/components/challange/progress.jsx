import React, { useState, useEffect } from 'react';
import "./style.css";

export default function Progress() {
  const [progress, setProgress] = useState(0);
  const [input, setInput] = useState(0);

  useEffect(() => {
    if (input > 100) {
      alert('Please enter a value less than 100');
      setInput(0);
      setProgress(0);
    } else {
      setProgress(input);
    }
  }, [input]);

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <div>
      <div className="progress">
        <div className="progress-in" style={{ width: `${progress}%` }}>
          <div className="skill-percent">{progress}%</div>
        </div>
      </div>
      <input type="number" value={input} onChange={handleChange} />
    </div>
  );
}
