// PushNotification.js
// Author: Luka Petrovic

const PushNotification = ({ open, handleClose }) => {
  if (!open) {
    return null;
  }

  return (
    <div style={styles.modal}>
      <p>Budget ist überschritten!</p>
      <div style={styles.buttonContainer}>
        <button style={styles.cancelButton} onClick={handleClose}>
          Schliessen
        </button>
      </div>
    </div>
  );
};

const styles = {
  modal: {
    position: "fixed",
    zIndex: "10",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#727272",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "1px 1px 5px #111",
    textAlign: "center"
  },
  cancelButton: {
    backgroundColor: "#F44336",
    color: "#f8f9f9",
    fontWeight: "bold",
    padding: "10px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
  },
};

export default PushNotification;
