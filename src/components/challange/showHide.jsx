import React, { useState } from 'react';

function ShowHide() {
    const [show, setShow] = useState();

    return (
        <div>
            <h1>Hello</h1>
            <button onClick={() => setShow((show) => show)}>Click to Show/Hide</button>
            {show ? <h1>show content</h1> : null}
        </div>
    );
}

export default ShowHide;
