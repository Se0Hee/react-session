import React, { useState } from 'react';

const StateComponent = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>State Component</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default StateComponent;
