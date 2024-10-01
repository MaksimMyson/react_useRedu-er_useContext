import React from 'react';
import Timer from './Timer';

const App = () => {
  return (
    <div className="app">
      <Timer title="Український час" offset={0} />
      <Timer title="США Вашингтон час" offset={-7} />
      <Timer title="Гонконг час" offset={6} />
    </div>
  );
};

export default App;
