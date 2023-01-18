// LeftSidebar.js
// Author: Khali & Loris
const LeftSidebar = ({ budget }) => {
    const budgetColor = budget >= 0 ? "#03DAC6" : "#FF5733";



    return (
        <div style={styles.sidebar}>
            <div style={styles.budgetBox}>
                <div style={styles.budgetText}>Übriges Budget:</div>

                <div style={styles.budgetAmount}>
                    CHF <span style={{ color: budgetColor }}>{budget}</span>
                </div>

                <div style={styles.line} />

                <div style={styles.buttonContainer}>
                    <button style={styles.expenseButton}>Ausgabe</button>
                    <button style={styles.incomeButton}>Einnahme</button>
                </div>
            </div>
        </div>
    );
}



const styles = {
    sidebar: {
        width: '25%',
        backgroundColor: '#2c3e50 ',
        padding: '20px',
        position: 'absolute',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    budgetBox: {
        backgroundColor: '#727272',
        padding: '20px',
        borderRadius: '10px',
        width: '90%',
    },
    budgetText: {
        fontSize: '20px',
        marginBottom: '10px',
    },
    budgetAmount: {
        fontSize: '30px',
        marginBottom: '20px',
    },
    line: {
        width: '100%',
        height: '1px',
        backgroundColor: '#BDBDBD',
        marginBottom: '20px',
    },
    buttonContainer: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
    },
    expenseButton: {
        backgroundColor: '#FF5733 ',
        color: '#f8f9f9',
        fontWeight: 'bold',
        padding: '10px',
        borderRadius: '5px',
        border: 'none',
        cursor: 'pointer',
    },
    incomeButton: {
        backgroundColor: '#03DAC6',
        color: '#f8f9f9',
        fontWeight: 'bold',
        padding: '10px',
        borderRadius: '5px',
        border: 'none',
        cursor: 'pointer',
    },
};



export default LeftSidebar;