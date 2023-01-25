// App.js
// Author: Khali & Loris Hütter
import React, { useState } from 'react';
import LeftSidebar from './LeftSidebar';
import Modal from './Modal';
import EntryList from './EntryList';

function App() {
  const [budget, setBudget] = useState(0);
  const [entries, setEntries] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState('');
  
  const handleModalOpen = (type) => {
        setModalOpen(true);
        setModalType(type);
      }
    
      const handleModalClose = () => {
        setModalOpen(false);
      }

      const handleAddEntry = (title, amount) => {
        let newEntries = [...entries];
        if (modalType === 'expense') {
          newEntries.push({ title, amount: - parseInt(amount) });
          setBudget(budget - parseInt(amount));
        } else if (modalType === 'income') {
          newEntries.push({ title, amount });
          setBudget(budget + parseInt(amount));
        }
        setEntries(newEntries);
        handleModalClose();
      }

      const handleRemoveEntry = (index) => {
        let newEntries = [...entries];
        let removedEntry = newEntries.splice(index, 1)[0];
        setEntries(newEntries);
        setBudget(budget - removedEntry.amount);
      }

  return (
      <div style={styles.text}>
        <LeftSidebar budget={budget} handleModalOpen={handleModalOpen} />
        <Modal 
          open={modalOpen} 
          type={modalType} 
          handleClose={handleModalClose} 
          handleAddEntry={handleAddEntry} 
        />
        <EntryList 
          entries={entries} 
          handleRemoveEntry={handleRemoveEntry} 
          mainColor="#03DAC6"
        />
      </div>
  );
}

const styles = {
  text: {
    backgroundColor: '#F5F5F5',
    color: '#f8f9f9',
  },
};

export default App;