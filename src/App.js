// App.js
// Author: Khali & Loris Hütter
import React, { useEffect,useState } from 'react';
import LeftSidebar from './LeftSidebar';
import Modal from './Modal';
import EntryList from './EntryList';
import PushNotification from "./PushNotification";

function App() {
  const [budget, setBudget] = useState(0);
  const [entries, setEntries] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState('');
  const [notificationState, setNotificationState] = useState(false);
  const [data, setData] = useState(null);
  const [identifierKey, setIdentifierKey] = useState(null);

  useEffect(() => {
        let idFromCache = localStorage.getItem('identifierKey');
        if (!idFromCache) {
          idFromCache = generateRandomString();
          localStorage.setItem('identifierKey', idFromCache);
          postData(idFromCache, entries);
        } else {
          setIdentifierKey(idFromCache);
          getData(idFromCache);
          setBudget(calculateTotalBudget(entries));
        }
      }, []);
    
      const handleSave = () => {
        postData(identifierKey, entries);
      }
    
      const handleUpdate = () => {
        updateUser(identifierKey, entries);
      }

      const updateUser = (identifierKey, entries) => {
        let idFromCache = localStorage.getItem('identifierKey');
        if (!idFromCache) {
                idFromCache = generateRandomString();
                localStorage.setItem('identifierKey', idFromCache);
                postData(idFromCache, entries);
              } else {
                setIdentifierKey(idFromCache);
        }
        const data = {
                identifierKey: identifierKey,
                entries: entries
        }
        fetch(`https://budget-app.loris-huetter.ch/budgetHandler.php?identifierKey=${identifierKey}`, {
          method: "PUT",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json"
          }
        })      
        .then(response => response.json())
        .then(data => {
          console.log("Success:", data);
        })
        .catch(error => {
          console.error("Error:", error);
        });
        console.log("Sent was: ", JSON.stringify({identifierKey: identifierKey, entries: entries}));
        getData(identifierKey);
      }


      const postData = (identifierKey, entries) => {
        const data = {
            identifierKey: identifierKey,
            entries: entries
        }
        console.log("Entries is: ", entries);
        fetch(`https://budget-app.loris-huetter.ch/budgetHandler.php?identifierKey=${identifierKey}`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' }
        })
        .then(res => res.json())
        .then(response => console.log('Success:', JSON.stringify(response)))
        .catch(error => console.error('Error:', error));
        console.log("Sent was: ", JSON.stringify(data));
      }
    
      const getData = (identifierKey) => {
        fetch(`https://budget-app.loris-huetter.ch/budgetHandler.php?identifierKey=${identifierKey}`)
          .then(response => response.json())
          .then(data => setEntries(JSON.parse(data.entries)))
          .catch(error => console.log(error));
        setBudget(calculateTotalBudget(entries));
        console.log("TOTALBUDGET?????: ", calculateTotalBudget(entries));
      }

      function generateRandomString() {
        const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let result = '';
        for (let i = 0; i < 10; i++) {
          result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;
      }

      const handleReset = () => {
        localStorage.removeItem('identifierKey');
        setIdentifierKey(null);
      }

  const handleModalOpen = (type) => {
    setModalOpen(true);
    setModalType(type);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleShowNotification = () => {
    setNotificationState(true);
  };

  const handleCloseNotification = () => {
    setNotificationState(false);
  };

      const handleAddEntry = (title, amount, selectedCategory) => {
        let newEntries = [...entries];
        if (modalType === 'expense') {
          newEntries.push({ title, amount: - parseInt(amount), selectedCategory});
          setBudget(budget - parseInt(amount));
          if (budget - amount <= 0) {
            handleShowNotification();
          }
        } else if (modalType === 'income') {
          newEntries.push({ title, amount: parseInt(amount), selectedCategory});
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

      const calculateTotalBudget = (entries) => {
        let totalBudget = 0;
        for (let i = 0; i < entries.length; i++) {
            totalBudget += entries[i].amount;
        }
        return totalBudget;
    }    
           

  return (
      <div style={styles.text}>
        <LeftSidebar budget={budget} handleModalOpen={handleModalOpen} handleUpdate={handleUpdate} handleReset={handleReset}/>
        <Modal 
          open={modalOpen} 
          type={modalType} 
          handleClose={handleModalClose} 
          handleAddEntry={handleAddEntry} 
        />
        <PushNotification
        open={notificationState}
        handleClose={handleCloseNotification}
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
    backgroundColor: "#F5F5F5",
    color: "#f8f9f9",
  },
};

export default App;
