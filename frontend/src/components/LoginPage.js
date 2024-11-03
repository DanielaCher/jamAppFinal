import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [userType, setUserType] = useState("");
  const [userRole, setUserRole] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const navigate = useNavigate();

  // Effect to validate the form whenever inputs change
  useEffect(() => {
    if (username && password && userType && userRole) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [username, password, userType, userRole]);

  const handleAdminClick = () => {
    setUserType("Admin");
  };

  const handleUserClick = () => {
    setUserType("User");
  };

  const handleSingerClick = () => {
    setUserRole("Singer");
  };

  const handleInstrumentClick = () => {
    setUserRole("Instrument");
  };

  const handleSubmit = () => {
    // You may keep this check here if additional submission validations are required.
    if (!isFormValid) {
      return; // Prevent submission if the form isn't valid
    }

    localStorage.setItem("userRole", userRole);
    localStorage.setItem("username", username);
    // Implement your authentication logic here
    if (userType === "Admin") {
      navigate("/searchPage");
    } else {
      navigate("/waiting-room");
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Login Page</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={styles.input}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={styles.input}
      />
      <div style={styles.buttonContainer}>
        <button
          style={{
            ...styles.button,
            backgroundColor: userType === "Admin" ? "#0056b3" : "#007bff", // Darker shade for Admin button when selected
          }}
          onClick={handleAdminClick}
        >
          Admin
        </button>
        <button
          style={{
            ...styles.button,
            backgroundColor: userType === "User" ? "#0056b3" : "#007bff", // Darker shade for User button when selected
          }}
          onClick={handleUserClick}
        >
          User
        </button>
      </div>
      <div style={styles.buttonContainer}>
        <button
          style={{
            ...styles.button,
            backgroundColor: userRole === "Singer" ? "#0056b3" : "#007bff", // Different shade for Singer button when selected
          }}
          onClick={handleSingerClick}
        >
          Singer
        </button>
        <button
          style={{
            ...styles.button,
            backgroundColor: userRole === "Instrument" ? "#0056b3" : "#007bff", // Different shade for Instrument button when selected
          }}
          onClick={handleInstrumentClick}
        >
          Instrument
        </button>
      </div>
      <div style={styles.buttonContainer}>
        <button
          style={styles.submitButton}
          onClick={handleSubmit}
          disabled={!isFormValid} // Disable the button if the form is not valid
        >
          Submit
        </button>
      </div>
    </div>
  );
};

// Adding inline styles for simplicity
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "#f7f7f7",
    textAlign: "center",
    padding: "20px", // Added padding for better spacing around content
  },
  title: {
    marginBottom: "20px",
  },
  input: {
    padding: "10px",
    marginBottom: "15px", // Increased margin for better spacing
    width: "250px", // Increased width for better usability
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "16px",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-between", // Space out child buttons
    width: "250px", // Set a fixed width for uniformity
    marginBottom: "15px", // Spacing between groups of buttons
  },
  button: {
    flex: 1, // Allow buttons to take equal space
    margin: "0 5px", // Margin between buttons
    padding: "10px",
    fontSize: "16px",
    cursor: "pointer",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#007bff",
    color: "white",
    transition: "background-color 0.3s ease",
  },
  submitButton: {
    marginTop: "20px",
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
    backgroundColor: "#28a745", // Different color for Submit button
    color: "white",
    border: "none",
    borderRadius: "5px",
  },
};

export default LoginPage;
