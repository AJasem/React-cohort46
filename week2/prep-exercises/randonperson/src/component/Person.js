import React from "react";

const Person = ({ first, last, email }) => {
  return (
    <ul>
      <li>{first}</li>
      <li>{last}</li>
      <li>{email}</li>
    </ul>
  );
};

export default Person;
