import React from "react";

const Strength = ({ password }) => {
  const getStrength = () => {
    if (password.length < 1) return "";
    else if (password.length < 4) return "Very Weak";
    else if (password.length < 6) return "Weak";
    else if (password.length < 8) return "Strong";
    else if (password.length > 10) return "Very Strong";
  };

  const passwordStrength = getStrength();

  if (!passwordStrength) return <React.Fragment />;
  return (
    <div className="passwordStrength">
      <span>Stength:</span>
      <span>{passwordStrength}</span>
    </div>
  );
};

export default Strength;
