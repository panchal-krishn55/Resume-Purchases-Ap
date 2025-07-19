import React from 'react';
import './style.css';
import BuyResumeButton from './BuyResumeButton'; // ← Import new component

function App() {
  return (
    <div className="App">
      {/* ... other content ... */}

      <div className="button-group">
        <a href="#START" className="start-button">Start Now</a>
        <a href="#TOUR" className="Tour-button">Take Tour</a>
        <BuyResumeButton /> {/* ← Add button here */}
      </div>
    </div>
  );
}

export default App;
