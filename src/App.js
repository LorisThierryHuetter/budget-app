// App.js
// Khali
import React, { useState } from 'react';
import LeftSidebar from './LeftSidebar';

function App() {
  const [budget, setBudget] = useState(0);

  return (
      <div style={styles.text}>
        <LeftSidebar budget={budget} />
      </div>
  );
}

const styles = {
  text: {
    color: '#f8f9f9',
  },
};

export default App;