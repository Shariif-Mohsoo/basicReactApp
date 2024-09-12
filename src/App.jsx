// import React from "react";
//import the style sheet
import { useState, useEffect } from "react";
import heading from "./style.module.css";

const App = () => {
  const [term, setTerm] = useState("");
  const [term2, setTerm2] = useState("");
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000); // Update every second

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array means this effect runs once after the initial render

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!term) setTerm2("");
    else setTerm2(term + " we are welcoming you in.");
  };
  //getting the dayName
  const dayName = time.toLocaleDateString("en-US", { weekday: "long" });
  const monthName = time.toLocaleDateString("en-US", { month: "long" });
  return (
    <div className={heading.container}>
      <h1 className={`${heading.heading_1} ${heading.heading_padding}`}>
        Hello Mohsoo Today Is {dayName}
      </h1>
      <h2 className={heading.heading_2}>
        Time is: {time.toLocaleTimeString()}
      </h2>
      <h3 className={heading.heading_3}>Year is {time.getFullYear()}</h3>
      <h4 className={heading.heading_4}>
        Month Name is {monthName} && Number is {time.getMonth() + 1}
      </h4>
      <form onSubmit={handleSubmit} className={heading["input-div"]}>
        <input
          onChange={(event) => {
            setTerm(event.target.value);
          }}
          value={term}
          className={heading.input}
          autoFocus
          placeholder="Enter Your Name"
        />
        <br />
      </form>
      <div className={heading["input-div"]}>
        <input id="input-2" value={term2} className={heading.input} disabled />
      </div>
    </div>
  );
};

export default App;
