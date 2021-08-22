import axios from "axios";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Main() {
  const [userId, setUserId] = useState("");

  return (
    <div>
      <Link to="/worker">
        <button
          onClick={() => {
            axios
              .post("http://localhost:7000/api/token", {
                id: 1,
              })
              .then((response) => localStorage.setItem("token", response.data));
          }}
        >
          Worker
        </button>
      </Link>
      <input
        onChange={(e) => {
          setUserId(e.target.value);
          console.log(userId);
        }}
      ></input>
      <Link to="/customer">
        <button
          onClick={() => {
            axios
              .post("http://localhost:7000/api/token", {
                id: userId,
              })
              .then((response) => localStorage.setItem("token", response.data));
            console.log(userId);
          }}
        >
          Customer
        </button>
      </Link>
    </div>
  );
}
