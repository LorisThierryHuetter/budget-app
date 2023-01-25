// Modal.js 
// Author: Loris Hütter
/* eslint-disable */          

import React, { useState } from 'react';

const Modal = ({ open, type, handleClose, handleAddEntry }) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const categories = ["Lohn", "Essen", "Kleider", "Freizeit", "Abonnements"];
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddEntry(title, amount, selectedCategory);
  }

  if (!open) {
    return null;
  }

  return (
    <div style={styles.modal}>
      <form onSubmit={handleSubmit}>
        <label style={styles.label}> 
          Überschrift:
          <input 
            type="text" 
            value={title} 
            onChange={e => setTitle(e.target.value)} 
            style={styles.input}
          />
        </label>
        <label style={styles.label}> 
          Betrag:
          <input 
            type="number" 
            value={amount} 
            onChange={e => setAmount(e.target.value)} 
            style={styles.input}
          />
        </label>
        <label style={styles.label}>
          Kategorie: 

          <select value={selectedCategory} onChange={e => setSelectedCategory(e.target.value)}>
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </label>
        <div style={styles.buttonContainer}>
          <button style={styles.cancelButton} onClick={handleClose}>Abbrechen</button>
          <button type="submit" style={styles.submitButton}>
            {type === 'expense' ? 'Subtract' : 'Add'}
          </button>
        </div>
      </form>
    </div>
  );
}

 

const styles = {
  modal: {
    position: 'fixed',
    zIndex: '10',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#727272',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '1px 1px 5px #111',
  },
  label: {
    color: '#f8f9f9',
  },
  input: {
    width: '100%',
    backgroundColor: '#f8f9f9',
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '5px',
    border: 'none',
  },
  buttonContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '20px',
  },
  submitButton: {
    backgroundColor: '#03DAC6',
    color: '#f8f9f9',
    fontWeight: 'bold',
    padding: '10px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
  },
  cancelButton: {
    backgroundColor: '#F44336',
    color: '#f8f9f9',
    fontWeight: 'bold',
    padding: '10px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
  },
};

 

export default Modal;