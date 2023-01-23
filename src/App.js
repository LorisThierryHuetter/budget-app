// App.js
// Author: Khali, Loris Hütter, Luka Petrovic
import React, { useState } from "react";
import LeftSidebar from "./LeftSidebar";
import Modal from "./Modal";
import EntryList from "./EntryList";
import PushNotification from "./PushNotification";

function App() {
  const [budget, setBudget] = useState(0);
  const [entries, setEntries] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState("");

  const [notificationState, setNotificationState] = useState(false);

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

  const handleAddEntry = (title, amount) => {
    let newEntries = [...entries];
    if (modalType === "expense") {
      newEntries.push({ title, amount: -amount });
      setBudget(budget - amount);
      if (budget - amount <= 0) {
        handleShowNotification();
      }
    } else if (modalType === "income") {
      newEntries.push({ title, amount });
      setBudget(budget + amount);
    }
    setEntries(newEntries);
    handleModalClose();
  };

  const handleRemoveEntry = (index) => {
    let newEntries = [...entries];
    let removedEntry = newEntries.splice(index, 1)[0];
    setEntries(newEntries);
    setBudget(budget - removedEntry.amount);
  };

  return (
    <div style={styles.text}>
      <LeftSidebar budget={budget} handleModalOpen={handleModalOpen} />
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
