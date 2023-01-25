// Modal.js 
// Author: Loris Hütter
/* eslint-disable */          

import React, { useState } from 'react';

const Modal = ({ open, type, handleClose, handleAddEntry }) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');

const DropdownData = [{id: 0, label: "Lohn"}, {id: 1, label: "Essen"}, {id: 2, label: "Kleider"}, {id: 3, label: "Freizeit"}, {id: 4, label: "Abonnements"}];

const Dropdown = () => {
  const [isOpen, setOpen] = useState(false);
  const [items, setItem] = useState(DropdownData);
  const [selectedItem, setSelectedItem] = useState(null);
  
  const toggleDropdown = () => setOpen(!isOpen);
  
  const handleItemClick = (id) => {
    selectedItem == id ? setSelectedItem(null) : setSelectedItem(id);
  }}

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddEntry(title, amount);
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
        <div style={styles.buttonContainer}>
          <button style={styles.cancelButton} onClick={handleClose}>Abbrechen</button>
          {/* <div className='dropdown'>
      <div className='dropdown-header' onClick={toggleDropdown}>
        {selectedItem ? items.find(item => item.id == selectedItem).label : "Select your destination"}
        <i className={`fa fa-chevron-right icon ${isOpen && "open"}`}></i>
      </div>
      <div className={`dropdown-body ${isOpen && 'open'}`}>
        {items.map(item => (
          <div className="dropdown-item" onClick={e => handleItemClick(e.target.id)} id={item.id}>
            <span className={`dropdown-item-dot ${item.id == selectedItem && 'selected'}`}>• </span>
            {item.label}
          </div>
        ))}
      </div>
    </div>  */}
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