import React, { useState, useEffect } from "react";
import Person from "./Person";

const PersonController = () => {
  const [person, setPerson] = useState({ first: "", last: "", email: "" });
  const getPerson = async () => {
    try {
      const response = await fetch("https://www.randomuser.me/api?results=1");
      const data = await response.json();
      const randomPerson = {
        first: data.results[0].name.first,
        last: data.results[0].name.last,
        email: data.results[0].email,
      };
      setPerson(randomPerson);
    } catch (error) {
      console.log(error, "Error Getting Data");
    }
  };

  const handelClick = () => {
    getPerson();
  };
  useEffect(() => {
    getPerson();
  }, []);

  return (
    <div>
      <button onClick={handelClick}>Generate Random Person</button>
      <Person {...person} />
    </div>
  );
};

export default PersonController;
