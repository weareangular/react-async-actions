import React from "react";

export const Button = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        height: 48,
        width: 130,
        fontSize: 16,
        borderRadius: 4,
        border: "none",
        margin: 8,
        cursor: "pointer",
        fontWeight: "bold",
        color: "#282c34",
        backgroundColor: "#61dafb",
      }}
    >
      {text}
    </button>
  );
};
