// EntryList.js
// Author: Loris Hütter
import React from 'react';

const EntryList = ({ entries, handleRemoveEntry, mainColor }) => {
  return (
    <div style={styles.entryList}>
      {entries.map((entry, index) => (
        <div key={index} style={styles.entry}>
          <div style={styles.entryTitle}>{entry.title}</div>
          <div style={styles.entryAmount}>
            CHF <span style={{ color: entry.amount >= 0 ? mainColor : '#F44336' }}>{entry.amount}</span>
          </div>
          <div style={styles.removeButton} onClick={() => handleRemoveEntry(index)}>X</div>
        </div>
      ))}
    </div>
  );
}

const styles = {
  entryList: {
    width: '70%',
    height: '100vh',
    overflow: 'scroll',
    padding: '20px',
    marginLeft: '25%',
    position: 'absolute',
    top: '0',
    right: '0',
    bottom: '0',
  },
  entry: {
    padding: '5px 20px',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '20px',
    backgroundColor: '#727272',
},
  entryTitle: {
    fontWeight: 'bold',
    fontSize: '20px',
  },
  entryAmount: {
    fontSize: '20px',
  },
  removeButton: {
    color: '#F44336',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
};

export default EntryList;