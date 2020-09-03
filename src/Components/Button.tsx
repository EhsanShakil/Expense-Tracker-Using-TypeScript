import React from "react";
import { useHistory } from "react-router-dom";

const Button = () => {
  const history = useHistory();
  const handleClick = () => {
    return history.push("/transaction-history");
  };
  return (
    <div>
      <button onClick={handleClick}>Transaction History</button>
    </div>
  );
};
export default Button;
