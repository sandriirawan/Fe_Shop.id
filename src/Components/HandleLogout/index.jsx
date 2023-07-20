import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.removeItem('fullname');
    navigate('/home');
  };

  return (
    <button
      onClick={handleLogout}
      style={{
        backgroundColor: "rgba(219, 48, 34, 1)",
        color: "white",
        padding: "5px",
        border: "none"
      }}
      onMouseEnter={(e) => e.target.style.backgroundColor = "rgb(173, 0, 0)"}
      onMouseLeave={(e) => e.target.style.backgroundColor = "rgba(219, 48, 34, 1)"}
    >
      Logout
    </button>
  );
};

export default Logout;
